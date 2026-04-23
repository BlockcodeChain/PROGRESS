import React from 'react'

async function  page  ({ params }) {
  const { username} = await params;
  console.log(username)
  return (
    <div>
      <h1>hello {username}</h1> 
      [...] saare routes mai kaam kregge array  from mai legga
    </div>
  )
}

export default page



// URL	params.data
// /profile/aanshi	["aanshi"]
// /profile/aanshi/photos	["aanshi", "photos"]
// /profile/aanshi/photos/2024	["aanshi", "photos", "2024"]

// /profile/aanshi
// /profile/aanshi/instagram
// /profile/aanshi/photos
// /profile/aanshi/photos/2024