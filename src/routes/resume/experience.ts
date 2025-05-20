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
      "Designed and implemented a draggable credential viewer for notary meetings, allowing side-by-side document comparison. Solved complex event handling issues with PDF overlays and ensured consistent behavior across platforms.",
      "Built interface safeguards to keep floating elements accessible within UI bounds, improving usability on varied screen sizes.",
      "Developed admin tools for tracking fraud-risk signals, including a dynamic map view that plotted IP addresses across multiple transaction points to aid in anomaly detection.",
      "Contributed updates to shared component library and design system.",
      "Integrated Google Maps API with IP geolocation services for administrative review tools.",
      "Launched the first release of the Defend feature, supporting secure user verification workflows.",
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
      "Designed and implemented a custom auto-provisioning API to streamline internal onboarding, reducing time-to-setup for new customers.",
      "Built and enhanced administrative interfaces using React and Ruby on Rails, focusing on clarity, accessibility, and data usability.",
      "Updated branding and UI components to align the VRM product with Smarsh’s design standards, contributing to a cohesive cross-product experience.",
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
      "Co-led a project to integrate with Contentful, enabling the marketing team to publish customized category landing pages without engineering support.",
      "Refactored and consolidated frontend code across course listings to reduce duplication and improve maintainability.",
      "Optimized category page performance and rendering behavior to support SEO and increase discoverability of online courses.",
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
      "Led development of a new React and Tailwind-based web application to onboard customers and provide instant insurance quotes.",
      "Collaborated with stakeholders to define technical architecture and establish best practices for front-end development on a newly formed team.",
      "Mentored junior developers and helped shape the team’s engineering culture as it grew.",
      "Developed customer-facing interfaces that integrated with external quoting systems, ensuring seamless data flow and responsive UI.",
    ],
  },
  {
    company: "Pluralsight",
    title: "Senior Software Engineer",
    dateStart: "July 2020",
    dateEnd: "March 2021",
    location: "Remote (Salt Lake City, UT)",
    description:
      "Brought on as the team’s front-end specialist to lead development of internal tools for managing and visualizing educational content.",
    bullets: [
      "Architected and implemented the UI for the Library Explorer tool, enabling teams to browse and interact with complex educational content hierarchies.",
      "Improved the Tag Management interface by refining UX patterns and reorganizing content for clarity and efficiency.",
      "Collaborated closely with backend engineers and product stakeholders to shape internal workflows into intuitive, performant interfaces.",
      "Acted as a front-end mentor on the team, providing guidance on JavaScript, React, and web accessibility best practices.",
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
      "Led development of a two-way infinite scroll interface for the student planner, supporting seamless past/future navigation while preserving scroll position and maintaining accessibility for screen reader users.",
      "Passed multiple accessibility audits; personally addressed issues by adding screen-reader-friendly interactions, skip links, and alternative views (e.g., list-mode calendar for visually impaired users).",
      "Created a fully accessible, internationalized date picker that supported screen readers and natural keyboard navigation.",
      "Collaborated closely with designers and QA to implement accessible, WCAG-compliant UI components.",
      "Built and maintained reusable React components and hooks as part of Instructure’s UI library, used by teams across the company.",
      "Mentored junior and mid-level engineers, conducted performance reviews, and led multiple cross-functional project teams.",
    ],
  },
]
