"use client";
import Image from 'next/image'
import React, { InputHTMLAttributes, useState } from 'react'
import Card from './Card'

interface PromptFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  onSend?: (e) => void;
  chat: [string]
}

export default function PromptField(props: PromptFieldProps) {
  
  const {...rest} = props;
  const chatEmpty = props.chat.length === 0;
  return (
    <div className='flex justify-between gap-3'>
      <div className='grow'>
        {chatEmpty && (<div className='flex lg:gap-2 justify-between mb-4 2xl:justify-around'>
          <Card text='Help you Improve grades' />
          <Card text='Send Explained Materials.' />
          <Card text='Search Anything.' />
        </div>)}
        <input placeholder="Enter A Prompt Here..." {...rest} className='w-full h-16 p-6 placeholder-black rounded-md' type="text" />
      </div>
      <div className='flex flex-col justify-end'>
        <div onClick={props.onSend} className='flex justify-center aspect-w-1 h-16 w-16 aspect-h-1 items-center hover:cursor-pointer bg-gradient-to-r from-[#4129F8] to-[#484BE1] shadow-lg rounded-xl border border-[#E9EBF8]'>
          <Image src="icons/paperplane.svg" alt="send" width={22} height={22}/>
        </div>
      </div>
    </div>

  )
}
