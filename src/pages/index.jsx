import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from '../components/pageheader'
import Footer from '../components/footer'
import OutsideLink from '../components/outsidelink'
import { graphql } from "gatsby"
import {
  Columns,
  Column,
  Section,
  Title,
} from 'bloomer'


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <PageHeader title={data.site.siteMetadata.title}
			subtitle={data.site.siteMetadata.subtitle} />

    <Section> 
      <p>Hello! My name is Ben and I build web applications with JavaScript. I'm currently located in Burlington, Wisconsin. I have worked onsite and remotely for companies in Chicago, New York, and Los Angeles.</p>
    </Section>

    <Section>
      <Columns>
        <Column>
          <Title className="has-underline" isSize="5">Projects</Title>
          <ul>
            <li><OutsideLink href="https://covidcases.io">CovidCases.io</OutsideLink></li>
            <li><OutsideLink href="https://github.com/bwasilewski/StartPage">StartPage</OutsideLink></li>
            <li><OutsideLink href="https://github.com/bwasilewski/gas-generator">Site Generator</OutsideLink></li>
            <li><OutsideLink href="https://github.com/bwasilewski/Euler-Problems">Euler Problems</OutsideLink></li>
            <li><OutsideLink href="https://github.com/bwasilewski/ThemeBase">ThemeBase</OutsideLink></li>
          </ul>
        </Column>
        <Column>
          <Title className="has-underline" isSize="5">Specialties</Title>
          <ul>
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
            <li>Python</li>
            <li>Docker</li>
            <li>WordPress</li>
            <li>Linux<small> - check out my <OutsideLink href="https://github.com/bwasilewski/DotFiles">DotFiles</OutsideLink></small></li>
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

    <Footer updated={data.site.siteMetadata.updated} />
  </Layout>
)


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
        description
        updated
      }
    } 
  }
`
export default IndexPage
