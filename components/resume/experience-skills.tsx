export interface Props {
  skills: string[]
}

export default function ExperienceSkills({ skills }: Props) {
  return (
    <div className="ml-5 mt-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 font-semibold">
      {skills.map(skill => (
        <div key={skill}>{skill}</div>
      ))}
    </div>
  )
}
