import Image from 'next/image'
import React from 'react'
import MenuItem from './MenuItem'
import HoverButton from '../HoverButton'

export default function Menu() {
  return (
    <div className='h-[calc(100% - 1rem)] flex flex-col justify-between items-center py-9 px-4 my-4 mx-2 bg-[#FEFEFE] border-2 border-customblue-50 rounded-3xl shadow'>
      <div className='flex flex-col gap-4'>
        <MenuItem src='icons/dashboard.svg'text='Dashboard' />
        <MenuItem src='icons/chat2.svg'text='AI Chat' />
        <MenuItem src='icons/book.svg'text='Grades' />
        <MenuItem src='icons/folder.svg'text='Homework' />
      </div>
      <HoverButton src='icons/settings.svg' alt='settings'/>
    </div>
  )
}
