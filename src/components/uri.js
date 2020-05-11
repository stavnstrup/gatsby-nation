import React from 'react'

const URI = ({ uri }) => {
  if (uri) return <a href={uri}>{uri}</a>
  else return null
}

export default URI
