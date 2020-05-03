import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

const Statistics = () => {
  const stat = {
    standards: 1286,
    coverdocs: 67,
    basicstandardsprofile: 1,
    capabilityprofiles: 37,
    profiles: 110,
    serviceprofiles: 346,
    profilespecs: 24,
    organizations: 67,
    responsibleparties: 50,
    nodes: 1679,
  }

  return (
    <div className="statistics">
      <div className="statElement">
        <Link to="/standard/">
          <p className="number">{stat["standards"]}</p>
          <p className="label">Standards</p>
        </Link>
      </div>
      <div className="statElement">
        <Link to="/coverdoc/">
          <p className="number">{stat["coverdocs"]}</p>
          <p className="label">Cover Documents</p>
        </Link>
      </div>
      <div className="statElement">
        <Link to="/bsp/">
          <p className="number">{stat["basicstandardsprofile"]}</p>
          <p className="label">Basic Standards Profile</p>
        </Link>
      </div>
      <div className="statElement">
        <Link to="/capabilityprofile/">
          <p className="number">{stat["capabilityprofiles"]}</p>
          <p className="label">Capability Profiles</p>
        </Link>
      </div>
      <div className="statElement">
        <Link to="/profile/">
          <p className="number">{stat["profiles"]}</p>
          <p className="label">Profiles</p>
        </Link>
      </div>
      <div className="statElement">
        <Link to="/serviceprofile/">
          <p className="number">{stat["serviceprofiles"]}</p>
          <p className="label">Service Profiles</p>
        </Link>
      </div>
      <div className="statElement">
        <Link to="/profilespec/">
          <p className="number">{stat["profilespecs"]}</p>
          <p className="label">Profile Specifications</p>
        </Link>
      </div>
      <div className="statElement">
        <Link to="/organization/">
          <p className="number">{stat["organizations"]}</p>
          <p className="label">Organizations</p>
        </Link>
      </div>
      <div className="statElement">
        <Link to="/responsibleparty/">
          <p className="number">{stat["responsibleparties"]}</p>
          <p className="label">Responsible Parties</p>
        </Link>
      </div>
      <div className="statElement">
        <Link to="/node/">
          <p className="number">{stat["nodes"]}</p>
          <p className="label">Taxonomy Nodes</p>
        </Link>
      </div>
    </div>
  )
}

export default Statistics
