import type { Project } from './types'
import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiPostgresql, SiShadcnui, SiZod } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

export const characters = [
  'M49.26 0.269989V63H41.07V34.56H9.11999V63H0.929993V0.269989H9.11999V27.81H41.07V0.269989H49.26Z',
  'M106.984 13.68V63H98.7944V55.71C97.2344 58.23 95.0444 60.21 92.2244 61.65C89.4644 63.03 86.4044 63.72 83.0444 63.72C79.2044 63.72 75.7544 62.94 72.6944 61.38C69.6344 59.76 67.2045 57.36 65.4044 54.18C63.6644 51 62.7944 47.13 62.7944 42.57V13.68H70.8944V41.49C70.8944 46.35 72.1244 50.1 74.5844 52.74C77.0445 55.32 80.4045 56.61 84.6645 56.61C89.0445 56.61 92.4944 55.26 95.0144 52.56C97.5344 49.86 98.7944 45.93 98.7944 40.77V13.68H106.984Z',
  'M144.843 12.78C150.843 12.78 155.703 14.61 159.423 18.27C163.143 21.87 165.003 27.09 165.003 33.93V63H156.903V35.1C156.903 30.18 155.673 26.43 153.213 23.85C150.753 21.21 147.393 19.89 143.133 19.89C138.813 19.89 135.363 21.24 132.783 23.94C130.263 26.64 129.003 30.57 129.003 35.73V63H120.813V13.68H129.003V20.7C130.623 18.18 132.813 16.23 135.573 14.85C138.393 13.47 141.483 12.78 144.843 12.78Z',
  'M198.721 12.87C202.981 12.87 206.701 13.8 209.881 15.66C213.121 17.52 215.521 19.86 217.081 22.68V13.68H225.361V64.08C225.361 68.58 224.401 72.57 222.481 76.05C220.561 79.59 217.801 82.35 214.201 84.33C210.661 86.31 206.521 87.3 201.781 87.3C195.301 87.3 189.901 85.77 185.581 82.71C181.261 79.65 178.711 75.48 177.931 70.2H186.031C186.931 73.2 188.791 75.6 191.611 77.4C194.431 79.26 197.821 80.19 201.781 80.19C206.281 80.19 209.941 78.78 212.761 75.96C215.641 73.14 217.081 69.18 217.081 64.08V53.73C215.461 56.61 213.061 59.01 209.881 60.93C206.701 62.85 202.981 63.81 198.721 63.81C194.341 63.81 190.351 62.73 186.751 60.57C183.211 58.41 180.421 55.38 178.381 51.48C176.341 47.58 175.321 43.14 175.321 38.16C175.321 33.12 176.341 28.71 178.381 24.93C180.421 21.09 183.211 18.12 186.751 16.02C190.351 13.92 194.341 12.87 198.721 12.87ZM217.081 38.25C217.081 34.53 216.331 31.29 214.831 28.53C213.331 25.77 211.291 23.67 208.711 22.23C206.191 20.73 203.401 19.98 200.341 19.98C197.281 19.98 194.491 20.7 191.971 22.14C189.451 23.58 187.441 25.68 185.941 28.44C184.441 31.2 183.691 34.44 183.691 38.16C183.691 41.94 184.441 45.24 185.941 48.06C187.441 50.82 189.451 52.95 191.971 54.45C194.491 55.89 197.281 56.61 200.341 56.61C203.401 56.61 206.191 55.89 208.711 54.45C211.291 52.95 213.331 50.82 214.831 48.06C216.331 45.24 217.081 41.97 217.081 38.25Z',
]

export const CONTACT_EMAIL = 'vohungbk@gmail.com'

export const socialLinks: {
  title: string
  Icon: IconType
  link: string
  external: boolean
}[] = [
  {
    title: CONTACT_EMAIL,
    Icon: MdEmail,
    link: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    title: 'LinkedIn',
    Icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/hung-vo-3134b3116/',
    external: true,
  },
  {
    title: 'Github',
    Icon: FaGithub,
    link: 'https://github.com/vohungbk',
    external: true,
  },
]

const materialIcon = (name: string) =>
  `https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2F${name}.svg&w=50&h=50`

export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      {
        title: 'HTML',
        image: materialIcon('html'),
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        title: 'CSS',
        image: materialIcon('css'),
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        title: 'JavaScript',
        image: materialIcon('javascript'),
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        title: 'TypeScript',
        image: materialIcon('typescript'),
        link: 'https://www.typescriptlang.org/',
      },
      {
        title: 'React',
        image: materialIcon('react'),
        link: 'https://reactjs.org/',
      },
      {
        title: 'Next.js',
        image: materialIcon('next'),
        link: 'https://nextjs.org/',
      },
      {
        title: 'Tailwind CSS',
        image: materialIcon('tailwindcss'),
        link: 'https://tailwindcss.com/',
      },
      {
        title: 'Sass',
        image: materialIcon('sass'),
        link: 'https://sass-lang.com/',
      },
      {
        title: 'Angular',
        image: materialIcon('angular'),
        link: 'https://angular.io/',
      },
      {
        title: 'Webpack',
        image: materialIcon('webpack'),
        link: 'https://webpack.js.org/',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        title: 'Node.js',
        image: materialIcon('nodejs'),
        link: 'https://nodejs.org/',
      },
      {
        title: 'NestJS',
        image: materialIcon('nest'),
        link: 'https://nestjs.com/',
      },
      {
        title: 'PHP',
        image: materialIcon('php'),
        link: 'https://www.php.net/',
      },
      {
        title: 'Laravel',
        image: materialIcon('laravel'),
        link: 'https://laravel.com/',
      },
      {
        title: 'Supabase',
        image: materialIcon('supabase'),
        link: 'https://supabase.com/',
      },
      {
        title: 'Firebase',
        image: materialIcon('firebase'),
        link: 'https://firebase.google.com/',
      },
      {
        title: 'Stripe',
        image: '/images/stripe.svg',
        link: 'https://stripe.com/docs',
      },
      {
        title: 'Git',
        image: materialIcon('git'),
        link: 'https://git-scm.com/',
      },
    ],
  },
]

// Hero canvas particles reuse the skill icons so both lists stay in sync
export const canvasImages = skillGroups.flatMap((group) =>
  group.skills.map((skill) => skill.image)
)

const skillByTitle = (title: string) => {
  const skill = skillGroups
    .flatMap((group) => group.skills)
    .find((item) => item.title === title)
  if (!skill) throw new Error(`Unknown skill: ${title}`)
  return { name: skill.title, icon: skill.image }
}

export const projects: Project[] = [
  {
    id: 'airport-operations-saas',
    name: 'Airport Operations SaaS',
    tagline: 'Multi-Tenant Rental Management Platform',
    description:
      'A multi-tenant airport child-seat rental management platform designed to help rental partners manage bookings, inventory, operations, and settlements across multiple airports.',
    features: [
      'Multi-tenant architecture with PostgreSQL Row Level Security (RLS)',
      'Role-based access control for Admin, Operations Manager, Partner User, and Technician',
      'Booking management by airport, pickup/return dates, seat class, and daily pricing',
      'Inventory, cleaning, inspection, technician jobs, and incident management',
      'Partner settlements, invoices, and payment status tracking',
    ],
    demo: 'https://airport-operations-saas.vercel.app/',
    github: 'https://github.com/vohungbk/airport-operations-saas',
    largeMedia: true,
    demoAccess: {
      email: 'admin@airportops.example',
      password: 'DemoPassw0rd!',
    },
    technologies: [
      skillByTitle('Next.js'),
      skillByTitle('TypeScript'),
      skillByTitle('Tailwind CSS'),
      skillByTitle('Supabase'),
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'shadcn/ui', Icon: SiShadcnui, color: '#FFFFFF' },
      { name: 'Zod', Icon: SiZod, color: '#3E67B1' },
    ],
    image: {
      url: '/images/airport-operations-cover.png',
      alt: 'Airport Operations SaaS Workflow Board showing bookings grouped by workflow step, with partner, airport and priority filters',
      width: 2560,
      height: 1197,
    },
  },
  {
    id: 'flowops',
    name: 'FlowOps',
    tagline: 'CRM & Business Management Platform',
    description:
      'A multi-user CRM and business management platform for managing customers, leads, and sales pipelines with role-based access and database-level security.',
    features: [
      'Role-based access control enforced with PostgreSQL Row Level Security',
      'Customer and lead management with a drag-and-drop sales pipeline',
      'Analytics dashboard with revenue, conversion funnel, and KPIs',
      'Immutable audit logs for important actions and data exports',
    ],
    demo: 'https://flowops-steel.vercel.app/',
    github: 'https://github.com/vohungbk/flowops',
    demoAccess: {
      email: 'sarah.rep@demo.app',
      password: 'demo@2026',
    },
    technologies: [
      skillByTitle('Next.js'),
      skillByTitle('TypeScript'),
      skillByTitle('Tailwind CSS'),
      skillByTitle('Supabase'),
    ],
    image: {
      url: '/images/flowops-cover.png',
      alt: 'FlowOps dashboard showing customer and lead totals, win rate, a 12-month revenue chart and pipeline value by stage',
      width: 2557,
      height: 1212,
    },
  },
  {
    id: 'eyewear-store',
    name: 'Eyewear Store',
    tagline: 'Modern E-commerce Platform',
    description:
      'A modern eyewear e-commerce platform designed to deliver a smooth online shopping experience with integrated payment processing and store management capabilities.',
    features: [
      'Product catalog and product browsing',
      'Shopping cart and checkout experience',
      'Stripe payment integration',
      'Admin dashboard for store management',
      'Facebook Pixel and Conversions API integration',
    ],
    demo: 'https://eyewear-store-murex.vercel.app/',
    github: 'https://github.com/vohungbk/eyewear-store',
    technologies: [
      skillByTitle('Next.js'),
      skillByTitle('TypeScript'),
      skillByTitle('Tailwind CSS'),
      skillByTitle('Supabase'),
      skillByTitle('Stripe'),
    ],
    image: {
      url: '/images/eyewear-store-cover.png',
      alt: 'VÉLORA eyewear store home page with promotional banners for everyday eyewear and sunglasses',
      width: 2554,
      height: 1198,
    },
  },
  // Coffee Order is hidden: its live demo (coffee-milano.vercel.app) is
  // disabled on Vercel (HTTP 402). Restore it once the demo is back online.
  // {
  //   id: 'coffee-order',
  //   name: 'Coffee Order',
  //   tagline: 'Coffee Ordering Website',
  //   description: 'A coffee order website built with MERN',
  //   features: [
  //     'Coffee ordering flow with online payment',
  //     'Separate Next.js client and Node.js server',
  //   ],
  //   demo: 'https://coffee-milano.vercel.app/',
  //   github: 'https://github.com/vohungbk/coffee-shop',
  //   technologies: [
  //     skillByTitle('Next.js'),
  //     skillByTitle('TypeScript'),
  //     skillByTitle('Tailwind CSS'),
  //     skillByTitle('Node.js'),
  //   ],
  //   image: {
  //     url: '/images/coffee-cover.png',
  //     alt: 'Coffee Order website home page',
  //     width: 2870,
  //     height: 1300,
  //   },
  // },

  // Frontend-only projects, hidden to keep the full-stack focus.
  // Uncomment to show them again.
  // {
  //   id: 'cl4198jlh4fb10b0yca75wulg',
  //   title: 'Color Maker',
  //   description: 'Create and export beautiful color.',
  //   highlights: [],
  //   demo: 'https://colors-maker.vercel.app/',
  //   github: 'https://github.com/vohungbk/color-maker',
  //   technologies: [
  //     skillByTitle('Next.js'),
  //     skillByTitle('TypeScript'),
  //     skillByTitle('Sass'),
  //   ],
  //   image: {
  //     url: '/images/color-maker-cover.png',
  //   },
  // },
  // {
  //   id: 'cl4198jlh4fb10b0yca75wulh',
  //   title: 'Restaurant Booking',
  //   description: 'A restaurant booking website',
  //   highlights: [],
  //   demo: 'https://restaurant-booking-online.vercel.app/',
  //   github: 'https://github.com/vohungbk/restaurant-booking',
  //   technologies: [
  //     skillByTitle('Tailwind CSS'),
  //     skillByTitle('Next.js'),
  //     skillByTitle('TypeScript'),
  //   ],
  //   image: {
  //     url: '/images/restaurant-cover.png',
  //   },
  // },
]
