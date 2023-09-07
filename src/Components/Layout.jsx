import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'

const Layout = () => {
  return (
    <main>
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
    </main>
  )
}

export default Layout