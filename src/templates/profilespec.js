import React from 'react'
import Element from '../components/element'
import Profileref from '../components/profileref'
import UUID from '../components/uuid'
import { Link, graphql } from 'gatsby'

export const query = graphql`
  query($nispid: String!) {
    markdownRemark(frontmatter: { nispid: { eq: $nispid } }) {
      frontmatter {
        nispid
        org
        pubnum
        date
        title
        version
        uuid
      }
    }
  }
`

const ProfilespecTemplate = props => {
  const ps = props.data.markdownRemark.frontmatter

  return (
    <Element type="Profile Specification" id={ps.nispid}>
      <Profileref prof={ps} />
      <UUID uuid={ps.uuid} />
    </Element>
  )
}

export default ProfilespecTemplate
