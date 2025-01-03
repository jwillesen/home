import SectionHeader from "./section-header"

export default function ContactInformation() {
  return (
    <>
      <SectionHeader>Contact Information</SectionHeader>
      <ul className="list-disc list-inside">
        <li>
          Email:{" "}
          <a
            className="text-blue-700 underline"
            href="mailto:jon.willesen@gmail.com"
          >
            jon.willesen@gmail.com
          </a>
        </li>
        <li>
          Phone:{" "}
          <a className="text-blue-700 underline" href="tel:801-381-4176">
            801-381-4176
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            className="text-blue-700 underline"
            href="https://www.linkedin.com/in/jonwillesen"
          >
            https://www.linkedin.com/in/jonwillesen
          </a>
        </li>
      </ul>
    </>
  )
}
