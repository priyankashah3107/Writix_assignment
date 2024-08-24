"use client" 
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

interface CardProps {
  title: string, 
  bgColor: string,
  titleCol: string,
 
}

const Card: React.FC<CardProps> = ({title, bgColor, titleCol, }) => {
  return (
    <>
    <div className='card bg-[#F3F3F3] lg:w-[330px] h-[300px] ' 
     style={{backgroundColor: bgColor}}>
      <div className='flex flex-col gap-32 '>
      <h3 className='card_title bg-[#B9FF66] pl-2 rounded-xl lg:w-[221px] lg:font-[30px]'
      style={{backgroundColor: titleCol }}>{title}</h3> 
      <button className='btnn'>Click here</button>   
       </div>

    </div>
    </>
  )
}

export default Card