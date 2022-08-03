import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth'

const Profile = () => {

    const auth = useAuth()

    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

  return (
    <>
        <p>Welcome {auth.user}!</p>
        <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Profile