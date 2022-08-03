import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'
import { useAuth } from './auth'

const Navbar = () => {

  const auth = useAuth()

  return (
    <nav className='nav'>
        <ul className='ul'>
            <Link to="/"><li>Home</li></Link>
            <Link to="about"><li>About</li></Link>
            <Link to="products"><li>Products</li></Link>
            <Link to="users"><li>Users</li></Link>
            <Link to="profile"><li>Profile</li></Link>
            {
              !auth.user && <Link to="login"><li>Login</li></Link>
            }
        </ul>
    </nav>
  )
}

export default Navbar