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
  fontSize: "1.25rem",
  margin: 0,
})
const ExperienceSubHeader = styled.div({
  fontSize: "1.1rem",
  marginLeft: "1rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "0 1rem",
})
const JobDescription = styled.div({
  marginLeft: "1rem",
  marginTop: "1rem",
})
const JobSummary = styled.div({})
const JobBullets = styled.ul({
  marginTop: "0.5rem",
})
const Bullet = styled.li({})
const SubBullets = styled.ul({})

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
  return (
    <Layout>
      <SEO title="resume" />
      <h2 className="sr-only">Resume</h2>
      <ContactInformation />
      <ResumeSection>
        <SectionHeader>Experience</SectionHeader>
        <Experience
          business="Guaranteed Rate Insurance"
          title="Senior Software Engineer"
          dates="July 2021 - Present"
          location="Remote, Salt Lake City UT"
        >
          <JobSummary>
            I was hired as the first engineer on a new team to create software
            and tools to make company processes more efficient, drive business
            growth, and acquire new customers.
          </JobSummary>
          <JobBullets>
            <Bullet>
              Determining the tools and practices we use to create software.
            </Bullet>
            <Bullet>Mentoring more junior engineers.</Bullet>
            <Bullet>
              Leading the creation of a new web application and component
              library to gather new customer information and provide insurance
              quotes.
            </Bullet>
            <Bullet>
              Wrote the Quoter serverless app that integrates the company's CMS
              with external Comparative Rater services.
            </Bullet>
            <Bullet>
              Wrote the Loan Event Processor serverless app that consumes events
              from the parent company's loan event system and posts data into
              the CMS.
            </Bullet>
          </JobBullets>
        </Experience>
        {/* <Experience
          business="Cvent"
          title="Lead Front End Software Engineer"
          dates="March 2021 - May 2021"
          location="Salt Lake City, UT"
        >
          <JobSummary>
            Lead front-end web developer for a team creating a React UI
            Framework used by 90 teams across the company.
          </JobSummary>
          <JobBullets>
            <Bullet>Created architectural design documents.</Bullet>
            <Bullet>
              Worked with Product Managers to organize and prioritize work.
            </Bullet>
          </JobBullets>
        </Experience> */}
        <Experience
          business="Pluralsight"
          title="Senior Software Engineer"
          dates="July 2020 - March 2021"
          location="Salt Lake City, UT"
        >
          <JobSummary>Lead front-end web developer for my team.</JobSummary>
          <JobBullets>
            <Bullet>
              Hired to be the JavaScript and web development expert for the
              team.
            </Bullet>
            <Bullet>
              Architected and wrote the user interface for the Library Explorer
              internal tool.
            </Bullet>
            <Bullet>
              Improved and refactored the UI for the existing Tag Management
              internal tool.
            </Bullet>
          </JobBullets>
        </Experience>
        <Experience
          business="Instructure"
          title="Senior Software Engineer"
          dates="Sep 2012 - May 2020"
          location="Salt Lake City, UT"
        >
          <JobSummary>
            Senior Software Engineer taking on a variety of roles and
            responsibilities.
          </JobSummary>
          <JobBullets>
            <Bullet>
              5 years of primarily front end web development using React and
              related technologies.
            </Bullet>
            <SubBullets>
              <Bullet>
                Created reusable React components and hooks to speed up
                development for my team and others.
              </Bullet>
              <Bullet>
                Contributed to Instructure's UI framework (Instructure UI).
              </Bullet>
              <Bullet>
                Worked closely with designers to ensure the UI implementation
                matched their vision.
              </Bullet>
              <Bullet>
                Ensured user interfaces were fully accessible, including WCAG
                compliance.
              </Bullet>
            </SubBullets>
            <Bullet>2 years of managerial team lead experience.</Bullet>
            <SubBullets>
              <Bullet>Lead multiple projects to successful completion.</Bullet>
              <Bullet>
                Worked closely with product management to ensure requirements
                were met and understood.
              </Bullet>
              <Bullet>
                Mentored junior and mid-level developers and helped them
                progress in their career.
              </Bullet>
              <Bullet>Conducted yearly performance reviews.</Bullet>
            </SubBullets>
            <Bullet>
              3 years of primarily back end development using Ruby on Rails,
              PostgreSQL, and related technologies.
            </Bullet>
          </JobBullets>
        </Experience>
        <Experience
          business="Evelyn Manufacturing"
          title="Senior Programmer"
          dates="Jan 2009 - Sep 2012"
          location="Salt Lake City, UT"
        >
          <JobSummary>
            C++ and JavaScript developer for both back end and front end.
          </JobSummary>
          <JobBullets>
            <Bullet>
              Started converting existing C++ user interfaces into web
              interfaces.
            </Bullet>
            <Bullet>
              Debugged several multi-threading and synchronization issues and
              wrote tools to prevent such problems in the future.
            </Bullet>
          </JobBullets>
        </Experience>
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
          dates="Dec 2000 - Jun 2002"
          location="Salt Lake City, UT"
        />
      </ResumeSection>

      <ResumeSection>
        <SectionHeader>Skills</SectionHeader>

        <SkillsHeader>Featured</SkillsHeader>
        <SkillsGrid>
          <FeaturedSkillsItem>JavaScript</FeaturedSkillsItem>
          <FeaturedSkillsItem>TypeScript</FeaturedSkillsItem>
          <FeaturedSkillsItem>React</FeaturedSkillsItem>
          <FeaturedSkillsItem>Node</FeaturedSkillsItem>
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
          <SkillsItem>Redux</SkillsItem>
          <SkillsItem>Recoil</SkillsItem>
          <SkillsItem>Pullstate</SkillsItem>
          <SkillsItem>Tailwind CSS</SkillsItem>
        </SkillsGrid>

        <SkillsHeader>Other Keywords</SkillsHeader>
        <SkillsGrid>
          <SkillsItem>SaaS</SkillsItem>
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
