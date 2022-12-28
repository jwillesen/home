import { Experience } from './experience'
import ExperienceItemBullets from './experience-item-bullets'
import ExperienceSkills from './experience-skills'

export interface Props {
  experience: Experience
}

export default function ExperienceItem({ experience }: Props) {
  return (
    <div className="my-4">
      <h4 className="font-semibold text-lg">{experience.title}</h4>
      <div className="ml-5">
        <div className="grid grid-cols-3">
          <div>{experience.business}</div>
          <div>{experience.location}</div>
          <div>{experience.dates}</div>
        </div>
        {experience.skills?.length && (
          <ExperienceSkills skills={experience.skills} />
        )}
        {experience.summary && (
          <div className="ml-5 mt-2">{experience.summary}</div>
        )}
        {experience.bullets && (
          <div className="ml-5 mt-2">
            <ExperienceItemBullets bullets={experience.bullets} />
          </div>
        )}
      </div>
    </div>
  )
}
