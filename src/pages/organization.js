import React from 'react'
import Element from '../components/element'
import { Link, graphql, useStaticQuery } from 'gatsby'

const OrganizationList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "organization" } } }
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              nispid
              short
              long
              stats {
                standards {
                  owns
                }
                coverdocs {
                  owns
                }
                capabilityprofiles {
                  owns
                }
                profiles {
                  owns
                }
                serviceprofiles {
                  owns
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Element type="Organizations">
      <p>
        Each organisation is postfixed by a tupple with five values, which shows
        how the organisations creates/owns a number of standards, cover
        documents, capability profiles, profiles and service profiles.
      </p>
      <ul>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.frontmatter.nispid}>
              <Link
                to={`/organization/${edge.node.frontmatter.nispid}.html`}
                title={edge.node.frontmatter.long}
              >
                {edge.node.frontmatter.short}
              </Link>{' '}
              ({edge.node.frontmatter.stats.standards.owns},{' '}
              {edge.node.frontmatter.stats.coverdocs.owns},{' '}
              {edge.node.frontmatter.stats.capabilityprofiles.owns},{' '}
              {edge.node.frontmatter.stats.profiles.owns},{' '}
              {edge.node.frontmatter.stats.serviceprofiles.owns})
            </li>
          )
        })}
      </ul>
    </Element>
  )
}

export default OrganizationList
