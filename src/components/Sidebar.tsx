import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Sidebar() {
  return (
    
     <>
      <div className='dark:bg-[#21241D] dark:text-white'>
      <div className='border-2 border-black pt-10 text-center ml-2 mt-8 lg:ml-10 lg:mt-32  w-[200px] md:w-[300px] h-[700px] rounded-2xl dark:border-white '>
         <h1 className='text-xl font-semibold'>Sidebar</h1>

         <div className='flex flex-col justify-center items-center gap-8'>
          <Button className='md:w-[200px] h-[50px] text-[16px] font-medium border-black rounded-xl shadow-lg hover:bg-black hover:text-white border-2 mt-14 dark:border-white hover:dark:bg-white hover:dark:text-black' >Option 1</Button>
          <Button className='md:w-[200px] h-[50px] text-[16px] font-medium border-black rounded-xl shadow-lg hover:bg-black hover:text-white border-2 dark:border-white hover:dark:bg-white hover:dark:text-black' >Option 2</Button>
          <Button className='md:w-[200px] h-[50px] text-[16px] font-medium border-black rounded-xl shadow-lg hover:bg-black hover:text-white border-2 dark:border-white hover:dark:bg-white hover:dark:text-black' >Option 3</Button>
          <Button className='md:w-[200px] h-[50px] text-[16px] font-medium border-black rounded-xl shadow-lg hover:bg-black hover:text-white border-2 dark:border-white hover:dark:bg-white hover:dark:text-black' >Option 4</Button>

          <Link href="/progress" className='md:w-[200px] h-[150px] text-[16px] font-medium border-black rounded-xl pt-14 shadow-lg hover:bg-black hover:text-white border-2 dark:border-white hover:dark:bg-white hover:dark:text-black' >Progress bar</Link>
         </div>
       </div>
      </div>
     </>
  )
}
