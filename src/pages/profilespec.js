import React from "react"
import Element from "../components/element"
import { Link, graphql, useStaticQuery } from "gatsby"

import orgs from "../data/data/orgs.json"

const ProfilespecList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "profilespec" } } }
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              nispid
              orgid
              pubnum
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Element type="Profile Specifications">
      <table>
        <tbody>
          <tr>
            <th>Organization</th>
            <th>Pub number</th>
            <th>Title of Profile Specification</th>
          </tr>

          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <tr key={edge.node.frontmatter.nispid}>
                <td>
                  <Link
                    to={`/organizations/${edge.node.frontmatter.orgid}.html`}
                    title={edge.node.frontmatter.nispid}
                  >
                    {orgs[edge.node.frontmatter.orgid].short}
                  </Link>{" "}
                </td>

                <td>{edge.node.frontmatter.pubnum}</td>
                <td>
                  <Link
                    to={`/profilespec/${edge.node.frontmatter.nispid}.html`}
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

export default ProfilespecList
