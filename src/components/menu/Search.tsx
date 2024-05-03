import Image from 'next/image'
import React from 'react'

export default function Search() {
  return (
    <div className='bg-[#FEFEFE] rounded-md px-2 py-3 flex gap-3 shadow-lg mt-7'>
      <Image src="icons/search.svg" alt='search' width={18} height={18} />
      <input type="text" placeholder='Search' className='placeholder-black'/>
    </div>
  )
}
