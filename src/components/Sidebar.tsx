import React from 'react'
import Image from 'next/image'
import Button from './Button'

export default function Sidebar() {
  return (
    <div className='bg-customblue-50 p-5 rounded-md my-8'>
      <div className='w-[200px]'>
        <Image className='pb-4' src="icons/burger.svg" alt="burger" width={18} height={12} />
        <div>
          <Button icon='icons/chat1.svg' text=''/>
        </div>
      </div>
    </div>

  )
}
