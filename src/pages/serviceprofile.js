import React from "react"
import Element from "../components/element"
import { Link, graphql, useStaticQuery } from "gatsby"

import "../styles/normalize.min.css"
import "../styles/main.scss"

const ServiceprofileList = () => {
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
              profilespec {
                org
                version
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Element type="Service Profiles">
      <table>
        <tr>
          <th>Organization</th>
          <th>Title of Service Profile</th>
          <th>Version</th>
        </tr>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <tr>
              <td>{edge.node.frontmatter.profilespec.org}</td>
              <td>
                <Link
                  to={`/serviceprofile/${edge.node.frontmatter.nisp_id}.html`}
                >
                  {edge.node.frontmatter.title}
                </Link>
              </td>
              <td>{edge.node.frontmatter.profilespec.version}</td>
            </tr>
          )
        })}
      </table>
    </Element>
  )
}

export default ServiceprofileList
