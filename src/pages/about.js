import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import {
  customList,
  heroImage,
  socialMediaLink,
} from "./main.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <StaticImage
          alt="Profile"
          src="../images/profile-golden_gate_bridge-1.jpeg"
          imgStyle={{objectFit:'contain'}}
          className={heroImage}
        />
      </div>
      <p className='paragraph'>
        🚀 Hi, I’m Anthony. I’m a software engineer driven by a simple goal: use technology and creativity to nudge the world forward.
        Whether I’m writing code, speaking on stage, reading a great book, or performing music, I wish I could give back at least as much inspiration as I receive from people.
      </p>
      <p className='paragraph'>
        🛠️ I obtained my MEng degree in Electrical and Computer Engineering at the University of Toronto in 2025 (CGPA: 3.97/4.0)
        and my BASc degree in Mechatronics Engineering at the University of Waterloo in 2023 (CGPA: 86.63/100).
        The unique experience of moving around the world for school and work in my early adulthood
        has not only allowed me to extensively develop my professional skills
        but also cultivated my outlook on life and how I want to accomplish it.
      </p>
      <p className='paragraph'>
        🦾 At Waterloo I focused on hands-on projects—everything from autonomous robots to blog posts that walk fellow developers through installing Ubuntu on Windows.
        When rumors spread that UWFlow (Waterloo's course website) might become unavailable,
        I was inspired and built a replacement called WaterFlow using Vue and Express in February 2025 for administrators and students to manage courses.
        You’ll find WaterFlow and 40 + other side projects on my GitHub.
      </p>
      <p className='paragraph'>
        🖥️ At U of T, my focus shifted to machine learning in the hope of solving problems and gaining insights more efficiently in the big data era.
        Courses like Natural Language Processing helped me unpack how ChatGPT as a transformer model became such a phenomenal game-changer overnight that everyone talks about.
        Since then I’ve tackled real-world pain points by training models from scratch with GloVe embeddings and by integrating OpenAI APIs.
        One of my team projects, AdVize, is a great example of how LLMs can be used to automate the evaluation of ad-pushing algorithms, freeing humans from repetitive scoring.
      </p>
      <p className='paragraph'>
        ⛳️ My journey is just getting started, and I’m excited about what’s ahead.
        If any of my posts resonate with you, feel free to connect on the platforms below - let’s build something great together!
      </p>
      <ul className={customList}>
        <li><a href="https://www.linkedin.com/in/yuanlong-tony-cui/" target="_blank" rel="noreferrer" className={socialMediaLink}>LinkedIn</a></li>
        <li><a href="https://github.com/Yuanlong-Tony-Cui" target="_blank" rel="noreferrer" className={socialMediaLink}>GitHub</a></li>
        {/* <li><a href="https://www.instagram.com/anthony.y.cui/" target="_blank" rel="noreferrer" className={socialMediaLink}>Instagram</a></li> */}
        <li><a href="https://space.bilibili.com/165792944" target="_blank" rel="noreferrer" className={socialMediaLink}>bilibili</a></li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage