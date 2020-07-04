import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from '../../components/pageheader'
import Footer from '../../components/footer'
import { graphql, Link } from 'gatsby'
import {
  Section,
} from 'bloomer'


const TagPage = ({ data, location }) => (
  <Layout>
    { console.log(data, location) }
    <SEO title="Tag Page" />
    <PageHeader title="Ben Wasilewski" subtitle="Tag Page" />
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: "Startups"}}}) {
      nodes {
        frontmatter {
          date
          slug
          title
        }
      }
    }
  }
`

export default TagPage
