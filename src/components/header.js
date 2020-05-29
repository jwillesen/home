import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default function Header({ siteTitle }) {
  const linkStyles = {
    marginLeft: "1rem",
  }

  return (
    <header
      className="has-background-primary has-text-white"
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1 className="title is-1" style={{ margin: 0, flex: 1 }}>
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
        <span class="icon" style={linkStyles}>
          <a
            className="has-text-white"
            href="https://www.linkedin.com/in/jonwillesen/"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </span>
        <span class="icon" style={linkStyles}>
          <a className="has-text-white" href="https://github.com/jwillesen/">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </span>
      </div>
    </header>
  )
}
