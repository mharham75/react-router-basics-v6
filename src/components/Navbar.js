import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

const Navbar = () => {

  return (
    <nav className='nav'>
        <ul className='ul'>
            <Link to="/"><li>Home</li></Link>
            <Link to="about"><li>About</li></Link>
            <Link to="products"><li>Products</li></Link>
            <Link to="users"><li>Users</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar