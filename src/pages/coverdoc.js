import React from "react"
import Element from "../components/element"
import { Link, graphql, useStaticQuery } from "gatsby"

import "../styles/normalize.min.css"
import "../styles/main.scss"

const CoverdocList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "coverdoc" } } }
      ) {
        edges {
          node {
            frontmatter {
              nisp_id
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
        <tr>
          <th>Pubnum</th>
          <th>Title</th>
          <th>Date</th>
        </tr>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <tr>
              <td>{edge.node.frontmatter.document.pubnum}</td>
              <td>
                <Link to={`/coverdoc/${edge.node.frontmatter.nisp_id}.html`}>
                  {edge.node.frontmatter.document.title}
                </Link>
              </td>
              <td>{edge.node.frontmatter.document.date.slice(0, 4)}</td>
            </tr>
          )
        })}
      </table>
    </Element>
  )
}

export default CoverdocList
