import React from 'react'

const citylayout = ({children,info}) => {
  return (
    <div className="flex w-full min-h-screen items-center">
       
      {children}
       {info}
    </div>
  )
}

export default citylayout
