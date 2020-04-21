/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "../scss/main.scss"


const Layout = ({ children }) => {

  return (
    <div>
      <main id="main">
        {children}
      </main>
    </div>
  )
}

// do we need this?
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
