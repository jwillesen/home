import { Link } from "react-router"
import HeaderIconLink from "./header-icon-link"

export default function Header() {
  return (
    <header className="px-3 bg-red-800 text-white">
      <div className="py-2 flex items-center gap-4 max-w-4xl mx-auto">
        <Link to="/" className="flex-1">
          <h1 className="text-4xl">Jon Willesen</h1>
        </Link>
        <HeaderIconLink
          description="GitHub"
          href="https://github.com/jwillesen/"
          iconClass="fa-brands fa-github"
        />
        <HeaderIconLink
          description="LinkedIn"
          href="https://www.linkedin.com/in/jonwillesen/"
          iconClass="fa-brands fa-linkedin"
        />
        <HeaderIconLink
          description="Email"
          href="mailto:jon.willesen@gmail.com"
          iconClass="fa-regular fa-envelope"
        />
        <HeaderIconLink
          description="Phone"
          href="tel:801-381-4176"
          iconClass="fa-regular fa-phone"
        />
        <HeaderIconLink
          description="Resume"
          href="/jon-willesen-resume.pdf"
          iconClass="fa-regular fa-file-pdf"
        />
      </div>
    </header>
  )
}
