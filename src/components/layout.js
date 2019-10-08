import React from 'react'
import Header from './header'
import Footer from './footer'
import layoutSyles from './layout.module.scss'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div className={layoutSyles.container}>
        <div className={layoutSyles.content}>
            <Header/>
            {props.children}
        </div>
        <Footer/>
        </div>
    )
}

export default Layout 