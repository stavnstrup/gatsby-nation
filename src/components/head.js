import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700|Roboto:100"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css"
          media="screen"
          title="no title"
          rel="stylesheet"
        />
        <link href="../styles/main.css" rel="stylesheet" />
      </Helmet>
    </div>
  )
}

export default Head
