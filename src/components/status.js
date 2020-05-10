import React from 'react'
import URI from './uri'

const Status = ({ status }) => {
  return (
    <>
      <h3>Status</h3>
      <div className="metaBlock">
        <dl>
          <dt className="dataLabel">URI</dt>
          <dd className="dataValue">
            <URI uri={status.uri} />
          </dd>
        </dl>

        <h4>History</h4>

        <table className="history" border="1">
          <thead>
            <tr>
              <th>Flag</th>
              <th>Date</th>
              <th>RFC</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            {status.history.map(e => (
              <tr>
                <td>{e.flag}</td>
                <td>{e.date}</td>
                <td>{e.rfcp}</td>
                <td>{e.version}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Status
