import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {

    const navigate = useNavigate()

  return (
    <>
        <p>Your Order has been placed !</p>
        <button onClick={ () => navigate(-1)}>Go Back</button>
    </>
  )
}

export default OrderSummary