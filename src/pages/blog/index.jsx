import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from '../../components/pageheader'
import Footer from '../../components/footer'
import { graphql, Link } from 'gatsby'
import {
  Section,
} from 'bloomer'


const ArticleLink = ({ data }) => (
  <Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link>  
)


const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    
    <PageHeader title="Ben Wasilewski" subtitle="Blog" />

    <Section>
      <ul>
        { data.allMarkdownRemark.nodes.map(article => <li key={article.id}><span>{article.frontmatter.date} | </span><ArticleLink data={article} /></li> )}
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
