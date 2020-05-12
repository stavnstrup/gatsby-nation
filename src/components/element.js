import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import HomeIcon from '../images/home.svg'

const Element = ({ type, id = '', children }) => {
  return (
    <>
      <div className="elementHead">
        <p className="type">
          <Link to="/">
            <img className="homeIcon" src={HomeIcon} alt="Home" />
          </Link>
          NISP {type}
        </p>
        {id ? (
          <p className="id">
            <strong>ID:</strong> {id}
          </p>
        ) : (
          ''
        )}
      </div>
      <div className="mainContent elementContent">
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Element
