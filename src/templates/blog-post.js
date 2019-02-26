import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          id="post-16"
          className="post-16 post type-post status-publish format-standard hentry category-uncategorized js-gallery"
        >
          <h1 className="post-title">{post.frontmatter.title}</h1>
          <div
            className="post-body js-gallery mb"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="meta mb+ split split--responsive">
            <div className="split__title">
              <time>{post.frontmatter.date}</time>
            </div>
          </div>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: notes/String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: notes/{ eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
