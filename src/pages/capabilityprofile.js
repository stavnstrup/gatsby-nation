import React from "react"
import Element from "../components/element"
import { Link, graphql, useStaticQuery } from "gatsby"

import "../styles/normalize.min.css"
import "../styles/main.scss"

const CapabilityprofileList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "capabilityprofile" } } }
      ) {
        edges {
          node {
            frontmatter {
              nisp_id
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
    <Element type="Capability Profile">
      <p>
        A capability profile is an alias for a toplevel profile. You will
        therefore see these profiles are also listed at the the{" "}
        <Link to="profile" /> page.
      </p>

      <table>
        <tr>
          <th>Organization</th>
          <th>Title of Capability Profile</th>
          <th>Version</th>
        </tr>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <tr>
              <td>{edge.node.frontmatter.profilespec.org}</td>
              <td>
                <Link
                  to={`/capabilityprofile/${edge.node.frontmatter.nisp_id}.html`}
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

export default CapabilityprofileList
