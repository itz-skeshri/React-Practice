import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='text-center p-5'>
        <h1>User Page: {id}</h1>
    </div>
  )
}

export default User