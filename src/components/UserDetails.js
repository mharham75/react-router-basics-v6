import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    const params = useParams()
    const userid = params.userid

  return (
    <div>UserDetails - {userid}</div>
  )
}

export default UserDetails