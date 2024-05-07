import React from 'react'
import Image from 'next/image'

interface CardProps { 
  text: string
}
export default function Card({ text }: CardProps) {
  return (
    <div className='flex flex-col items-center justify-end flex-1 pb-2 pt-6 gap-4 bg-[#F1F5F9] rounded-2xl shadow-lg'>
      <h1 className='text-2xl text-center'>{text}</h1>
      <Image src="icons/lightbulb.svg" alt="lightbulb" width={44} height={44}/>
    </div>
  )
}
