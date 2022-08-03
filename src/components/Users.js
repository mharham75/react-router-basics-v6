import React from 'react'
import { Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div>Users Page
      <Outlet />
    </div>
  )
}

export default Users