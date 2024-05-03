import Sidebar from '@/components/Sidebar'
import React from 'react'
import Dropdown from '@/components/Dropdown'
import Image from 'next/image'
import { Inter, Roboto } from 'next/font/google'
import Card from '@/components/chat/Card'
import PromptField from '@/components/chat/PromptField'


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" })

export default function page() {
  return (
    <div className='h-full w-full flex'>
      <Sidebar />
      <div className='flex flex-col items-center w-full px-8'>
        <div className='flex self-end'><Dropdown /></div>
        <div>
          <div className={`${inter.className} flex flex-col justify-center items-center gap-2`}>
            <Image src="icons/dev.svg" alt='logo' width={102} height={102} />
            <h1 className='text-4xl'>AI SCHOOL</h1>
          </div>
          <div className={`${roboto.className}`}>
            <div className='flex'>
              <Card text='Help you Improve grades' />
              <Card text='Send Explained Materials.' />
              <Card text='Search Anything.' />
            </div>
            <div>
              <PromptField/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
