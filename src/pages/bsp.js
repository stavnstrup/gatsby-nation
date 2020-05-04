import React from "react"
import Element from "../components/element"
import { Link, graphql, useStaticQuery } from "gatsby"

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
              layout
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
        <tbody>
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
        </tbody>
      </table>
    </Element>
  )
}

export default BSP
