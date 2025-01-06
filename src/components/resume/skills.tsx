import SectionHeader from "./section-header"

export interface Skill {
  title: string
  keywords: string[]
}

export const skills: Skill[] = [
  {
    title: "Featured",
    keywords: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node",
      "Rest",
      "GraphQL",
      "Ruby",
      "Ruby on Rails",
    ],
  },
  {
    title: "Technologies",
    keywords: [
      "C++",
      "SQL",
      "Git",
      "Docker",
      "PostgreSQL",
      "Next.js",
      "Webpack",
      "Redux",
      "Tailwind CSS",
      "Lambda",
      "Rest",
      "Apollo",
      "Kafka",
      "RSpec",
      "Jest",
      "Mocha",
      "Sinon",
      "Cypress",
    ],
  },
  {
    title: "Other Keywords",
    keywords: [
      "SaaS",
      "Accessibility",
      "Aria",
      "Frontend",
      "Backend",
      "Full Stack",
      "Serverless",
      "Automated Testing",
      "Agile",
      "Scrum",
      "OOP",
      "HTML",
      "CSS",
      "JSON",
      "XML",
    ],
  },
]

export default function Skills() {
  return (
    <>
      <SectionHeader>Skills Summary</SectionHeader>
      {skills.map(({ title, keywords }) => (
        <div key={title}>
          <h4 className="font-semibold my-1">{title}</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 ml-5">
            {keywords.map((keyword) => (
              <div key={keyword}>{keyword}</div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
