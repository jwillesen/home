import { experiences } from "@/components/resume/experience"
import ContactInformation from "@/components/resume/contact-information"
import ExperienceSummary from "@/components/resume/experience-summary"
import Skills from "@/components/resume/skills"
import Education from "@/components/resume/education"

export default function Resume() {
  return (
    <>
      <h2 className="sr-only">Resume</h2>
      <ContactInformation />
      <ExperienceSummary experiences={experiences} />
      <Skills />
      <Education />
    </>
  )
}
