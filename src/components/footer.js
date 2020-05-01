import React from "react"

const Footer = () => {
  const dayTime = new Date()

  return <div>Last updated on {dayTime.toUTCString()}</div>
}

export default Footer
