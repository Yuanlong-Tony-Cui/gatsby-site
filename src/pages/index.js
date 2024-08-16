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
        contents that <s>no one will be interested in</s> share about my thoughts on various topics,
        including but not limited to engineering, literature, art, and personal development.
      </p>
      <ul>
        <li>
          The Career section includes topics mostly related to my experiences in engineering fields.
          I'm currently still in the process of migrating and adding posts into this section.
        </li>
        <br/>
        <li>
          The Library section is comprised of traditional blog posts - most likely in plain text,
          where I would for example share what books I read and what articles I wrote recently.
        </li>
        <br/>
        <li>
          The Studio section is a collection of digital media I have worked on under Bayan Studio.
          Be it music covers, fan-made videos, and even illustrations - this section would probably
          reveal the unknown aspects of me that many of my friends wouldn't even know about.
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