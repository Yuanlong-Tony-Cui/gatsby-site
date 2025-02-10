import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
  postLinkText,
  postDesc,
  heroImage,
} from '../../components/layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const LibraryPage = ({ data }) => {
    return (
      <Layout pageTitle="Posts: Library">
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <StaticImage
            alt="Bridge"
            src="./bridge-waterloo-park.jpg"
            className={heroImage}
          />
        </div>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>
                <Link to={`/library/${node.frontmatter.slug}`} className={postLinkText}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p className={postDesc}>{node.frontmatter.date}</p>
            </article>
          ))
        }
      </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { category: { eq: "library" } } }
      sort: { frontmatter: { date: DESC }}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts: Library" />

export default LibraryPage