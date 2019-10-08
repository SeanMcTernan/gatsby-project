import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
        <h1>Hello</h1>
        <h2>I'm Sean, a developer in training living in Fernie BC</h2>
        <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}

export default IndexPage