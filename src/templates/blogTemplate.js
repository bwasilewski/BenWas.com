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
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />

      <PageHeader title="Ben Wasilewski" subtitle="Web Application Developer" />
    
      <Section>
        <Link to="/blog">Go Back</Link>
      </Section>

      <Section className="blog-post-container">
        <div className="blog-post">
          <Title isSize={3}>{frontmatter.title}</Title>
          <Subtitle isSize={5}>{frontmatter.date}</Subtitle>
          { frontmatter.tags && 
            <ul>
              { frontmatter.tags.map(tag => <li>{ tag }</li> )}
            </ul>
          }
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Section>
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
