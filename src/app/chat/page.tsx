"use client";
import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'
import { useState } from 'react';
import Dropdown from '@/components/Dropdown'
import Image from 'next/image'
import { Inter, Roboto } from 'next/font/google'
import PromptField from '@/components/chat/PromptField'
import axios from 'axios';


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" })

export default function Chat() {
  const [formData, setFormData] = useState({
    title: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/chats');
    console.log(response.data);
  }
  return (
    <div className='w-full'>
      <div className='h-full w-full flex'>
        <Sidebar />
        <div className='flex flex-col items-center w-full p-8'>
          <div className='flex self-end'><Dropdown /></div>
          <div className='w-full flex flex-col justify-between grow'>
            <div className={`${inter.className} flex flex-col justify-center py-8 items-center gap-2`}>
              <Image src="icons/logo_svg.svg" alt='logo' width={300} height={300} className='h-auto' />
            </div>
            <div className={`${roboto.className}`}>
              <div className='py-4'>
                <PromptField value={formData.title} name='title' onChange={handleChange} onClick={handleSend} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
