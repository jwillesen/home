import Head from 'next/head'
import Link from 'next/link'

const iconClassNames = 'fa-regular w-10 text-center'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jon Willesen | Home</title>
        <meta name="description" content="Home Page for Jon Willesen" />
      </Head>
      <ul className="text-xl">
        <li>
          <Link href="/resume">
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
    </>
  )
}
