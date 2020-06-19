import React from 'react'
import { Link } from "gatsby"
import OutsideLink from './outsidelink'
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
        <BreadcrumbItem><Link to="/blog"><b>Blog</b></Link></BreadcrumbItem>
        <BreadcrumbItem><OutsideLink href="https://github.com/bwasilewski"><b>Code Samples</b></OutsideLink></BreadcrumbItem>
        <BreadcrumbItem><OutsideLink href="https://www.linkedin.com/in/benwasilewski"><b>LinkedIn</b></OutsideLink></BreadcrumbItem>
        <BreadcrumbItem><OutsideLink href="https://www.goodreads.com/user/show/9449570-ben-wasilewski"><b>GoodReads</b></OutsideLink></BreadcrumbItem>
        <BreadcrumbItem><OutsideLink href="mailto:benwasilewski@gmail.com"><b>Contact</b></OutsideLink></BreadcrumbItem>
      </ul>
    </Breadcrumb>
  )
}

export default BreadNav
