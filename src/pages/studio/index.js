import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
  postListSec,
  postTile,
  postLinkText,
  postDesc,
  heroImage,
  tagBar,
  tagPill,
} from '../main.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const StudioPage = ({ data }) => {
  return (
    <Layout pageTitle="Posts: Studio">
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <StaticImage
          alt="Keyboard"
          src="./yamaha-keyboard.jpeg"
          className={heroImage}
        />
      </div>
      <div className={postListSec}>
        {
          data.allMdx.nodes.map((node, idx) => {
            const tags = node.frontmatter.tags?.split(",").map(item => item.trim());
            return (
              <div key={node.id} className={postTile}>
                <div>
                  <Link to={`/studio/${node.frontmatter.slug}`} className={postLinkText}>
                    {node.frontmatter.title}
                  </Link>
                </div>
                <span className={postDesc}>{node.frontmatter.date}</span>
                <div className={tagBar}>
                  { tags && tags.map((tag, idx) => (
                      <div key={idx} className={tagPill}>{tag}</div>
                    ))
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { category: { eq: "studio" } } }
      sort: { frontmatter: { date: DESC }}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          tags
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts: Studio" />

export default StudioPage