import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
  postLinkText,
  postDesc
} from '../../components/layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const StudioPage = ({ data }) => {
    return (
      <Layout pageTitle="Posts: Studio">
        <StaticImage
          alt="Studio Cover"
          src="./studio-cover-2.jpeg"
        />
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>
                <Link to={`/studio/${node.frontmatter.slug}`} className={postLinkText}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p className={postDesc}>- Last Updated: {node.frontmatter.date}</p>
            </article>
          ))
        }
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
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts" />

export default StudioPage