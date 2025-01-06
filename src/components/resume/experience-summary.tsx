import { Experience } from "./experience"
import ExperienceItem from "./experience-item"
import SectionHeader from "./section-header"

export interface Props {
  experiences: Experience[]
}

export default function ExperienceSummary({ experiences }: Props) {
  return (
    <>
      <SectionHeader>Experience</SectionHeader>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.dates} experience={experience} />
      ))}
    </>
  )
}
