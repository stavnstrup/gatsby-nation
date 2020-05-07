import React from "react"
import LayoutHome from "../components/layouthome"
import Statistics from "../components/statistics"
import Head from "../components/head"

import "../styles/main.scss"

const liveLocation = "https://live.nisp.nw3.dk/"
const debugLocation = "https://live.nisp.nw3.dk/debug"
const archiveLocation = "https://archive.nisp.nw3.dk"

const IndexPage = () => (
  <LayoutHome title="The NISP Nation">
    <Head />
    <p>
      The NISP tools and the NISP database viewer are continously being updated,
      but only officially released once a year.
    </p>
    <p>
      In order for the members of IP CaT to keep up with the development, this
      page provides online access to draft HTML5 and PDF editions of the NISP
      and the database viewer.
    </p>
    <p>
      The sources to both the documents and the database viewer are stored in a
      Git repository at GitHub.
    </p>
    <ul>
      <li>
        Any change to the NISP tool/document/database repository will
        immediately trigger a continous integration / continous delivery
        pipeline. This results in a new version of NISP and an updated
        statistical overview of the standards and profiles.
      </li>
      <li>
        A local copy of the NISP database viewer is synchronized with the GitHub
        master twice a day - at 05:00 CET and 17:00 CET - and subsequently
        transformed and made availible on this page.
      </li>
    </ul>
    <hr />
    <div className="linkBox">
      <div className="quickLinks">
        <h4>Go see draft stuff</h4>
        <ul className="daily">
          <li>
            <a href={`${liveLocation}`}>See the latest draft of NISP</a>
          </li>
          <li>The database viewer is temporary unavailable.</li>
          {/*
      <li><a href="http://noswg.nw3.dk/thenispnation/dailyviewer/">Use the database viewer</a></li>
      <li><a href="http://noswg.nw3.dk/thenispnation/dailyviewer.public/">Use the database viewer (public edition)</a></li>
    */}
        </ul>
      </div>

      <div className="gitLinks">
        <h4>Get the sources</h4>

        <p>
          The NISP sources are freely available at{" "}
          <a href="https://github.com/stavnstrup/nisp-tools">GitHub</a>
        </p>
        <p>
          If you want to contribute to the NISP project, you can submit a{" "}
          <a href="https://help.github.com/articles/creating-a-pull-request/">
            pull request
          </a>{" "}
          to the repository.
        </p>
      </div>
    </div>
    <h4>Official releases</h4>
    <ul>
      <li>
        <a href={`${archiveLocation}/nisp-12.0/`}>NISP v12 / ADatP-34(L)</a> -
        Jul. 19, 2019 - also as{" "}
        <a href={`${archiveLocation}/nisp-web-12.0-release.zip`}>web archive</a>
      </li>
      <li>
        <a href={`${archiveLocation}/nisp-11.0/`}>NISP v11 / ADatP-34(K)</a> -
        Aug. 3, 2018 - also as{" "}
        <a href={`${archiveLocation}/nisp-web-11.0-release.zip`}>web archive</a>
      </li>
      <li>
        <a href={`${archiveLocation}/nisp-10.0/`}>NISP v10 / ADatP-34(J)</a> -
        Oct. 2, 2017 - also as{" "}
        <a href={`${archiveLocation}/nisp-web-10.0-release.zip`}>web archive</a>
      </li>
      <li>
        <a href={`${archiveLocation}/nisp-9.0/`}>NISP v9 / ADatP-34(I)</a> -
        Jul. 4, 2016 - also as{" "}
        <a href={`${archiveLocation}/nisp-web-9.0-release.zip`}>web archive</a>
      </li>
      <li>
        <a href={`${archiveLocation}/nisp-8.0/`}>NISP v8 / ADatP-34(H)</a> -
        Aug. 22, 2014 - also as{" "}
        <a href={`${archiveLocation}/nisp-web-8.0-release.zip`}>web archive</a>
      </li>
      <li>
        <a href={`${archiveLocation}/nisp-7.0/`}>NISP v7 / ADatP-34(G)</a> -
        Mar. 22, 2013 - also as{" "}
        <a href={`${archiveLocation}/nisp-web-7.0-release.zip`}>web archive</a>
      </li>
      <li>
        <a href={`${archiveLocation}/nisp-6.0/`}>NISP v6 / ADatP-34(F)</a> -
        Jan. 19, 2012 - also as{" "}
        <a href={`${archiveLocation}/nisp-web-6.0-release.zip`}>web archive</a>
      </li>
    </ul>

    <hr />

    <h4>Statistics</h4>

    <Statistics />
    <hr />

    <h4>Coherency Checks of the NISP Database</h4>

    <ul>
      <li>
        <a href={`${debugLocation}/current.html`}>
          Overview of all standards and profiles
        </a>
      </li>
      <li>
        <a href={`${debugLocation}/overview.html`}>
          Overview of all standards and profiles incl. <strong>deleted</strong>{" "}
          elements
        </a>
      </li>
      <li>
        <a href={`${debugLocation}/dates.html`}>Events in the database</a> -
        when was entities added, changed or deleted
      </li>
      <li>
        <a href={`${debugLocation}/responsibleparties.html`}>
          Responsible parties
        </a>{" "}
        - Sort all standards by responsible party
      </li>
      <li>
        <a href={`${debugLocation}/upcoming.html`}>Candidate standards</a>
      </li>
      <li>
        <a href={`${debugLocation}/family.html`}>Parent/child relationship</a>
      </li>
    </ul>

    {/*
     * [Overview of all standards and profiles](/debug/overview.html"></a>
     * [Events in the database](/debug/dates.html"></a>
     */}
    <hr />
    {/*
<div class="footer">
  <p>Last updated on {{ site.time | date_to_rfc822 }}</p>
</div>
*/}
  </LayoutHome>
)

export default IndexPage
