"use client";
import styles from './sidebar.module.css'
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import { Inter } from 'next/font/google';
import Search from '../menu/Search';

const inter = Inter({ subsets: ["latin"] });

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(prev => !prev)
  }

  if (collapsed) {
    return (
    <div className='bg-customblue-50 h-12 my-4 rounded-lg shadow-lg flex justify-center items-center aspect-square'>
      <Image className='hover:cursor-pointer' src="icons/burger.svg" alt="burger" width={18} height={12} onClick={toggleCollapsed} />
    </div>
    )
  }
  return (
    <div className='bg-customblue-50 h-[calc(100vh - 1rem)] p-5 my-4 rounded-3xl shadow-lg'>
      <div className='w-[300px]'>
        <Image className='pb-4 hover:cursor-pointer' src="icons/burger.svg" alt="burger" width={18} height={12} onClick={toggleCollapsed} />
        <div className='flex flex-col gap-3'>
          <Button icon='icons/chat1.svg' text='Chats' className={`${inter.className} bg-[#1C17C0] hover:cursor-pointer flex rounded-md text-base py-3 px-3 items-center shadow-lg text-white`} />
          <Button icon='icons/stack.svg' text='Materials' className={`${inter.className} bg-gradient-to-r from-[#372B94] hover:cursor-pointer to-[#3E4AF3] flex rounded-md text-base py-3 px-3 items-center shadow-lg text-white`} />
        </div>
        <Search/>
      </div>
    </div>

  )
}
