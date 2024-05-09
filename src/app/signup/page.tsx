"use client";
import React from 'react'
import axios from 'axios';
import { redirect } from 'next/navigation';
import { useState } from 'react';
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
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState('');
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);
      setMessage(response.data.message);
    } catch(error) {
      setMessage(error);
    }
  }

  console.log(formData);

  const handleToggle = () => setChecked(prev => !prev);
  return (
    <div className={`${styles.background} ${roboto.className} bg-cover w-full h-full flex`}>
      <div className="bg-cover flex items-center">
        <div className={`bg-white ${styles.container} px-[40px] pt-[20px] ml-8 rounded-xl shadow-2xl flex flex-col items-center`}>
          <h1 className={`${jomolhari.className} text-center text-5xl mb-[40px]`}>Sign Up</h1>
          <div className='flex flex-col gap-5 pb-2 ml-1'>
            <Input icon='icons/avatar.svg' placeholder='Full Name...' name='username' value={formData.username} onChange={handleChange}/>
            <Input icon='icons/phone.svg' placeholder='Phone Number...' name='phone' value={formData.phone} onChange={handleChange}/>
            <Input icon='icons/message.svg' placeholder='Your Email Address...' name='email' value={formData.email} onChange={handleChange}/>
            <Input icon='icons/lock.svg' password={true} placeholder='Password...' name='password' value={formData.password} onChange={handleChange}/>
            <Input icon='icons/lock.svg' password={true} placeholder='Confirm Password...' name='confirmed_password'/>
          </div>
          <div className='flex hover:cursor-pointer justify-end gap-1 w-full self-end pb-8'>
            <span className='text-sm'>Remember me</span>
            <div onClick={handleToggle} className='bg-black flex justify-center items-center p-1 rounded-md aspect-square'>
              {checked && <Image src="icons/checkmark.svg" alt="checkmark" width={11} height={11} />}
            </div>
          </div>
          <Button onSubmit={handleSubmit} />
          <p className='pt-4'>Already have an account? <Link href="/login" className='text-[#4129F8] hover:cursor-pointer'>Log in</Link></p>
        </div>
      </div>
    </div>

  )
}
