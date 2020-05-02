import React from "react"
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
        <a href="/standard/">
          <p className="number">{stat["standards"]}</p>
          <p className="label">Standards</p>
        </a>
      </div>
      <div className="statElement">
        <a href="/coverdoc/">
          <p className="number">{stat["coverdocs"]}</p>
          <p className="label">Cover Documents</p>
        </a>
      </div>
      <div className="statElement">
        <a href="/bsp/">
          <p className="number">{stat["basicstandardsprofile"]}</p>
          <p className="label">Basic Standards Profile</p>
        </a>
      </div>
      <div className="statElement">
        <a href="/capabilityprofile/">
          <p className="number">{stat["capabilityprofiles"]}</p>
          <p className="label">Capability Profiles</p>
        </a>
      </div>
      <div className="statElement">
        <a href="/profile/">
          <p className="number">{stat["profiles"]}</p>
          <p className="label">Profiles</p>
        </a>
      </div>
      <div className="statElement">
        <a href="/serviceprofile/">
          <p className="number">{stat["serviceprofiles"]}</p>
          <p className="label">Service Profiles</p>
        </a>
      </div>
      <div className="statElement">
        <a href="/profilespec/">
          <p className="number">{stat["profilespecs"]}</p>
          <p className="label">Profile Specifications</p>
        </a>
      </div>
      <div className="statElement">
        <a href="/organization/">
          <p className="number">{stat["organizations"]}</p>
          <p className="label">Organizations</p>
        </a>
      </div>
      <div className="statElement">
        <a href="/responsibleparty/">
          <p className="number">{stat["responsibleparties"]}</p>
          <p className="label">Responsible Parties</p>
        </a>
      </div>
      <div className="statElement">
        <a href="/node/">
          <p className="number">{stat["nodes"]}</p>
          <p className="label">Taxonomy Nodes</p>
        </a>
      </div>
    </div>
  )
}

export default Statistics
