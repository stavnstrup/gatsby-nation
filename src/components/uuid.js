import React from 'react'

const UUID = ({ uuid }) => {
  return (
    <dl>
      <dt className="dataLabel">UUID</dt>
      <dd className="dataValue">{uuid}</dd>
    </dl>
  )
}

export default UUID
