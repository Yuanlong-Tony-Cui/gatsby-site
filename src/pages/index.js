import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hi, I'm Anthony. Welcome to my blog site.</p>
      {/* TODO: Add an image container for all images to define its position */}
      {/* TODO: Use `imgStyle={{objectFit:'contain'}}` for StaticImage and GatsbyImage */}
      <div
        style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <StaticImage
          alt="Cover"
          src="./profile-venice_beach.jpeg"
          imgStyle={{objectFit:'contain'}}
          style={{maxHeight:'600px'}}
        />
      </div>
      <p>
        This will be the place where I post
        contents that <s>none of my friends will be interested to read</s> share about my works and thoughts on various topics,
        including but not limited to engineering, literature, art, and personal development.
      </p>
      <ul>
        <li>
          The Career section includes topics that are closely related to my career path since my time in Waterloo.
          From theorical research studies to practical software development, the posts will demonstrate my professional
          knowledge in a variety of fields to different audiences.
        </li>
        <br/>
        <li>
          The Library section is comprised of "traditional" blog posts that can be easily appreciated in the form of plain text.
          In this section, for example, I would share what books I read and what movies I watched recently.
        </li>
        <br/>
        <li>
          The Studio section is a collection of digital media I have worked on under Bayan Studio.
          Be it music covers, fan-made videos, or even illustrations, this section would
          reveal some of my side projects that many of my friends wouldn't even know about.
        </li>
      </ul>
      <p>
        Stay tuned as my journey goes on.
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage