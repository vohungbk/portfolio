# Hung Vo's Portfolio

Personal portfolio of Hung Vo, a Full-Stack Developer based in Da Nang, Vietnam. It focuses on SaaS and web applications built end to end with Next.js and NestJS.

<p align="center">
  <img alt="Stars" src="https://badgen.net/github/stars/vohungbk/portfolio">
  <img alt="Forks" src="https://badgen.net/github/forks/vohungbk/portfolio">
  <img alt="Issues" src="https://badgen.net/github/issues/vohungbk/portfolio">
  <img alt="Commits" src="https://badgen.net/github/commits/vohungbk/portfolio">
</p>

## Live demo

[https://hungvo.vercel.app/](https://hungvo.vercel.app/)

## Tech stack

- Next.js 12 (Pages Router), React 18, TypeScript
- styled-components
- framer-motion (animation)
- locomotive-scroll via react-locomotive-scroll (smooth scroll and parallax)
- react-icons

The site is fully static. There is no backend or CMS. The contact form opens the visitor's email client with a `mailto:` link.

## Getting started

Requirements: Node.js 16 or later and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Environment variables

| Name                | Description                                |
| ------------------- | ------------------------------------------ |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID (optional) |

Create a `.env.local` file to set it.

## Project structure

- `pages/` — `index.tsx` is the single page. `_app.tsx` holds global meta tags and analytics. `_document.tsx` sets the page language.
- `components/` — one component per section: Intro, Who, Skills, MainProjects, Contact. Styles live in `components/styled/`.
- `shared/contants.ts` — all site content: skills, projects, social links and the hero name path.
- `public/images/` — project covers and local icons.

## Updating content

Edit `shared/contants.ts`:

- **Skills:** add an item to a group in `skillGroups`. The hero animation reuses the same icons.
- **Projects:** add an item to `projects`. Reference technologies by skill title with `skillByTitle('Next.js')`.
- **Contact:** change `CONTACT_EMAIL` and `socialLinks`.

Page title, description and social preview image are set in `pages/_app.tsx`.

## Notes

- `reactStrictMode` is disabled in `next.config.js`.
- `package.json` pins `@types/react` with `overrides`. Without it, `@types/styled-components` pulls in a second React type version and the build fails.
