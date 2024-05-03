import Image from 'next/image'
import React, {ReactNode} from 'react'

interface HoverButtonProps {
  src: string,
  alt: string
}

export default function HoverButton({ src, alt }: HoverButtonProps) {
  return (
    <div className='bg-[#E9EBF8] flex justify-center items-center w-[51px] h-[51px] rounded-full shadow-xl hover:cursor-pointer'>
      <Image src={src} alt={alt} width={20} height={20}/>
    </div>
  )
}
