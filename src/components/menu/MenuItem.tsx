import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PropTypes {
  src: string,
  text: string,
  href: string
}

export default function MenuItem(props: PropTypes) {
  return (
    <Link href={props.href}>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <Image src={props.src} alt='dashboard' width={32} height={32} />
        <p className='text-base'>{props.text}</p>
      </div>
    </Link>

  )
}
