import React from "react"
import Link from "gatsby-link"
import { FaLongArrowAltRight } from 'react-icons/fa'
import Layout from "../components/layout"

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}{props.children}</Link>
  } else {
    return null;
  }
}

const IndexPage = ({ pageContext }) => {
  const { group, index, last } = pageContext
  const nextUrl = (index + 1).toString()

  return (
    <Layout>
      <ul className="posts-list">
        {group.map(({ node }, i) => (
          <li className="post" key={i}>
            <h2>
              <Link to={`notes${node.fields.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <div>{node.frontmatter.date}</div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <NavLink test={last} url={nextUrl} text="More">
          <FaLongArrowAltRight />
        </NavLink>
      </div>
    </Layout>
  )
}
export default IndexPage
