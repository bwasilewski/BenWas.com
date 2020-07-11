import React from "react"
import { Link } from "gatsby"

const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <span>{post.frontmatter.date} | </span>
          <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default PostList
