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
      <p> 🚀 Hi, my name is Anthony. I see myself as a pragmatic dreamer that uses technology and creation to make this world slightly better. From coding to public speaking, from reading to music performance, I wish what I get to offer to the world could be as much as what it brings me. </p>
      <p> 🛠️ I obtained my Master’s degree in Electrical and Computer Engineering at the University of Toronto in 2025 and Bachelor’s degree in Mechatronics Engineering at the University of Waterloo in 2023. The unique experience of moving around the world for school and work in my early adulthood has not only allowed me to extensively develop my professional skills but also fostered my distinct understanding of life and how I want to accomplish it. </p>
      <p> 🦾 During my time at Waterloo, my main focus was primarily on building products that make people’s life easier, be it software applications, autonomous robots, or simply a blog post that walks developers through how to install Ubuntu on their Windows machines. </p>
      <p> 🖥️ At U of T, my focus was using machine learning to solve problems and gain insights in the big data era. No one can deny how significantly AI-powered tools like ChatGPT have changed almost everyone’s life, but it is also crucial to see the Gray Rhinos that we are approaching such as hallucinations. One research project I’ve worked on lately was algorithms that protect users’ privacy in deep learning. </p>
      <p> ⛳️ Always looking forward to writing the next chapter of the story as my journey goes on! </p>
      <p>
        If any of my blog posts interest you, please make sure to check out my accounts on other platforms as well.
      </p>
      <ul className={customList}>
        <li><a href="https://www.linkedin.com/in/yuanlong-tony-cui/" target="_blank" rel="noreferrer" className={socialMediaLink}>LinkedIn</a></li>
        <li><a href="https://github.com/Yuanlong-Tony-Cui" target="_blank" rel="noreferrer" className={socialMediaLink}>GitHub</a></li>
        <li><a href="https://www.instagram.com/anthony.y.cui/" target="_blank" rel="noreferrer" className={socialMediaLink}>Instagram</a></li>
        <li><a href="https://space.bilibili.com/165792944" target="_blank" rel="noreferrer" className={socialMediaLink}>bilibili</a></li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage