import React from "react"

import "../styles/main.scss"

const Layout = prop => {
  return <div className="mainContent">{prop.children}</div>
}

export default Layout
