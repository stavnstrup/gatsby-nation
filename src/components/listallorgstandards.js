import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const ListAllOrgStandards = ({ org, max }) => {
  const standardQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "standard" } } }
        sort: { fields: [frontmatter___nispid] }
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              complete
              nispid
              document {
                org
                pubnum
                title
                version
              }
            }
          }
        }
      }
    }
  `)

  const standards = standardQuery.allMarkdownRemark.edges

  let counter = 0
  let delta = 10
  let sliceArray = []

  while (counter < max) {
    let top = Math.min(counter + delta, max)
    sliceArray.push({ start: counter, end: top })
    counter = counter + delta
  }

  return (
    <>
      {sliceArray.map(slice => {
        return (
          <ListStandardGroup
            standards={standards.filter(
              edge => edge.node.frontmatter.document.org === org
            )}
            org={org}
            start={slice.start}
            end={slice.end}
          />
        )
      })}
    </>
  )
}

const ListStandardGroup = ({ standards, org, start, end }) => {
  return (
    <ul className="stdgroup">
      {standards.slice(start, end).map((edge, index) => {
        const complete = edge.node.frontmatter.complete
          ? 'Complete'
          : 'Incomplete'
        return (
          <>
            <li
              key={edge.node.frontmatter.nispid}
              className={`collectionItem std${complete}`}
            >
              <Link
                to={`/standard/${edge.node.frontmatter.nispid}.html`}
                title={edge.node.frontmatter.document.title}
              >
                {edge.node.frontmatter.document.pubnum}
              </Link>
            </li>
          </>
        )
      })}
    </ul>
  )
}

export default ListAllOrgStandards
