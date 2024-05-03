import React from 'react'
import Image from 'next/image'

interface PropTypes {
  src: string,
  text: string
}

export default function MenuItem(props: PropTypes) {
  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <Image src={props.src} alt='dashboard' width={32} height={32}/>
      <p className='text-base'>{props.text}</p>
    </div>
  )
}
