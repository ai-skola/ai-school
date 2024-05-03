"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ["latin"] });

export default function Dropdown() {
  const subjects: string[] = [
    'Mathematics', 'History', 'English', 'Physics', 'Chemistry', 'Georgian'
  ]
  const [selected, setSelected] = useState(subjects[0]);
  const [collapsed, setCollapsed] = useState(false);

  const handleSelectClick = () => {
    setCollapsed(prev => !prev)
    console.log(collapsed);
  }

  const handleItemClick = (e: any) => {
    setSelected(e.target.innerText);
    setCollapsed(prev => !prev)
  }

  return (
    <div className={`${inter.className} text-white text-lg w-[12rem]`}>
      <div className='flex bg-gradient-to-r from-[#1E0786] to-[#4129F8] py-3 px-6 rounded-lg justify-end items-center hover:cursor-pointer' onClick={handleSelectClick}>
        <div className='grow flex items-center justify-center'>
          <h1>{selected.toUpperCase()}</h1>
        </div>
        <Image src="icons/arrow.svg" alt="arrow" width={18} height={9} />
      </div>
      {collapsed && (
        <div className='mt-1 bg-gradient-to-r from-[#1E0786] to-[#4129F8] rounded-lg flex flex-col items-center justify-between text-center p-5 max-h-[10rem] overflow-scroll'>
          {subjects.map((subject, index) => (
            <div key={index} className='border-b-[1px] border-b-white w-full box-content mb-1 hover:cursor-pointer border-opacity-20' onClick={handleItemClick}>
              <h3>{subject}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
