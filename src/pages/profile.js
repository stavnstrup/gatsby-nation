import React from 'react'
import Element from '../components/element'
import { Link, graphql, useStaticQuery } from 'gatsby'
import orgs from '../data/data/orgs.json'

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
              nispid
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
              <tr key={edge.node.frontmatter.nispid}>
                <td>
                  <Link
                    to={`/organization/${edge.node.frontmatter.profilespec.org}.html`}
                  >
                    {orgs[edge.node.frontmatter.profilespec.org].short}
                  </Link>
                </td>
                <td>
                  <Link to={`/profile/${edge.node.frontmatter.nispid}.html`}>
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
