import React from "react"
import Element from "../components/element"
import { Link, graphql, useStaticQuery } from "gatsby"
import orgs from "../data/data/orgs.json"

// import "../styles/normalize.min.css"
// import "../styles/main.scss"

const CapabilityprofileList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "capabilityprofile" } } }
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              layout
              nispid
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
    <Element type="Capability Profiles">
      <p>
        A capability profile is an alias for a toplevel profile. You will
        therefore see these profiles are also listed at the the{" "}
        <Link to="/profile/">profile</Link> page.
      </p>

      <table>
        <tbody>
          <tr>
            <th>Organization</th>
            <th>Title of Capability Profile</th>
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
                  <Link
                    to={`/capabilityprofile/${edge.node.frontmatter.nispid}.html`}
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

export default CapabilityprofileList
