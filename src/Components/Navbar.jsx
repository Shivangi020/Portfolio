import React from 'react'
import {CgMenuGridO} from 'react-icons/cg'

const Navbar = () => {
  return (
    <div className='navbar-cn'>
        <p className='menu-grid'><CgMenuGridO/></p>
        <ul>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#About'>About</a></li>
            <li><a href='#Project'>Projects</a></li>
            <li><a href='#Contact'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar