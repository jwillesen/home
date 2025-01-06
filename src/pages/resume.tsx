import { experiences, priorExperiences } from "@/components/resume/experience"
import ContactInformation from "@/components/resume/contact-information"
import ExperienceSummary from "@/components/resume/experience-summary"
import PriorExperienceSummary from "@/components/resume/prior-experience-summary"
import Skills from "@/components/resume/skills"
import Education from "@/components/resume/education"

export default function Resume() {
  return (
    <>
      <h2 className="sr-only">Resume</h2>
      <ContactInformation />
      <ExperienceSummary experiences={experiences} />
      <PriorExperienceSummary experiences={priorExperiences} />
      <Skills />
      <Education />
    </>
  )
}
