'use client'
import React from 'react'
import Image from 'next/image'
import {useParams } from 'next/navigation'
const page = () => {
    const params=useParams()
    const city=params.city
  return (
    <div className='text-white text-lg flex justify-center items-center w-full min-h-screen'>
   
    {city==="Paris" && (<div>
        <p>paris is the city of love!</p> &&  <Image src="/images/paris.webp" alt="paris" width={400} height={300} />
    </div>

    )
    }
    {city==="Tokyo" && (<div>
        <p>tokyo is the city of lights!</p>
        <Image src="/images/tokoyo.webp" alt="tokyo" width={400} height={300} />
    </div>)}

    {city==="India" && (<div>
        <p>india is the city of culture!</p>
        <Image src="/images/india.webp" alt="india" width={400} height={300} />
    </div>)}
    </div>
   
  )
}

export default page
