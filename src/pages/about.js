import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi, my name is Anthony Cui / 崔元龙 .
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
      <br/>
      <p>
        If any of my blog posts interest you, please make sure to check out my accounts on other platforms as well:
      </p>
      <ul>
        <li><a href="https://www.linkedin.com/in/yuanlong-tony-cui/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <br/>
        <li><a href="https://github.com/Yuanlong-Tony-Cui" target="_blank" rel="noreferrer">GitHub</a></li>
        <br/>
        <li><a href="https://www.instagram.com/anthony.y.cui/" target="_blank" rel="noreferrer">Instagram</a></li>
        <br/>
        <li><a href="https://space.bilibili.com/165792944" target="_blank" rel="noreferrer">bilibili</a></li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage