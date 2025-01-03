import { ExperienceBullet } from "./experience"

export interface Props {
  bullets: ExperienceBullet[]
  listStyle?: string
}

export default function ExperienceItemBullets({
  bullets,
  listStyle = "list-disc",
}: Props) {
  return (
    <ul className={`${listStyle} list-inside ml-5`}>
      {bullets.map((bullet, index) => {
        if (Array.isArray(bullet)) {
          return (
            <ExperienceItemBullets
              key={index}
              bullets={bullet}
              listStyle="list-circle"
            />
          )
        } else {
          return <li key={index}>{bullet}</li>
        }
      })}
    </ul>
  )
}
