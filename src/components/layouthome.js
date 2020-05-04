import React from "react"
import Layout from "./layout"
import Footer from "./footer"

const LayoutHome = prop => {
  return (
    <Layout>
      <div className="nispHero">
        <h2>{prop.title}</h2>
      </div>

      <div className="nispContent">
        {prop.children}
        <Footer />
      </div>
    </Layout>
  )
}

export default LayoutHome
