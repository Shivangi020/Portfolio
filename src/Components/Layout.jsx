import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Project from './Project'

const Layout = () => {
  return (
    <main>
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    </main>
  )
}

export default Layout