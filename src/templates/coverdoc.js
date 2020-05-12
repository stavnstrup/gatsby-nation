import React from 'react'
import Element from '../components/element'
import Responsibleparty from '../components/responsibleparty'
import Status from '../components/status'
import UUID from '../components/uuid'
import { Link, graphql } from 'gatsby'
import orgs from '../data/data/orgs.json'
import stds from '../data/data/standards.json'
import sp from '../data/data/serviceprofiles.json'

export const query = graphql`
  query($nispid: String!) {
    markdownRemark(frontmatter: { nispid: { eq: $nispid } }) {
      frontmatter {
        nispid
        document {
          org
          pubnum
          title
          date
          version
        }
        coverstandards
        rp
        status {
          uri
          history {
            flag
            date
            rfcp
            version
          }
        }
        uuid
        consumers
      }
      html
    }
  }
`

const CoverdocTemplate = props => {
  const coverdoc = props.data.markdownRemark

  return (
    <Element type="Cover Documents" id={coverdoc.frontmatter.nispid}>
      <div className="metaBlock">
        <h3>Reference document</h3>

        <div className="metaElementSet">
          <dl className="refOrg">
            <dt className="dataLabel">Org</dt>
            <dd className="dataValue">
              {orgs[coverdoc.frontmatter.document.org].short}
            </dd>
          </dl>
          <dl className="refPubnum">
            <dt className="dataLabel">Pubnum</dt>
            <dd className="dataValue">
              {coverdoc.frontmatter.document.pubnum}
            </dd>
          </dl>
          <dl className="refDate">
            <dt className="dataLabel">Date</dt>
            <dd className="dataValue">{coverdoc.frontmatter.document.date}</dd>
          </dl>
          <dl className="refVersion">
            <dt className="dataLabel">Version</dt>
            <dd className="dataValue">
              {coverdoc.frontmatter.document.version}
            </dd>
          </dl>
        </div>
        <dl>
          <dt className="dataLabel">Title</dt>
          <dd className="dataValue">{coverdoc.frontmatter.document.title}</dd>
        </dl>
      </div>

      <h3>Covered Standards</h3>

      <div className="metaList">
        <ul>
          {coverdoc.frontmatter.coverstandards.map(edge => {
            return (
              <li>
                <Link to={`/standard/${edge}.html`}>
                  {stds[edge].title} ({stds[edge].orgshort} {stds[edge].pubnum})
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <Responsibleparty rp={coverdoc.frontmatter.rp} />

      <Status status={coverdoc.frontmatter.status} />
      <UUID uuid={coverdoc.frontmatter.uuid} />

      <Relationships consumers={coverdoc.frontmatter.consumers} />
    </Element>
  )
}

export default CoverdocTemplate

const Relationships = ({ consumers }) => {
  if (consumers) {
    return (
      <>
        <h3>Relationships</h3>
        <div className="metaList">
          <Consumers consumers={consumers} />
        </div>
      </>
    )
  } else {
    return null
  }
}

const Consumers = ({ consumers }) => {
  const plural = consumers.length > 1 ? 's' : ''
  if (consumers.length > 0) {
    return (
      <>
        <p>
          This cover document is used by the following service profile{plural}:
        </p>
        <ul>
          {consumers.map(edge => {
            return (
              <li key={edge}>
                <Link to={`/serviceprofile/${edge}.html`}>
                  {sp[edge].title}
                </Link>
              </li>
            )
          })}
        </ul>
      </>
    )
  } else return null
}
