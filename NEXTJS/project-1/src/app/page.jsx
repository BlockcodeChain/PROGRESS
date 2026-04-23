'use client'
import Image from "next/image";
import {useRouter} from 'next/navigation'
export default function Home() {
  const router=useRouter()
  return (
   <div className="flex  items-center flex-col justify-center w-screen h-96 ">
    
    
       <div className=" gap-10  flex justify-center items-center ">
        <h1 className=" my-15 text-center max-w-[90%]  wrap-break-words  text-5xl font-bold bg-linear-to-b from-white to-orange-600 bg-clip-text text-transparent animate-pulse ">WELCOME TO FOXORA TRAVEL WORLD </h1>
      </div>
        <button onClick={()=>router.push('/destination')} className="border-none outline-none px-20 py-3 rounded-full bg-orange-500 text-white font-medium text-lg mt-8 hover:bg-orange-600 transition-colors duration-300">
          RIDE ON
        </button>
    

  
   </div>

  );
};
