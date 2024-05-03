import Image from 'next/image'
import React from 'react'

interface ButtonProps {
  icon: string,
  text: string,
  className?: string
}

export default function Button({ icon, text, className }: ButtonProps) {
  return (
    <div className={className}>
      <Image src={icon} alt="button_text" width={24} height={24} />
      <div className='flex grow items-center ml-[5.5rem]'>
        <h3 >{text}</h3>
      </div>
    </div>
  )
}
