import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from '../../components/pageheader'
import Footer from '../../components/footer'
import { graphql, Link } from 'gatsby'
import {
  Section,
  Title
} from 'bloomer'


const ArticleLink = ({ data }) => (
  <Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link>  
)


const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    
    <PageHeader title="Ben Wasilewski" subtitle="Blog" />

    <Section>
      <Title isSize="3">Posts</Title>
      <ul>
        { data.allMarkdownRemark.nodes.map(article => <li key={article.id}><span>{article.frontmatter.date} | </span><ArticleLink data={article} /></li> )}
      </ul>
      <Title isSize="3">Tags</Title>
      <ul>
        { data.allMarkdownRemark.group.map( tag => <li key={tag.id}><Link to={`/blog/${tag.tag}`}>{tag.tag}</Link></li> ) }
      </ul>
    </Section>
    <Footer />
  </Layout>
)

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
        }
      }
    } 
  }
`


export default BlogPage
