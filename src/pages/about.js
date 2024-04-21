import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi, this is <a href="https://www.linkedin.com/in/yuanlong-tony-cui/" target="_blank" rel="noreferrer">
          Anthony Cui
        </a>.
      </p>
      <p> I haven't yet come up with a formal introduction of myself
        <s>,
          but since I built this blog,
          I get to put whatever I want to fill out the space.
          blah blah blah
        </s>.
      </p>
      <StaticImage
        alt="Profile"
        src="./profile-about.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage