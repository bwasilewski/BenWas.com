require('dotenv').config()
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const tagPageTemplate = require.resolve('./src/templates/tagTemplate.js')

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const tagResults = await graphql(`
    {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue 
        }
      }
    }
  `)

  // Handle errors
  if (result.errors || tagResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }


  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let shouldRender = process.env.DEVELOPMENT === true || 
      !process.env.DEVELOPMENT && !node.frontmatter.draft
    
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

  tagResults.data.allMarkdownRemark.group.forEach( ({ fieldValue }) => {
    createPage({
      path: `/blog/tag/${fieldValue}`,
      component: tagPageTemplate,
      context: {
        tag: fieldValue
      }
    })
  })  
}
