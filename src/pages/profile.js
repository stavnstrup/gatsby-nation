import React from "react"
import Element from "../components/element"
import { Link, graphql, useStaticQuery } from "gatsby"

//import "../styles/normalize.min.css"
//import "../styles/main.scss"

const ProfileList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "profile" } } }
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
    <Element type="Profiles">
      <table>
        <tbody>
          <tr>
            <th>Organization</th>
            <th>Title of Profile</th>
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
        </tbody>
      </table>
    </Element>
  )
}

export default ProfileList
