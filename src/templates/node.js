import React from 'react'
import Element from '../components/element'
import { Link } from 'gatsby'
import nodes from '../data/data/nodes.json'

export const query = graphql`
  query($nispid: String!) {
    markdownRemark(frontmatter: { nispid: { eq: $nispid } }) {
      frontmatter {
        nispid
        parent
        title
        level
        emUUID
      }
      html
    }
  }
`

const NodeTemplate = prop => {
  const n = prop.data.markdownRemark

  return (
    <Element type="Node" id={n.frontmatter.nispid}>
      <h3>Reference document</h3>

      <dl>
        <dt className="dataLabel">Title</dt>
        <dd className="dataValue">{n.frontmatter.title}</dd>
      </dl>

      <dl>
        <dt className="dataLabel">Description</dt>
        <dd className="dataValue">
          <div dangerouslySetInnerHTML={{ __html: n.html }} />
        </dd>
      </dl>

      <dl>
        <dt className="dataLabel">Level</dt>
        <dd className="dataValue">{n.frontmatter.level}</dd>
      </dl>

      <dl>
        <dt className="dataLabel">emUUID</dt>
        <dd className="dataValue">{n.frontmatter.emUUID}</dd>
      </dl>

      <dl>
        <dt className="dataLabel">Parent</dt>
        <dd className="dataValue">
          <Link to={`/node/${n.frontmatter.parent}.html`}>
            {nodes[n.frontmatter.parent].title}
          </Link>
        </dd>
      </dl>
    </Element>
  )
}

export default NodeTemplate

// {% if page.consumers.size > 0 %}
// <h3>Relationships</h3>
// <p>Service profiles which uses this standard.</p>
// <ul>
// {% for sp in page.consumers %}
// {% assign sp-rec = site.serviceprofile | where:"nisp-id", sp | first %}
// <li><a href="/serviceprofile/{{ sp }}.html">{{sp-rec.title}}</a></li>
// {% endfor %}
// </ul>
// {% endif %}
