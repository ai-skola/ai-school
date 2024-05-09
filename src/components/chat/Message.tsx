import React from 'react'

interface MessageProps {
  text: string
}

export default function Message({ text }: MessageProps) {
  return (
    <div className='flex gap-1'>
      <div className='bg-slate-200 w-12 h-12 rounded-full'/>
      <div className='p-2 w-full shadow-xl bg-white rounded-lg'>
        <p>{text}</p>
      </div>
    </div>

  )
}
