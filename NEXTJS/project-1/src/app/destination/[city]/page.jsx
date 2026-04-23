'use client'
import React from 'react'
import { useParams } from 'next/navigation'
const page = () => {
  const params=useParams()
    const city=params.city
  return (
    <div className="w-full min-h-screen flex mt-10">
      <h1 className='text-white text-2xl'>Welcome to {city}</h1>
    </div>
  )
}

export default page
