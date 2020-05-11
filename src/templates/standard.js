import React from 'react'
import Element from '../components/element'
import Responsibleparty from '../components/responsibleparty'
import Status from '../components/status'
import UUID from '../components/uuid'
import { Link, graphql } from 'gatsby'
import orgs from '../data/data/orgs.json'
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
        coverdocument
        consumers
      }
      html
    }
  }
`

const StandardTemplate = props => {
  const standard = props.data.markdownRemark

  console.log(standard)

  return (
    <Element type="Standard">
      <div className="metaBlock">
        <h3>Reference document</h3>

        <div className="metaElementSet">
          <dl className="refOrg">
            <dt className="dataLabel">Org</dt>
            <dd className="dataValue">
              {orgs[standard.frontmatter.document.org].short}
            </dd>
          </dl>
          <dl className="refPubnum">
            <dt className="dataLabel">Pubnum</dt>
            <dd className="dataValue">
              {standard.frontmatter.document.pubnum}
            </dd>
          </dl>
          <dl className="refDate">
            <dt className="dataLabel">Date</dt>
            <dd className="dataValue">{standard.frontmatter.document.date}</dd>
          </dl>
          <dl className="refVersion">
            <dt className="dataLabel">Version</dt>
            <dd className="dataValue">
              {standard.frontmatter.document.version}
            </dd>
          </dl>
        </div>
        <dl>
          <dt className="dataLabel">Title</dt>
          <dd className="dataValue">{standard.frontmatter.document.title}</dd>
        </dl>
      </div>

      <Responsibleparty rp={standard.frontmatter.rp} />

      <h3>Applicability</h3>

      <dl>
        <dt className="dataLabel"></dt>
        <dd className="dataValue">
          <div dangerouslySetInnerHTML={{ __html: standard.html }} />
        </dd>
      </dl>

      <Status status={standard.frontmatter.status} />
      <UUID uuid={standard.frontmatter.uuid} />

      <Relationships
        coverdoc={standard.frontmatter.coverdocument}
        consumers={standard.frontmatter.consumers}
      />
    </Element>
  )
}

export default StandardTemplate

const Relationships = ({ coverdoc, consumers }) => {
  console.log('coverdoc ', coverdoc)
  console.log('consumers ', consumers)
  if (coverdoc !== null || consumers.length > 0) {
    return (
      <>
        <h3>Relationships</h3>
        <div className="metaList">
          <Coverdoc coverdoc={coverdoc} />
          <Consumers consumers={consumers} />
        </div>
      </>
    )
  } else {
    return null
  }
}

const Coverdoc = ({ coverdoc }) => {
  return <div></div>
}

const Consumers = ({ consumers }) => {
  if (consumers.length > 0) {
    return (
      <>
        <p>This standard is used by the following service profiles:</p>
        <ul>
          {consumers.map(edge => {
            return (
              <li>
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
