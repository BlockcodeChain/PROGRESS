import React from 'react'

async function  page  ({ params }) {
 const { username } = await params;
  return (
    <div>
      <h1>username- {username}</h1>
    </div>
  )
}

export default page
