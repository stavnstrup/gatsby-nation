import React from 'react'
import Element from '../components/element'
import URI from '../components/uri'
import { graphql } from 'gatsby'

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

export const OrganizationTemplate = ({ data }) => {
  const org = data.markdownRemark.frontmatter

  const plural = org.stats.standards.owns > 0 ? '' : 's'
  const pluralVerb = org.stats.standards.owns > 0 ? 'is' : 'are'

  return (
    <Element type="Organizations">
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

      <ListAllOrgStandards />
    </Element>
  )
}

//

const ListAllOrgStandards = () => {
  return <div></div>
}
