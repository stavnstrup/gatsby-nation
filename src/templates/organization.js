import React from 'react'
import Element from '../components/element'
import URI from '../components/uri'
import { graphql } from 'gatsby'
// import std from '../data/data/standards.json'

export const query = graphql`
  query($nispid: String!) {
    markdownRemark(frontmatter: { nispid: { eq: $nispid } }) {
      frontmatter {
        nispid
        short
        long
        uri
        stats {
          standards {
            owns
            references
          }
          coverdocs {
            owns
            references
          }
          profiles {
            owns
            references
          }
          serviceprofiles {
            owns
            references
          }
        }
      }
    }
  }
`

const Organizationtemplate = ({ data }) => {
  const org = data.markdownRemark.frontmatter

  const plural = org.stats.standards.owns > 0 ? '' : 's'
  const pluralVerb = org.stats.standards.owns > 0 ? 'is' : 'are'

  return (
    <Element type="Organizations" id={org.key}>
      <h4>
        {org.long} ({org.short}}) which {pluralVerb}:
      </h4>

      <p>
        URL: <URI uri={org.uri} />
      </p>

      <p>
        {org.short} own{plural} {org.stats.standards.owns} standard{plural},
        which {pluralVerb}:
      </p>
    </Element>
  )
}

export default Organizationtemplate
