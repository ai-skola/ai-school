import React from 'react'
import Image from 'next/image'

interface CardProps { 
  text: string
}
export default function Card({ text }: CardProps) {
  return (
    <div className='flex flex-col items-center justify-end py-[70px] px-[40px] gap-4 bg-[#F1F5F9] rounded-2xl shadow-lg'>
      <h1 className='text-2xl max-w-[170px] text-center'>{text}</h1>
      <Image src="icons/lightbulb.svg" alt="lightbulb" width={44} height={44}/>
    </div>
  )
}
