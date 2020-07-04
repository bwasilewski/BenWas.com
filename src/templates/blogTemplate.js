import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import PageHeader from '../components/pageheader'
import { 
  Section,
  Title,
  Subtitle,
} from 'bloomer'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  // const { markdownRemark } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title="Tag Page" />

      <PageHeader title="Ben Wasilewski" subtitle="Web Application Developer" />
    
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date
        tags
      }
    }
  }
`
