import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Columns,
  Column,
  Container,
  Section,
  Subtitle,
  Title,
  Breadcrumb,
  BreadcrumbItem
} from 'bloomer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Section>
      <Title isSize="1">Ben Wasilewski</Title>
      <Subtitle isSize="2">Web Application Developer</Subtitle>

      <Breadcrumb>
        <ul>
          <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/about">About</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="https://github.com/bwasilewski">Code Samples</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/">Projects</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="https://www.linkedin.com/in/benwasilewski">LinkedIn</Link></BreadcrumbItem>
        </ul>
      </Breadcrumb>


      <p>Hello! My name is Ben and I build web applications. I'm currently located in Burlington, Wisconsin. I haved worked onsite and remotely for companies in Chicago, New York, and Los Angeles.</p>
    </Section>

    <Section>
      <Columns>
        <Column>
          <Title isSize="5">Specialties</Title>
          <ul>
            <li>JavaScript (ES5 → ES9)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </Column>

        <Column>
          <Title isSize="5">Proficiencies</Title>
          <ul>
            <li>Backbone.js</li>
            <li>WordPress</li>
            <li>Linux</li>
            <li>Guitar</li>
          </ul> 
        </Column>

        <Column>
          <Title isSize="5">Projects</Title>
          <ul>
            <li>HTPC</li>
            <li>CovidCases.io</li>
            <li>DotFiles</li>
            <li>ThemeBase</li>
          </ul>
        </Column>
      </Columns>
    </Section>
  </Layout>
)

export default IndexPage
