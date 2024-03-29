import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost (sort : {
        fields:publishedDate,
        order:DESC
      }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
    `)
    return (
        <Layout>
        <Head title="Blog"/>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
           {data.allContentfulBlogPost.edges.map(element => (
            <li className={blogStyles.post} key={element.node.title}>
            <Link to={`blog/${element.node.slug}`}>
            <h2>{element.node.title}</h2>
            <p>{element.node.publishedDate}</p>
            </Link>
            </li>
           ))}
            </ol>
        </Layout>
    )
}

export default BlogPage
// query {
//   allMarkdownRemark{
//     edges{
//       node{
//        frontmatter {
//         title
//         date
//       }
//       fields {
//         slug
//      }
//       }
//     }
//   }
//   }