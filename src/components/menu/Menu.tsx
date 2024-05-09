"use client";
import { usePathname } from 'next/navigation';
import React from 'react'
import MenuItem from './MenuItem'
import HoverButton from '../HoverButton'

export default function Menu() {
  const pathname = usePathname();
  const excludedPaths = ['/login', '/signup'];
  if (excludedPaths.includes(pathname)) {
    return null
  }

  return (
    <div className='h-[calc(100% - 1rem)] flex flex-col justify-between items-center py-9 px-4 my-4 mx-2 bg-[#FEFEFE] border-2 border-customblue-50 rounded-3xl shadow'>
      <div className='flex flex-col gap-4'>
        <MenuItem href="/dashboard" src='icons/dashboard.svg'text='Dashboard' />
        <MenuItem href="/chat" src='icons/chat2.svg'text='AI Chat' />
        <MenuItem href="/calendar" src='icons/calendar.svg' text='Calendar' /> 
      </div>
      <HoverButton src='icons/settings.svg' alt='settings'/>
    </div>
  )
}
