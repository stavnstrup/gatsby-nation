import React from 'react'
import { Link } from 'gatsby'

const Uri = ({ uri }) => {
  if (uri) return <Link to={uri}>{uri}</Link>
}

export default Uri
