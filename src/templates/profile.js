import React from 'react'
import Element from '../components/element'
import Profileref from '../components/profileref'
import Responsibleparty from '../components/responsibleparty'
import Status from '../components/status'
import UUID from '../components/uuid'
import { Link, graphql } from 'gatsby'

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
        subprofiles {
          type
          refid
          title
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

const ProfileTemplate = props => {
  const profile = props.data.markdownRemark

  return (
    <Element type="Profile" id={profile.frontmatter.nispid}>
      <dl>
        <dt className="dataLabel">Title</dt>
        <dd className="dataValue">{profile.frontmatter.title}</dd>
      </dl>

      <Profileref prof={profile.frontmatter.profilespec} />

      <h3>Subprofiles</h3>

      <div className="metaList">
        <ul>
          {profile.frontmatter.subprofiles.map(edge => {
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

      <Status status={profile.frontmatter.status} />

      <UUID uuid={profile.frontmatter.uuid} />

      <h3>Utilization</h3>

      <div className="metaList">
        <p>This profile is used by the following profiles:</p>

        <ul>
          {profile.frontmatter.parents.map(edge => {
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

export default ProfileTemplate

/*



<h3>Utilization</h3>

<div class="meta-list">
<p>This profile is used by the following profiles:</p>

<ul>


{% for ref in page.parents %}
<li><a href="/{{ref.type}}/{{ref.refid}}.html">{{ref.title}}</a> - (<strong>{{ref.type}}</strong>)</li>
{% endfor %}
</ul>
</div>


*/
