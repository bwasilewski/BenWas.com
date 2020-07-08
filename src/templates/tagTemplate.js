import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Footer from '../components/footer'
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
  const { title, updated } = data.site.siteMetadata
  let tagValue = decodeURIComponent(loc.slice(loc.lastIndexOf('/') + 1))
  return (
    <Layout>
      <PageHeader title={title} subtitle="Web Application Developer" />
      <Section className="tag-page-container">
        <Title isSize="1">{tagValue}</Title>
        { edges.map(post => <div key={post.node.frontmatter.slug}><Link to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link></div>) }
      </Section>    
      <Footer updated={updated} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($tag: [String]) {
    allMarkdownRemark(filter: { frontmatter: {tags: {in: $tag}}}) {
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
