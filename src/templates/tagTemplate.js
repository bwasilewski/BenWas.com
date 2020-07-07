import React from 'react'
import { graphql } from 'gatsby'
//import SEO from '../components/seo'
import Layout from '../components/layout'
//import Footer from '../components/footer'
import PageHeader from '../components/pageheader'
import { Location } from '@reach/router'
import { 
  Section,
  Title
} from 'bloomer'

export default function Template({
  data// this prop will be injected by the GraphQL query below.
}) {
  const loc = window.location.href
  const { edges } = data.allMarkdownRemark
  let tagValue = loc.slice(loc.lastIndexOf('/') + 1)
console.log(tagValue)
  return (
    <Layout>
      <PageHeader title="Ben Wasilewski" subtitle="Web Application Developer" />
      <Section className="tag-page-container">
        <Title isSize="1">{ tagValue }</Title>
        { edges.map(post => <div key={post.node.slug}>{post.node.frontmatter.title}</div>) }
      </Section>    
    </Layout>
  )
}
export const pageQuery = graphql`
  query($fieldValue: [String]) {
    allMarkdownRemark(filter: { frontmatter: {tags: {in: $fieldValue}}}) {
      edges {
        node {
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        updated
      }
    }
  }
`
