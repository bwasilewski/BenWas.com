import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadNav from '../components/breadnav'
import PageHeader from '../components/pageheader'
import Footer from '../components/footer'
import {
  Columns,
  Column,
  Container,
  Section,
  Subtitle,
  Title,
} from 'bloomer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <PageHeader title="Ben Wasilewski" subtitle="Web Application Developer" />

    <Section>
      <p>Hello! My name is Ben and I build web applications. I'm currently located in Burlington, Wisconsin. I haved worked onsite and remotely for companies in Chicago, New York, and Los Angeles.</p>
    </Section>

    <Section>
      <Columns>
        <Column>
          <Title className="has-underline" isSize="5">Specialties</Title>
          <ul>
            <li>JavaScript (ES5 → ES9)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </Column>

        <Column>
          <Title className="has-underline" isSize="5">Proficiencies</Title>
          <ul>
            <li>Backbone.js</li>
            <li>WordPress</li>
            <li>Linux</li>
            <li>Guitar</li>
          </ul> 
        </Column>

        <Column>
          <Title className="has-underline" isSize="5">Projects</Title>
          <ul>
            <li>CovidCases.io</li>
            <li>HTPC</li>
            <li>DotFiles</li>
            <li>ThemeBase</li>
          </ul>
        </Column>
      </Columns>
    </Section>

    <Footer />
  </Layout>
)

export default IndexPage
