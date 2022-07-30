import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  return (
    <>
      <p>Home Page</p>
      <button onClick={() => navigate('order-summary')}>Place Order</button>
    </>
  )
}

export default Home