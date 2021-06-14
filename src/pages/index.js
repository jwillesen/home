import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ul>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
      <li>
        <Link to="https://memory.jonwillesen.dev">Memory Game</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
