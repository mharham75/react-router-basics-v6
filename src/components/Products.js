import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
        <div>
            <input type="search" placeholder='=Search products' />
        </div>
        <nav className='nav-products'>
            <Link to='featured'><li>Featured</li></Link>
            <Link to='new'><li>New</li></Link>
        </nav>
        <Outlet />
    </>
  )
}

export default Products