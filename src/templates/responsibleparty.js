import React from 'react'
import Element from '../components/element'
import std from '../data/data/standards.json'
import { Link } from 'gatsby'

export const query = graphql`
  query($nispid: String!) {
    markdownRemark(frontmatter: { nispid: { eq: $nispid } }) {
      frontmatter {
        nispid
        key
        short
        long
        responsible {
          number
          standards
        }
      }
    }
  }
`

const ResponsiblePartyTemplate = props => {
  const rp = props.data.markdownRemark.frontmatter
  const plural = rp.responsible.number > 1 ? 's' : ''
  const pluralVerb = rp.responsible.number > 1 ? 'are' : 'is'

  return (
    <Element type="Responsible Party" id={rp.nispid}>
      <div class="mainContent elementContent">
        <h4>
          {rp.long} ({rp.short}}):
        </h4>

        <p>
          {rp.short} is responsible for {rp.responsible.number} standard{plural}
          , which {pluralVerb}:
        </p>

        <table>
          <thead>
            <tr>
              <th>Org</th>
              <th>Pubnum</th>
              <th>Title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {rp.responsible.standards.map(edge => {
              return (
                <tr>
                  <td>{std[edge].orgshort}</td>
                  <td>{std[edge].pubnum}</td>
                  <td>
                    <Link to={`/standard/${std[edge].key}.html`}>
                      {std[edge].title}}
                    </Link>
                  </td>
                  <td>{std[edge].date.slice(0, 4)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Element>
  )
}

export default ResponsiblePartyTemplate
