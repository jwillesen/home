import { Link } from "react-router"

const iconClassNames = "fa-regular w-10 text-center"

export default function Home() {
  return (
    <ul className="text-xl">
      <li>
        <Link to="/resume">
          <i className={`${iconClassNames} fa-duck`} /> Resume
        </Link>
      </li>
      <li>
        <a href="https://keep-score.games/">
          <i className={`${iconClassNames} fa-dice`} /> Keep Score
        </a>
      </li>
      <li>
        <a href="https://memory.jonwillesen.dev/">
          <i className={`${iconClassNames} fa-cards-blank`} /> Memory
        </a>
      </li>
    </ul>
  )
}
