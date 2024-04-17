import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hey, my name is Anthony. Welcome to my blog site.</p>
      <p>This will be the place where I post
        contents that <s>no one will be interested in</s> share about my thoughts on various topics,
        including but not limited to engineering, literature, art, and personal development.
      </p>
      <StaticImage
        alt="Cover"
        src="./profile-2.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage