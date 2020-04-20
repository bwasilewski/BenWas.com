import React from 'react'
import { Link } from "gatsby"
import {
  Breadcrumb,
  BreadcrumbItem
} from 'bloomer'

const BreadNav = () => {
  return (
    <Breadcrumb>
      <ul>
        <BreadcrumbItem><Link to="/"><b>Home</b></Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/about"><b>About</b></Link></BreadcrumbItem>
        <BreadcrumbItem><a target="_blank" to="https://github.com/bwasilewski"><b>Code Samples</b></a></BreadcrumbItem>
        <BreadcrumbItem><Link to="/"><b>Projects</b></Link></BreadcrumbItem>
        <BreadcrumbItem><a target="_blank" href="https://www.linkedin.com/in/benwasilewski"><b>LinkedIn</b></a></BreadcrumbItem>
      </ul>
    </Breadcrumb>
  )
}

export default BreadNav
