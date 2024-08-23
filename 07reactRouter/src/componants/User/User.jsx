import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='bg-gray-600 text-white p-8 text-bold'>
        <span><h1 className=' text-white bold'><a  className='bg-green-400'>User: {userid}</a> </h1> </span>
     
    </div>
  )
}

export default User
