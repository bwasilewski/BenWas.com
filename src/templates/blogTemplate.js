import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Footer from "../components/footer"
import PageHeader from "../components/pageheader"
import { Button, Section, Tag, Title, Subtitle } from "bloomer"

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const { updated } = site.siteMetadata
  return (
    <Layout>
      <SEO title={frontmatter.title} />

      <PageHeader title="Ben Wasilewski" subtitle="Web Application Developer" />
      <Section className="blog-post-container">
        <div className="blog-post">
          <Title isSize={3}>{frontmatter.title}</Title>
          <Subtitle isSize={5}>{frontmatter.date}</Subtitle>
          {frontmatter.tags && (
            <div className="buttons">
              {frontmatter.tags.map(tag => (
                <Link key={tag} to={`/blog/${tag}`}>
                  <Button className="is-light is-small" isColor="primary">
                    {tag}
                  </Button>
                </Link>
              ))}
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Section>
      <Section>
        <Link to="/blog">Go Back</Link>
      </Section>
      <Footer updated={updated} />
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
    site {
      siteMetadata {
        title
        updated
      }
    }
  }
`
