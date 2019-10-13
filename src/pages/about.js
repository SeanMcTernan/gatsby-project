import React from "react"
import { Link } from 'gatsby' 
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
        <Head title="About"/>
            <h1>About</h1>
            <p>Here is some more information about me</p>
            <p> Need a developer? click <Link to="contact">here</Link> to contact me.</p>
        </Layout>  
    )
}

export default AboutPage