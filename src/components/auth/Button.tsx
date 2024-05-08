import { Roboto } from 'next/font/google'
import React from 'react'

const roboto = Roboto({ subsets: ["latin"], weight: "400" })

export default function Button() {
  return (
    <div className={`${roboto.className} flex justify-center items-center py-4 px-9 bg-[#3E4AF3] text-white rounded-xl hover:cursor-pointer self-center`}>
      <h2 className='text-2xl'>Sign Up</h2>
    </div>
  )
}
