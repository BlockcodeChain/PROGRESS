import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setdata] = useState([])
 const [userdetails,setuserdetails]=useState({
  fname:" ",email:" "
 })
  async function fetchdata() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setdata(response.data)
  }
  const postdata = async () => {
  const response = await axios({
    url: 'https://jsonplaceholder.typicode.com/users', // ✅ url proper
    method: 'POST', // ✅ method likhna zaroori
    data: {
      title: userdetails.fname,
      body: userdetails.email,
      userId: 1
    }
  })
  setdata((prev) => [
    ...prev,
    {
      id: Date.now(),
      name: userdetails.fname,
      email: userdetails.email
    }
  ])

   setuserdetails({
    fname: "",
    email: ""
  })
  }
  const handleChange=(e)=>{
  
   setuserdetails((prev)=>(
        {...prev,[e.target.name]:e.target.value}
   ))
    
  }
 useEffect(()=>{
  fetchdata()
},[])
  return (
    <div className="min-h-screen bg-gray-800 text-white">

      {/* 🔥 Fixed Button */}
      <div className="fixed top-0 left-0 w-full bg-gray-900 flex justify-center gap-6 py-4 shadow-lg z-10">
        <button 
          onClick={fetchdata} 
          className="border px-6 py-2 rounded-xl hover:bg-white hover:text-black transition">
          Fetch Data
        </button>

        <button onClick={postdata} className="border px-6 py-2 rounded-xl hover:bg-white hover:text-black transition">
          Post Data
        </button>
          <div className='flex flex-col  gap-4 '>
            {/* inpt data  */}
      <input type="text" placeholder="Enter Name" value={userdetails.fname}  name="fname" onChange={handleChange} className='border  rounded' />
       <input type="email" placeholder="Enter email" name="email"            
  value={userdetails.email}  onChange={handleChange} className='border  rounded'/>
          </div>
      </div>
    
      {/* 🔥 Data Section */}
      <div className="pt-24 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {data.map((item) => (
          <div 
            key={item.id} 
            className="bg-white text-black p-4 rounded-xl shadow-lg hover:scale-105 transition">

            <h2 className="text-lg font-bold text-blue-500">
              {item.name}
            </h2>

            <p className="text-gray-700">
              {item.email}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default App