import Features from '@/components/Features'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const page = () => {
  return (
    <>
    
    <Navbar />
    <div className='flex flex-row'>
    <Sidebar />
      <Features />
      
      </div>
    </>
  )
}

export default page