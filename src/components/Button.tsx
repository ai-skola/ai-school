import Image from 'next/image'
import React from 'react'

interface ButtonProps {
  icon: string,
  text:string,
  className?: string
}

export default function Button({icon, text, className}: ButtonProps) {
  return (
    <div className={className}>
      <Image src={icon} alt="button_text" />
      <h3>{text}</h3>
    </div>
  )
}
