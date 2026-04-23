'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Nav = () => {
  const pathName=usePathname()
  return (
    <div className="w-full h-12 flex bg-white items-center justify-between px-8 ">  
      <div>
        <h1 className='font-bold text-2xl  text-orange-500'>🦊FOXORA TRAVEL</h1>
      </div>
      <div className='flex list-none px-8 font-medium '>
       <ul className='space-x-8 '>
        <Link href="/" className={pathName==='/' ? 'text-orange-500' : 'text-gray-600'}>Home</Link>
         <Link href="/destination" className={pathName==='/destination' ? 'text-orange-500' : 'text-gray-600'}>Destination</Link>
        <Link href="/contact" className={pathName==='/contact' ? 'text-orange-500' : 'text-gray-600'}>Contact</Link>
       </ul>
      </div>
    </div>
  )
}

export default Nav
