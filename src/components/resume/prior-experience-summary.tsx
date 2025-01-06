import { Experience } from "./experience"
import SectionHeader from "./section-header"

export interface Props {
  experiences: Experience[]
}

export default function PriorExperienceSummary({ experiences }: Props) {
  const renderPriorExperience = (experience: Experience) => (
    <div key={experience.dates} className="ml-5 grid grid-cols-3">
      <div>{experience.title}</div>
      <div>{experience.business}</div>
      <div>{experience.dates}</div>
    </div>
  )

  return (
    <>
      <SectionHeader>Prior Experience</SectionHeader>
      {experiences.map((experience) => renderPriorExperience(experience))}
    </>
  )
}
