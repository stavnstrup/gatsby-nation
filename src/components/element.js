import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import HomeIcon from "../images/home.svg"

const Element = prop => {
  return (
    <>
      <div className="elementHead">
        <p className="type">
          <Link to="/">
            <img className="homeIcon" src={HomeIcon} alt="Home" />
          </Link>
          NISP {prop.type}
        </p>
      </div>
      <div className="mainContent elementContent">
        {prop.children}
        <Footer />
      </div>
    </>
  )
}

export default Element
