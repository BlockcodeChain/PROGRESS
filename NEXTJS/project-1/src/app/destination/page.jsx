'use client'
import React from 'react'
import {useRouter} from 'next/navigation'
const page = () => {
  const router=useRouter()
  const destination=["Paris","Tokyo","India"]
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
       <div className="w-96 flex-col  h-96 shadow-sm shadow-white  rounded-lg flex justify-center items-center ">
         <div className='flex justify-center items-center '> 
           <h1 className="text-3xl text-white">Choose Your Destination</h1>
        </div>
        <div className="flex  flex-col  justify-center items-center gap-10 mt-10">
           {destination.map((d, key) => (
          <div  key={key} className="w-20 bg-white hover:bg-gray-200 cursor-pointer  flex justify-center items-center rounded py-2 px-8">
            <h2   onClick={()=>router.push(`/destination/${d}`)} className="  text-xl text-orange-500 hover:text-orange-400 ">{d}</h2>
          </div>
         ))}
        </div>
       </div>
    </div>
  )
}

export default page
