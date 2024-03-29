import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
        <Head title="Contact"/>
            <h1>Contact Me</h1>
            <p>You can find me over on twitter <a href="https://twitter.com/SenMcTernan" target="_blank" rel="noopener noreferrer">@SenMcTernan</a></p>
        </Layout>
    )
}

export default ContactPage