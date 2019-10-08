import React from "react"
import { Link } from 'gatsby' 
import Footer from '../components/footer'
import Header from '../components/header'


const AboutPage = () => {
    return (
        <div>
        <Header />
            <h1>About</h1>
            <p>Here is some more information about me</p>
            <p> Need a developer? click <Link to="contact">here</Link> to contact me.</p>
            <Footer />
        </div>
    )
}

export default AboutPage