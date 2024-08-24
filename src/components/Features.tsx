import React from 'react'
import Card from './Card'
import { Input } from "@/components/ui/input"
import { DropdownMenuCheckboxes } from './DropdownMenuDemo'
import Sidebar from './Sidebar'

const Features = () => {
  return (
    <> 
    <div className='dark:bg-[#21241d] dark:text-white'>

    <div className=' ml-6 mr-6 md:ml-32 md:mr-32 p-4 pl-6 lg:pl-20 lg:p-10  flex flex-col items-center lg:flex-row gap-6 lg:gap-10 mt-4 lg:mt-24 '>
    <Input type="email" placeholder="Search Bar" />
    {/* <DropdownMenuDemo /> */}
    <DropdownMenuCheckboxes />
      </div>  
    <div className=" lg:ml-8 lg:mr-10 p-4  grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-4 lg:gap-14">
     <Card title={"Option 1"} bgColor='#F3F3F3' 
     titleCol='#B9FF66' />

     <Card title={"Option 2"}  bgColor="#B9FF66"
     titleCol='#ffffff' />

     <Card title={"Option 3"}  bgColor="#a7dfff" titleCol='#ffffff' />

     <Card title={"Option 4"}  bgColor='#f3f3f3'
     titleCol='#B9FF66'  />
     <Card title={"Option 5"}  bgColor="#B9FF66"
      titleCol='#ffffff'   />
     <Card title={"Option 6"}  bgColor="#a7dfff" 
     titleCol='#ffffff' />
     </div>
    </div>
    </>
  )
}

export default Features


