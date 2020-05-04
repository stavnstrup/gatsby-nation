import React from "react"
import Element from "../components/element"
import { Link, graphql, useStaticQuery } from "gatsby"

import "../styles/normalize.min.css"
import "../styles/main.scss"

const BSP = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "serviceprofile" } } }
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              nisp_id
              type
              title
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Element type="Basic Standards Service Profiles">
      <table>
        <tr>
          <th>Basic Standards Service Profiles</th>
        </tr>
        {data.allMarkdownRemark.edges
          .filter(edge => edge.node.frontmatter.type === "bsp")
          .map(edge => {
            return (
              <tr>
                <td>
                  <Link
                    to={`/serviceprofile/${edge.node.frontmatter.nisp_id}.html`}
                  >
                    {edge.node.frontmatter.title}
                  </Link>
                </td>
              </tr>
            )
          })}
      </table>
    </Element>
  )
}

export default BSP
