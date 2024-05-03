import Image from 'next/image'
import React from 'react'

export default function PromptField() {
  return (
    <div className='flex '>
      <div>
        <input type="text" />
      </div>
      <div className='p-5 bg-gradient-to-r from-[#4129F8] to-[#484BE1] shadow-lg rounded-xl border border-[#E9EBF8]'>
        <Image src="icons/paperplane.svg" alt="send" width={22} height={22} />
      </div>
    </div>

  )
}
