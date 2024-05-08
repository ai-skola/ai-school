"use client";
import React, { useState } from 'react'
import styles from './page.module.css'
import Input from '@/components/auth/Input'
import Image from 'next/image'
import Button from '@/components/auth/Button'
import { Roboto } from 'next/font/google'
import { Jomolhari } from 'next/font/google'
import Link from 'next/link'

const roboto = Roboto({ subsets: ['latin'], weight: "400" })
const jomolhari = Jomolhari({ subsets: ["latin"], weight: "400" });


export default function Login() {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => setChecked(prev => !prev);
  return (
    <div className={`${styles.background} ${roboto.className} bg-cover w-full h-full flex`}>
      <div className="bg-cover flex items-center">
        <div className={`bg-white ${styles.container} px-[40px] pt-[20px] ml-8 rounded-xl shadow-2xl flex flex-col items-center`}>
          <h1 className={`${jomolhari.className} mt-[100px] text-center text-5xl mb-[40px]`}>Log In</h1>
          <div className='flex flex-col gap-5 pb-2 ml-1'>
            <Input icon='icons/message.svg' placeholder='Your Email Address...' />
            <Input icon='icons/lock.svg' password={true} placeholder='Password...' />
          </div>
          <div className='flex hover:cursor-pointer justify-end gap-1 w-full self-end pb-8'>
            <span className='text-sm'>Remember Me</span>
            <div onClick={handleToggle} className='bg-black flex justify-center items-center p-1 rounded-md aspect-square'>
              {checked && <Image src="icons/checkmark.svg" alt="checkmark" width={11} height={11} />}
            </div>
          </div>
          <Button />
          <p className='pt-4'>Don&apos;t Have An Account? <Link href="/signup" className='text-[#4129F8] hover:cursor-pointer'>Sign Up</Link></p>
        </div>
      </div>
    </div>

  )
}
