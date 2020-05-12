import React from 'react'
import { Link } from 'gatsby'
import rps from '../data/data/rp.json'

const Responsibleparty = ({ rp }) => {
  return (
    <>
      <h3>Responsible Party</h3>

      <div className="metaBlock">
        <dl>
          <dt className="dataLabel">Name</dt>
          <dd className="dataValue">
            <Link to={`/responsibleparty/${rp}.html`}>{rps[rp].long}</Link>
          </dd>
        </dl>
      </div>
    </>
  )
}

export default Responsibleparty
