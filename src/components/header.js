import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from './navigation'

const Header = ({ siteTitle }) => {

  return (
    <header>
      <Navigation /> 
    </header>
  )
}

export default Header
