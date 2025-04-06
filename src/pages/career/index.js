import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
  postLinkText,
  postDesc,
  heroImage,
  tagBar,
  tagPill,
} from '../main.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Posts: Career">
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <StaticImage
          alt="Career Cover"
          src="./uoft-front-campus.jpeg"
          className={heroImage}
        />
      </div>
      { // Loop through the data and display the blog posts:
        data.allMdx.nodes.map((node) => {
          const tags = node.frontmatter.tags?.split(",").map(item => item.trim());
          return (
            <article key={node.id}>
              <h2>
                <Link to={`/career/${node.frontmatter.slug}`} className={postLinkText}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p className={postDesc}>{node.frontmatter.date}</p>
              <div className={tagBar}>
                { tags && tags.map(tag => (
                    <div className={tagPill}>{tag}</div>
                  ))
                }
              </div>
            </article>
          )
        })
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { category: { eq: "career" } } }
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

export const Head = () => <Seo title="Blog Posts: Career" />

export default BlogPage