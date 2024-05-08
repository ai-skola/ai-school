"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: string,
  password?: boolean
}

export default function Input(props: InputProps) {
  const [hidden, setHidden] = useState(true);
  const { ...rest } = props;

  const handlePasswordToggle = () => setHidden(prev => !prev)

  return (
    <div className={`flex-1`}>
      <div className='border border-[#4F44D0] rounded-lg flex justify-between items-center gap-2 px-2 py-3 w-[420px]'>
        <Image src={props.icon} alt="field_icon" width={32} height={32} />
        <input className={`${styles.input} grow`} type="text" {...rest} />
        {props.password && <Image className='hover:cursor-pointer' src={hidden ? "icons/eye_with_a_line.svg" : "icons/eye.svg"} width={24} height={24} alt="eye" onClick={handlePasswordToggle} />}
      </div>
    </div>
  )
}
