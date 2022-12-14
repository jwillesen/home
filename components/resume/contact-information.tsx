import SectionHeader from './section-header'

export default function ContactInformation() {
  return (
    <>
      <SectionHeader>Contact Information</SectionHeader>
      <ul className="list-disc list-inside">
        <li>
          email:{' '}
          <a
            className="text-blue-700 underline"
            href="mailto:jon.willesen@gmail.com"
          >
            jon.willesen@gmail.com
          </a>
        </li>
        <li>
          phone:{' '}
          <a className="text-blue-700 underline" href="tel:801-381-4176">
            801-381-4176
          </a>
        </li>
      </ul>
    </>
  )
}
