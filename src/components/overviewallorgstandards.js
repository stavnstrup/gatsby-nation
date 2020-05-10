import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const OverviewAllOrgStandards = ({ org, short, numStandards }) => {
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

  //  Create slice array, so that we only list 10 standards in one block.

  let counter = 0
  let boxSize = 10
  let sliceArray = []

  // identify the start and end of a slice in the list of standards
  while (counter < numStandards) {
    let top = Math.min(counter + boxSize, numStandards)
    sliceArray.push({ start: counter, end: top })
    counter = counter + boxSize
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
            short={short}
            start={slice.start}
            end={slice.end}
            numStandards={numStandards}
          />
        )
      })}
    </>
  )
}

const orgHeader = (org, short) => {
  return (
    <h4>
      <Link to={`/organization/${org}.html`}>{short}</Link>
    </h4>
  )
}

const ListStandardGroup = ({
  standards,
  org,
  short,
  start,
  end,
  numStandards,
}) => {
  return (
    <div key={org} className="collectionGroup">
      {/*
      <p>
        <i>{short}</i>
      </p>
      <p>
        {end - start} nodes [{start},{end - 1}] / {numStandards}
      </p>
*/}
      {start === 0 ? orgHeader(org, short) : ''}

      <ul className="stdgroup">
        {standards.slice(start, end).map(edge => {
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
      {/* end of collectionGroup*/}
    </div>
  )
}

export default OverviewAllOrgStandards
