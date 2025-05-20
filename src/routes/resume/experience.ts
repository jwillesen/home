export type ExperienceItem = {
  company: string
  title: string
  dateStart: string
  dateEnd: string
  location: string
  description: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: "Proof",
    title: "Senior Software Engineer",
    dateStart: "Aug 2023",
    dateEnd: "May 2025",
    location: "Remote (Salt Lake City, UT)",
    description:
      "Full stack developer focused on high-quality user experience for identity verification workflows.",
    bullets: [
      "Designed and built a draggable credential viewer for notary meetings, enabling side-by-side PDF comparison. Resolved complex event handling with overlay layers and ensured consistent cross-platform behavior.",
      "Implemented UI safeguards to keep draggable elements within viewable bounds, enhancing usability across varied screen sizes and layouts.",
      "Developed admin tools to track fraud-risk signals, including a dynamic map that visualized IP addresses across multiple transaction points to support anomaly detection.",
      "Contributed improvements to the shared component library and design system, supporting consistency and reuse across the product.",
      "Contributed to the first release of Defend, the company’s initial fraud prevention feature. Integrated external risk signals and built UI components to surface verification data within secure workflows.",
    ],
  },
  {
    company: "Smarsh",
    title: "Senior Software Engineer",
    dateStart: "Jan 2023",
    dateEnd: "Aug 2023",
    location: "Remote (Salt Lake City, UT)",
    description:
      "Contributed to the VRM product team, improving internal tooling and user-facing admin experiences.",
    bullets: [
      "Built a custom auto-provisioning API to streamline internal onboarding, reducing setup time for new customers.",
      "Developed and enhanced admin interfaces in React and Rails, prioritizing clarity, accessibility, and data usability.",
      "Updated branding and UI components to align the VRM product with Smarsh’s design system, contributing to a cohesive cross-product experience.",
    ],
  },
  {
    company: "Outschool",
    title: "Software Engineer 4",
    dateStart: "July 2022",
    dateEnd: "Dec 2022",
    location: "Remote (Salt Lake City, UT)",
    description:
      "Worked on a cross-functional team focused on SEO and new user onboarding within an education-focused platform.",
    bullets: [
      "Contributed to a Contentful integration project that enabled the marketing team to publish custom category landing pages without engineering support.",
      "Streamlined course listing code by refactoring and consolidating components, reducing duplication and boosting maintainability.",
      "Optimized category page performance and rendering to support SEO and improve discoverability of online courses.",
    ],
  },
  {
    company: "Guaranteed Rate Insurance",
    title: "Senior Software Engineer",
    dateStart: "July 2021",
    dateEnd: "July 2022",
    location: "Remote (Salt Lake City, UT)",
    description:
      "First engineer hired to establish new systems and tools for growing the company’s digital insurance products.",
    bullets: [
      "Led development of a React and Tailwind-based web app for onboarding customers and delivering instant insurance quotes.",
      "Worked with stakeholders to define technical architecture and establish front-end best practices for a newly formed team.",
      "Mentored junior developers and helped establish a strong engineering culture as the team scaled.",
      "Developed customer-facing interfaces integrated with external quoting systems, ensuring seamless data flow and a responsive UI.",
    ],
  },
  {
    company: "Pluralsight",
    title: "Senior Software Engineer",
    dateStart: "July 2020",
    dateEnd: "March 2021",
    location: "Remote (Salt Lake City, UT)",
    description:
      "Brought on as the team's front-end specialist to lead development of internal tools for managing and visualizing educational content.",
    bullets: [
      "Architected and built the Library Explorer UI, enabling teams to navigate and interact with complex educational content hierarchies.",
      "Improved the Tag Management interface by refining UX patterns and reorganizing content to enhance clarity and efficiency.",
      "Mentored teammates on JavaScript, React, and accessibility best practices, serving as the team’s front-end specialist.",
    ],
  },
  {
    company: "Instructure",
    title: "Senior Software Engineer",
    dateStart: "Sep 2012",
    dateEnd: "May 2020",
    location: "Salt Lake City, UT",
    description:
      "Contributed to Canvas LMS as a front-end specialist, team lead, and accessibility advocate.",
    bullets: [
      "Led development of a two-way infinite scroll for the student planner, enabling seamless past/future navigation while preserving scroll position and ensuring screen reader and keyboard accessibility.",
      "Passed multiple accessibility audits by directly addressing issues—adding screen reader-friendly interactions, skip links, and alternative views (e.g., a list-mode calendar for visually impaired users).",
      "Worked with designers and QA to implement accessible, WCAG-compliant UI components, including a fully internationalized date picker with screen reader support and intuitive keyboard navigation.",
      "Built and maintained reusable React components and hooks for Instructure’s shared UI library, supporting accessibility and consistency across product teams.",
      "Mentored junior and mid-level engineers, conducted performance reviews, and led cross-functional project teams to deliver key initiatives.",
    ],
  },
]
