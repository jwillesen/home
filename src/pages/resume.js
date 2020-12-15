import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ResumeSection = styled.section({})

const SectionHeader = styled.h3({
  borderBottom: "1px solid black",
  fontSize: "1.5em",
})

const SkillsHeader = styled.h4({})

const SkillsGrid = styled.div({
  marginLeft: "1rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
  gap: "1rem",
})

const SkillsItem = styled.div({})

const FeaturedSkillsItem = styled(SkillsItem)({
  fontSize: "1.15rem",
})

const ExperienceDiv = styled.div({
  marginBottom: "1rem",
  marginLeft: "1rem",
})
const ExperienceHeader = styled.h4({
  margin: 0,
})
const ExperienceSubHeader = styled.div({
  marginLeft: "1rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "0 1rem",
})
const JobDescription = styled.div({
  marginLeft: "1rem",
  marginTop: "1rem",
})
function Experience({ business, title, dates, location, children }) {
  return (
    <ExperienceDiv>
      <ExperienceHeader>{title}</ExperienceHeader>
      <ExperienceSubHeader>
        <div>{business}</div>
        <div>{location}</div>
        <div>{dates}</div>
      </ExperienceSubHeader>
      <JobDescription>{children}</JobDescription>
    </ExperienceDiv>
  )
}

function ContactInformation() {
  return (
    <>
      <SectionHeader>Contact Information</SectionHeader>
      <div>
        <ul>
          <li>
            email:{" "}
            <a href="mailto:jon.willesen@gmail.com">jon.willesen@gmail.com</a>
          </li>
          <li>
            phone: <a href="tel:801-381-4176">801-381-4176</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default function Resume() {
  // TODO: Objective/Summary Section
  // TODO: Job Description at Instructure

  return (
    <Layout>
      <SEO title="resume" />
      <h2 className="sr-only">Resume</h2>
      <ContactInformation />
      <ResumeSection>
        <SectionHeader>Experience</SectionHeader>
        <Experience
          business="Pluralsight"
          title="Senior Software Engineer"
          dates="Jul 2020 - Present"
          location="Salt Lake City, UT"
        ></Experience>
        <Experience
          business="Instructure"
          title="Senior Software Engineer"
          dates="Sep 2012 - May 2020"
          location="Salt Lake City, UT"
        ></Experience>
        <Experience
          business="Evelyn Manufacturing"
          title="Senior Programmer"
          dates="Jan 2009 - Sep 2012"
          location="Salt Lake City, UT"
        ></Experience>
        <Experience
          business="Applied Signal Technology"
          title="Senior Software Developer"
          dates="Aug 2007 - Jan 2009"
          location="Salt Lake City, UT"
        />
        <Experience
          business="Direct Financial Solutions"
          title="Programmer III"
          dates="Mar 2004 - Aug 2007"
          location="Salt Lake City, UT"
        />
        <Experience
          business="Evelyn Manufacturing"
          title="Programmer"
          dates="Jul 2003 - Mar 2004"
          location="Salt Lake City, UT"
        />
        <Experience
          business="Spontaneous Technology"
          title="Software Engineer"
          dates="Jun 2002 - Jul 2003"
          location="Salt Lake City, UT"
        />
        <Experience
          business="Talk2 Technology"
          title="Programmer"
          dates="2000 - 2002"
          location="Salt Lake City, UT"
        />
      </ResumeSection>

      <ResumeSection>
        <SectionHeader>Skills</SectionHeader>

        <SkillsHeader>Featured</SkillsHeader>
        <SkillsGrid>
          <FeaturedSkillsItem>JavaScript</FeaturedSkillsItem>
          <FeaturedSkillsItem>React</FeaturedSkillsItem>
          <FeaturedSkillsItem>Node</FeaturedSkillsItem>
          <FeaturedSkillsItem>SaaS</FeaturedSkillsItem>
        </SkillsGrid>

        <SkillsHeader>Languages and Frameworks</SkillsHeader>
        <SkillsGrid>
          <SkillsItem>Ruby</SkillsItem>
          <SkillsItem>Ruby on Rails</SkillsItem>
          <SkillsItem>SQL</SkillsItem>
          <SkillsItem>C++</SkillsItem>
        </SkillsGrid>

        <SkillsHeader>Technologies</SkillsHeader>
        <SkillsGrid>
          <SkillsItem>Git</SkillsItem>
          <SkillsItem>Docker</SkillsItem>
          <SkillsItem>PostgreSQL</SkillsItem>
          <SkillsItem>Webpack</SkillsItem>
          <SkillsItem>Jest</SkillsItem>
        </SkillsGrid>

        <SkillsHeader>Other Keywords</SkillsHeader>
        <SkillsGrid>
          <SkillsItem>Accessibility</SkillsItem>
          <SkillsItem>Aria</SkillsItem>
          <SkillsItem>Frontend</SkillsItem>
          <SkillsItem>Backend</SkillsItem>
          <SkillsItem>Full Stack</SkillsItem>
          <SkillsItem>Automated Testing</SkillsItem>
          <SkillsItem>Agile</SkillsItem>
          <SkillsItem>Scrum</SkillsItem>
          <SkillsItem>OOP</SkillsItem>
          <SkillsItem>HTML</SkillsItem>
          <SkillsItem>CSS</SkillsItem>
          <SkillsItem>JSON</SkillsItem>
          <SkillsItem>XML</SkillsItem>
        </SkillsGrid>
      </ResumeSection>

      <ResumeSection>
        <SectionHeader>Education</SectionHeader>
        <Experience
          business="University of Utah"
          title="BS Computer Science"
          dates="Aug 1997 - Dec 2000"
        ></Experience>
      </ResumeSection>
    </Layout>
  )
}
