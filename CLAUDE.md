# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server
- `npm run build` / `npm run start` — production build / serve
- `npx tsc --noEmit` — type check (this is what the lint-staged hook runs)
- `npx eslint <files>` — lint specific files

Notes:
- Node 26 (`engines` is `26.x`, `.nvmrc` is `26`). The package manager is npm; `package-lock.json` is committed.
- `npm run lint` runs ESLint 9 (flat config in `eslint.config.mjs`) on `components`, `pages`, `shared`, `lib`.
- There are no tests and no test runner.
- `lint-staged.config.js` calls `npx tsc` / `npx eslint` / `npx prettier`. The `.husky/pre-commit` hook currently has the `lint-staged` call commented out, so nothing runs on commit.
- Version limits: keep React 18 (`react-locomotive-scroll` needs it), keep `locomotive-scroll` v4, keep TypeScript below 6.1 (typescript-eslint peer range), keep ESLint 9 (`eslint-plugin-react` peer range).

## Architecture

Single-page personal portfolio built with Next.js 16 (Pages Router, Turbopack), React 18, TypeScript (strict), and styled-components. There is no backend, API route, or CMS call. All content is static.

- `pages/index.tsx` — the only page. Wraps the sections in `LocomotiveScrollProvider` (smooth scroll) and renders `Intro`, `Who`, `Skills`, `MainProjects`, `Contact` in order. Parallax is driven by `data-scroll*` attributes on elements inside the section components.
- `pages/_app.tsx` — global `<Head>` meta tags, framer-motion `LazyMotion` (`domAnimation`), and Google Analytics via `next/script`, with route-change page view tracking through `lib/gtag.js`. `GA_TRACKING_ID` comes from `NEXT_PUBLIC_GA_ID`.
- `components/*.tsx` — one component per page section, plus `Canvas.tsx` (particle animation using the tech icons) and `Cursor.tsx` (custom cursor).
- `components/styled/*.styled.tsx` — styled-components for each component. Keep styles here, not inline. styled-components is compiled by Next's SWC via `compiler.styledComponents` in `next.config.js`. There is no Babel config.
- `shared/contants.ts` — all site content: SVG path data for the animated name (`characters`), `skills`, `projects`, `socialLinks`, `canvasImages`. Note the filename typo (`contants`); keep it when importing. To add or change a project or skill, edit this file.
- `shared/types.ts` — `allDataType`, a leftover from the old GraphCMS data source. Its `smallProjects` shape is not used by the current content.
- `public/images/` — local project covers and icons. Tech icons are loaded remotely from jsDelivr (`PKief/vscode-material-icon-theme`), often proxied through `images.weserv.nl`.

## Conventions

- Prettier: no semicolons, single quotes, 2 spaces, ES5 trailing commas.
- ESLint errors on `any` and unused vars (`@typescript-eslint`), and on `let` that could be `const`.
- `reactStrictMode` is `false` in `next.config.js`, because the Locomotive Scroll and canvas effects do not tolerate the double-mount.
