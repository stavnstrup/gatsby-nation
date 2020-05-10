import React from 'react'
import { Link } from 'gatsby'

const URI = ({ uri }) => {
  if (uri) return <Link to={uri}>{uri}</Link>
  else return null
}

export default URI
