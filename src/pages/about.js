import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi, I'm <a href="https://www.linkedin.com/in/yuanlong-tony-cui/" target="_blank">
          Anthony Cui
        </a>.
      </p>
      <p> I haven't yet come up with a formal introduction of myself
        <s>,
          but since <i>I</i> built this blog,
          I get to put whatever I want here for now.
          blah blah blah
        </s>.
      </p>
      <StaticImage
        alt="Profile"
        src="./profile.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage