import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {

  const [searchParams,setSearchParams] = useSearchParams()

  const showActiveUsers = searchParams.get('filter')==='active'

  return (
    <>
      <p>Users Page</p>
      <Outlet />
      <button onClick={ () => setSearchParams({ filter: 'active' })}>Active Users</button>
      <button onClick={ () => setSearchParams({ })}>Reset Filters</button>
      <>
        {
          showActiveUsers ? <p>Showing Active Users</p> : <p>Showing All Users</p>
        }
      </>
    </>
  )
}

export default Users