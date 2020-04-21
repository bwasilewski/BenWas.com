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

    <Section> <p>Hello! My name is Ben and I build web applications with JavaScript. I'm
      currently located in Burlington, Wisconsin. I have worked onsite and
      remotely for companies in Chicago, New York, and Los Angeles.</p>
    </Section>

    <Section>
      <Columns>
        <Column>
          <Title className="has-underline" isSize="5">Projects</Title>
          <ul>
            <li><a href="https://github.com/bwasilewski/CovidCases.io" target="_blank">CovidCases.io</a></li>
            <li><a href="https://github.com/bwasilewski/StartPage" target="_blank">StartPage</a></li>
            <li><a href="https://github.com/bwasilewski/gas-generator" target="_blank">Site Generator</a></li>
            <li><a href="https://github.com/bwasilewski/Euler-Problems" target="_blank">Euler Problems</a></li>
            <li><a href="https://github.com/bwasilewski/ThemeBase" target="_blank">ThemeBase</a></li>
          </ul>
        </Column>
        <Column>
          <Title className="has-underline" isSize="5">Specialties</Title>
          <ul>
            <li>JavaScript (ES5 → ES9)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Git</li>
            <li>Guitar</li>
            <li>White Chicken Chili</li>
          </ul>
        </Column>
        <Column>
          <Title className="has-underline" isSize="5">Proficiencies</Title>
          <ul>
            <li>Backbone.js</li>
            <li>Python</li>
            <li>Docker</li>
            <li>WordPress</li>
            <li>Linux<small> - check out my <a href="https://github.com/bwasilewski/DotFiles">DotFiles</a></small></li>
            <li>Heroku</li>
          </ul> 
        </Column>
        <Column>
          <Title className="has-underline" isSize="5">Learning</Title>
          <ul>
            <li>VIM</li>
            <li>GraphQL</li>
            <li>Gardening</li>
          </ul>
        </Column>
      </Columns>
      <Columns>
        <Column>
          <Title className="has-underline" isSize="5">Presentations</Title>
          <ul>
            <li><a href="https://github.com/bwasilewski/SassBEM">Discussing a standardized naming convention for Sass projects</a></li>
            <li><a href="https://github.com/bwasilewski/Grunt-Presentation">A Better Workflow with Grunt</a></li>
          </ul>
        </Column>
      </Columns>
    </Section>

    <Footer />
  </Layout>
)

export default IndexPage
