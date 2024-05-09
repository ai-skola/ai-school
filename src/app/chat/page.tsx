"use client";
import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'
import { useState } from 'react';
import Dropdown from '@/components/Dropdown'
import Image from 'next/image'
import { Inter, Roboto } from 'next/font/google'
import PromptField from '@/components/chat/PromptField'
import Message from '@/components/chat/Message';
import runChat from '../../../utils/runChat';


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" })



export default function Chat() {
  const [prompt, setPrompt] = useState('');
  const [chat, setChat] = useState([]);

  const chatEmpty = chat.length === 0;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPrompt(value);
  };

  const handleSend = async (e: MouseEvent) => {
    e.preventDefault();
    const response = await runChat(prompt);
    setChat(prev => [...prev, prompt, response])
    setPrompt('');
  }

  console.log(chat);

  return (
    <div className='w-full'>
      <div className='h-full w-full flex'>
        <Sidebar />
        <div className='flex flex-col items-center w-full p-8'>
          <div className='flex self-end'><Dropdown /></div>
          <div className='w-full flex flex-col justify-between grow'>
            {chatEmpty ? (<div className={`${inter.className} flex flex-col justify-center py-8 items-center gap-2`}>
              <Image src="icons/logo_svg.svg" alt='logo' width={300} height={300} className='h-auto' />
            </div>) : (<div className='flex flex-col px-2 gap-2 justify-end h-full'>
              {chat.map((message, i) => (
                <Message key={i} text={message}/>
              ))}
            </div>)}
            <div className={`${roboto.className}`}>
              <div className='py-4'>
                <PromptField value={prompt} name='title' onChange={handleChange} onSend={handleSend} chat={chat} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
