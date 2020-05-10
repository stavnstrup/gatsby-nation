import React from 'react'
import Element from '../components/element'
import Status from '../components/status'
import UUID from '../components/uuid'
import { graphql } from 'gatsby'

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
      }
      html
    }
  }
`

const StandardTemplate = props => {
  const standard = props.data.markdownRemark

  return (
    <Element type="Standard">
      <div className="metaBlock">
        <h3>Reference document</h3>

        <div className="metaElementSet">
          <dl className="refOrg">
            <dt className="dataLabel">Org</dt>
            <dd className="dataValue">{standard.frontmatter.document.org}</dd>
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
      <h3>Applicability</h3>

      <dl>
        <dt className="dataLabel"></dt>
        <dd className="dataValue">
          <div dangerouslySetInnerHTML={{ __html: standard.html }} />
        </dd>
      </dl>

      <Status status={standard.frontmatter.status} />
      <UUID uuid={standard.frontmatter.uuid} />
    </Element>
  )
}

export default StandardTemplate
