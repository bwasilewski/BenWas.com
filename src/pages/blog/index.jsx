import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from '../../components/pageheader'
import Footer from '../../components/footer'
import { graphql, Link } from 'gatsby'
import {
  Column,
  Columns,
  Section,
  Title
} from 'bloomer'

const ArticleLink = ({ data }) => <Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link>  

const BlogPage = ({ data }) => {
  const { nodes, group } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Blog" />

      <PageHeader title="Ben Wasilewski" subtitle="Blog" />

      <Section>
        <Columns>
          <Column isSize="3/4">
            <Title isSize="3">Posts</Title>
            <ul>
              { nodes.map(article => <li key={article.id}><span>{article.frontmatter.date} | </span><ArticleLink data={article} /></li>)}
            </ul>
          </Column>
          <Column>
            <Title isSize="4">Tags</Title>
              <ul>
                { group.map( tag => <li key={tag.tag}><Link to={`/blog/tag/${tag.tag}`}>{tag.tag}</Link></li> ) }
              </ul>
          </Column>
        </Columns>
        </Section>
      <Footer updated={data.site.siteMetadata.updated} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}, sort:
{fields:frontmatter___date, order: DESC}) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
      nodes {
        id 
        frontmatter {
          date
          slug
          title
          draft
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


export default BlogPage
