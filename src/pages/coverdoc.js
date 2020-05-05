import React from "react"
import Element from "../components/element"
import { Link, graphql, useStaticQuery } from "gatsby"

// import "../styles/normalize.min.css"
// import "../styles/main.scss"

const CoverdocList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "coverdoc" } } }
      ) {
        edges {
          node {
            frontmatter {
              nispid
              document {
                pubnum
                title
                date
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Element type="Cover Documents">
      <table>
        <tbody>
          <tr>
            <th>Pubnum</th>
            <th>Title</th>
            <th>Date</th>
          </tr>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <tr key={edge.node.frontmatter.nispid}>
                <td>{edge.node.frontmatter.document.pubnum}</td>
                <td>
                  <Link to={`/coverdoc/${edge.node.frontmatter.nispid}.html`}>
                    {edge.node.frontmatter.document.title}
                  </Link>
                </td>
                <td>{edge.node.frontmatter.document.date.slice(0, 4)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Element>
  )
}

export default CoverdocList
