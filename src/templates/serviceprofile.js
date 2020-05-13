import React from 'react'
import Element from '../components/element'
import Profileref from '../components/profileref'
import Status from '../components/status'
import UUID from '../components/uuid'
import { Link, graphql } from 'gatsby'
import nodes from '../data/data/nodes.json'
import std from '../data/data/standards.json'
import cds from '../data/data/coverdocs.json'

export const query = graphql`
  query($nispid: String!) {
    markdownRemark(frontmatter: { nispid: { eq: $nispid } }) {
      frontmatter {
        nispid
        layout
        title
        profilespec {
          org
          pubnum
          title
          date
          version
        }
        taxonomy
        refgroup {
          obligation
          lifecycle
          description
          standards {
            srefid
            etype
          }
        }
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
        parents {
          type
          refid
          title
        }
      }
    }
  }
`
const ServiceProfileTemplate = props => {
  const serviceprofile = props.data.markdownRemark

  return (
    <Element type="Service Profile" id={serviceprofile.frontmatter.nispid}>
      <dl>
        <dt className="dataLabel">Title</dt>
        <dd className="dataValue">{serviceprofile.frontmatter.title}</dd>
      </dl>

      <dl>
        <dt className="dataLabel">Description</dt>
        <dd className="dataValue">
          <div dangerouslySetInnerHTML={{ __html: serviceprofile.html }} />
        </dd>
      </dl>

      <Profileref prof={serviceprofile.frontmatter.profilespec} />

      <h3>Taxonomy</h3>

      <div class="metaList">
        <ul>
          {serviceprofile.frontmatter.taxonomy.map(edge => {
            return (
              <li>
                <Link to={`/node/${edge}.html`}>{nodes[edge].title}</Link>
              </li>
            )
          })}
        </ul>
      </div>

      <h3>Standards</h3>

      <div className="metaList">
        {serviceprofile.frontmatter.refgroup.map(edge => {
          return (
            <>
              <p>
                <strong>Obligation</strong>:{' '}
                {`${edge.obligation[0].toUpperCase()}${edge.obligation.slice(
                  1
                )}, `}
                <strong>Lifecycle</strong>:{' '}
                {`${edge.lifecycle[0].toUpperCase()}${edge.lifecycle.slice(1)}`}
              </p>
              <p>{edge.description}</p>
              <ul>
                {edge.standards.map(s => {
                  return (
                    <li>
                      <Link to={`/${s.etype}/${s.srefid}.html`}>
                        {s.etype == 'standard'
                          ? std[s.srefid].title +
                            ' (' +
                            std[s.srefid].orgshort +
                            ' ' +
                            std[s.srefid].pubnum +
                            ')'
                          : cds[s.srefid].title +
                            ' (' +
                            cds[s.srefid].orgshort +
                            ' ' +
                            cds[s.srefid].pubnum +
                            ')'}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </>
          )
        })}
      </div>

      <Status status={serviceprofile.frontmatter.status} />

      <UUID uuid={serviceprofile.frontmatter.uuid} />

      <h3>Utilization</h3>

      <div className="metaList">
        <p>This serviceprofile is used by the following profiles:</p>

        <ul>
          {serviceprofile.frontmatter.parents.map(edge => {
            return (
              <li key={edge.refid}>
                <Link to={`/${edge.type}/${edge.refid}.html`}>
                  {edge.title}
                </Link>{' '}
                - (<strong>{edge.type}</strong>)
              </li>
            )
          })}
        </ul>
      </div>
    </Element>
  )
}

export default ServiceProfileTemplate
