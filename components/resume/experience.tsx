/* eslint-disable react/no-unescaped-entities */
import type { ReactNode } from 'react'

export type ExperienceBullet = ReactNode | ExperienceBullet[]

export interface Experience {
  business: string
  title: string
  dates: string
  location: string
  skills?: string[]
  summary?: ReactNode
  bullets?: ExperienceBullet[]
}

export const experiences: Experience[] = [
  {
    business: 'Outschool',
    title: 'Software Engineer 4',
    dates: 'July 2022 - Dec 2022',
    location: 'Remote, Salt Lake City, UT',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node',
      'Postgres',
      'Next.js',
      'GraphQL',
      'Apollo',
      'Jest',
      'Mocha',
      'Sinon',
      'AWS',
      'Git',
    ],
    summary: (
      <>
        Senior member of a cross-functional team tasked with SEO and improving
        the onboarding experience of new customers.
      </>
    ),
    bullets: [
      <>
        Collaboratively lead a project to integrate with Contentful, an external
        CMS, so marketing could easily create customized category landing pages
        without engineering support.
      </>,
      <>Optimized rendering of course cards on category pages.</>,
      <>Refactored duplicate code into a common library.</>,
    ],
  },
  {
    business: 'Guaranteed Rate Insurance',
    title: 'Senior Software Engineer',
    dates: 'July 2021 - July 2022',
    location: 'Remote, Salt Lake City, UT',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node',
      'Postgres',
      'Lambda',
      'Kafka',
      'Rest',
      'Pullstate',
      'Tailwind CSS',
      'Webpack',
      'Jest',
      'AWS',
      'Git',
    ],
    summary: (
      <>
        Hired as the first engineer on a new team to create software and tools
        to make company processes more efficient, drive business growth, and
        acquire new customers.
      </>
    ),
    bullets: [
      <>Determined the tools and practices used to create software.</>,
      <>Mentored engineers with less experience.</>,
      <>
        Lead the creation of a new web application and component library to
        gather new customer information and provide insurance quotes.
      </>,
      <>
        Wrote the Quoter serverless app that integrates the company's CMS with
        external Comparative Rater services.
      </>,
      <>
        Wrote the Loan Event Processor serverless app that consumes events from
        the parent company's loan event system and posts data into the CMS.
      </>,
    ],
  },
  // {
  //   business: 'Cvent',
  //   title: 'Lead Front End Software Engineer',
  //   dates: 'March 2021 - May 2021',
  //   location: 'Salt Lake City, UT',
  //   skills: ['JavaScript', 'TypeScript', 'React'],
  //   summary: (
  //     <>
  //       Lead front-end web developer for a team creating a React UI Framework
  //       used by 90 teams across the company.
  //     </>
  //   ),
  //   bullets: [
  //     <>Created architectural design documents.</>,
  //     <>Worked with Product Managers to organize and prioritize work.</>,
  //   ],
  // },
  {
    business: 'Pluralsight',
    title: 'Senior Software Engineer',
    dates: 'July 2020 - March 2021',
    location: 'Salt Lake City, UT',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node',
      'Postgres',
      'Kafka',
      'Rest',
      'Recoil',
      'D3',
      'Jest',
      'Git',
    ],
    summary: <>Lead front-end web developer for my team.</>,
    bullets: [
      <>Hired to be the JavaScript and web development expert for the team.</>,
      <>
        Architected and wrote the user interface for the Library Explorer
        internal tool.
      </>,
      <>
        Improved and refactored the UI for the existing Tag Management internal
        tool.
      </>,
    ],
  },
  {
    business: 'Instructure',
    title: 'Senior Software Engineer',
    dates: 'Sep 2012 - May 2020',
    location: 'Salt Lake City, UT',
    skills: [
      'JavaScript',
      'React',
      'Ruby on Rails',
      'Postgres',
      'Rest',
      'GraphQL',
      'Apollo',
      'Docker',
      'Webpack',
      'Redux',
      'Pullstate',
      'Jest',
      'RSpec',
      'Selenium',
      'AWS',
      'Git',
    ],
    summary: (
      <>
        Senior Software Engineer taking on a variety of roles and
        responsibilities.
      </>
    ),
    bullets: [
      <>
        5 years of primarily front end web development using React and related
        technologies.
      </>,
      [
        <>
          Created reusable React components and hooks to speed up development
          for my team and others.
        </>,
        <>Contributed to Instructure's UI framework (Instructure UI).</>,
        <>
          Worked closely with designers to ensure the UI implementation matched
          their vision.
        </>,
        <>
          Ensured user interfaces were fully accessible, including WCAG
          compliance.
        </>,
      ],
      <>2 years of managerial team lead experience.</>,
      [
        <>Lead multiple projects to successful completion.</>,
        <>
          Worked closely with product management to ensure requirements were met
          and understood.
        </>,
        <>
          Mentored junior and mid-level developers and helped them progress in
          their career.
        </>,
        <>Conducted yearly performance reviews.</>,
      ],
      <>
        3 years of primarily back end development using Ruby on Rails,
        PostgreSQL, and related technologies.
      </>,
    ],
  },
  {
    business: 'Evelyn Manufacturing',
    title: 'Senior Programmer',
    dates: 'Jan 2009 - Sep 2012',
    location: 'Salt Lake City, UT',
    skills: ['C++', 'JavaScript', 'Git', 'Subversion'],
    summary: <>C++ and JavaScript developer for both back end and front end.</>,
    bullets: [
      <>Started converting existing C++ user interfaces into web interfaces.</>,
      <>
        Debugged several multi-threading and synchronization issues and wrote
        tools to prevent such problems in the future.
      </>,
    ],
  },
  {
    business: 'Applied Signal Technology',
    title: 'Senior Software Developer',
    dates: 'Aug 2007 - Jan 2009',
    location: 'Salt Lake City, UT',
    skills: ['C++', 'Qt'],
  },
  {
    business: 'Direct Financial Solutions',
    title: 'Programmer III',
    dates: 'Mar 2004 - Aug 2007',
    location: 'Salt Lake City, UT',
    skills: ['C++', 'MySQL'],
  },
  {
    business: 'Evelyn Manufacturing',
    title: 'Programmer',
    dates: 'Jul 2003 - Mar 2004',
    location: 'Salt Lake City, UT',
    skills: ['C++'],
  },
  {
    business: 'Spontaneous Technology',
    title: 'Software Engineer',
    dates: 'Jun 2002 - Jul 2003',
    location: 'Salt Lake City, UT',
    skills: ['C++', 'Java'],
  },
  {
    business: 'Talk2 Technology',
    title: 'Programmer',
    dates: 'Dec 2000 - Jun 2002',
    location: 'Salt Lake City, UT',
    skills: ['C++'],
  },
]
