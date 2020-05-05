import React from "react"
import Element from "../components/element"

import { Link, graphql, useStaticQuery } from "gatsby"

const ResponsiblepartyList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "responsibleparty" } } }
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              key
              short
              long
              responsible {
                number
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Element type="Responsible Party">
      <ul>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.frontmatter.nispid}>
              <Link
                to={`/responsibleparty/${edge.node.frontmatter.key}.html`}
                title={edge.node.frontmatter.long}
              >
                {edge.node.frontmatter.short}
              </Link>{" "}
              ({edge.node.frontmatter.responsible.number})
            </li>
          )
        })}
      </ul>
    </Element>
  )
}

export default ResponsiblepartyList
