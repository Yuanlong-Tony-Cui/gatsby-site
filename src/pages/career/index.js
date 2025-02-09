import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
  postLinkText,
  postDesc
} from '../../components/layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const BlogPage = ({ data }) => {
    return (
      <Layout pageTitle="Posts: Career">
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <StaticImage
            alt="Career Cover"
            src="./uoft-front-campus.jpeg"
            height={600}
            style={{maxHeight:'600px', borderRadius: '10px'}}
          />
        </div>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>
                <Link to={`/career/${node.frontmatter.slug}`} className={postLinkText}>
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
      filter: { frontmatter: { category: { eq: "career" } } }
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

export const Head = () => <Seo title="Blog Posts: Career" />

export default BlogPage