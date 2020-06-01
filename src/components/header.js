import React from "react"
import { string } from "prop-types"
import styled from "@emotion/styled"
import { Link } from "gatsby"

Header.propTypes = {
  siteTitle: string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled.header({
  background: "#0075c4",
  color: "white",
  marginBottom: "1.45rem",
})

const StyledHeaderDiv = styled.div({
  margin: `0 auto`,
  maxWidth: 960,
  padding: `1.45rem 1.0875rem`,
  display: "flex",
  alignItems: "center",
})

const StyledLink = styled.a({
  marginLeft: "1rem",
  color: "white",
  "&:visited": {
    color: "white",
  },
})

function HeaderIconLink({ href, srText, className }) {
  return (
    <StyledLink href={href}>
      <i className={`${className}`} />
      <span className="sr-only">{srText}</span>
    </StyledLink>
  )
}

export default function Header({ siteTitle }) {
  return (
    <StyledHeader>
      <StyledHeaderDiv>
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <HeaderIconLink
          className="fab fa-github"
          srText="Github"
          href="https://github.com/jwillesen/"
        />
        <HeaderIconLink
          className="fab fa-linkedin"
          srText="Linked In"
          href="https://www.linkedin.com/in/jonwillesen/"
        />
        <HeaderIconLink
          className="far fa-envelope"
          href="mailto:jon.willesen@gmail.com"
          srText="Email"
        />
        <HeaderIconLink
          className="far fa-phone"
          href="tel:801-381-4176"
          srText="Phone"
        />
      </StyledHeaderDiv>
    </StyledHeader>
  )
}
