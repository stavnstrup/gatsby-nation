import React from 'react'
import Element from '../components/element'
import { Link, graphql, useStaticQuery } from 'gatsby'
import ListAllOrgStandards from '../components/listallorgstandards'

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
              stuff {
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

  console.log(orglist)

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
        {/*
          .filter(edge => edge.node.frontmatter.key === 'cceb')
         */}
        {orgQuery.allMarkdownRemark.edges
          .filter(edge => edge.node.frontmatter.stuff.standards.owns > 0)

          .map(edge => {
            return (
              <div key={edge.node.frontmatter.key} className="collectionGroup">
                <h4>
                  <Link to={`/organization/${edge.node.frontmatter.key}.html`}>
                    {edge.node.frontmatter.short}
                  </Link>
                </h4>

                <ListAllOrgStandards
                  org={edge.node.frontmatter.key}
                  max={edge.node.frontmatter.stuff.standards.owns}
                />
                {/* end of collectionGroup*/}
              </div>
            )
          })}
      </div>
    </Element>
  )
}

export default StandardList
