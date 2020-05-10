import React from 'react'
import Element from '../components/element'
import { graphql, useStaticQuery } from 'gatsby'
import OverviewAllOrgStandards from '../components/overviewallorgstandards'

// import orglist from '../data/data/orgs.json'

const StandardList = () => {
  const orgQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "organization" } } }
        sort: { fields: [frontmatter___key], order: ASC }
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              key
              short
              stats {
                standards {
                  owns
                }
              }
            }
          }
        }
      }
    }
  `)

  const orglist = orgQuery.allMarkdownRemark.edges

  return (
    <Element type="Standards">
      <div>
        <ul className="legendbox">
          <li key="1" className="stdComplete">
            Complete
          </li>
          <li key="2" className="stdIncomplete">
            Incomplete
          </li>
        </ul>
      </div>

      <div className="collectionWrap">
        {/* List all organization which own one or more standards */}
        {orgQuery.allMarkdownRemark.edges
          .filter(edge => edge.node.frontmatter.stats.standards.owns > 0)
          .map(edge => {
            return (
              <OverviewAllOrgStandards
                org={edge.node.frontmatter.key}
                short={edge.node.frontmatter.short}
                numStandards={edge.node.frontmatter.stats.standards.owns}
              />
            )
          })}
      </div>
    </Element>
  )
}

export default StandardList
