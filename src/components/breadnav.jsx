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
        <BreadcrumbItem><a target="_blank" href="https://github.com/bwasilewski"><b>Code Samples</b></a></BreadcrumbItem>
        <BreadcrumbItem><a target="_blank" href="https://www.linkedin.com/in/benwasilewski"><b>LinkedIn</b></a></BreadcrumbItem>
        <BreadcrumbItem><a target="_blank" href="https://www.goodreads.com/user/show/9449570-ben-wasilewski"><b>GoodReads</b></a></BreadcrumbItem>
      </ul>
    </Breadcrumb>
  )
}

export default BreadNav
