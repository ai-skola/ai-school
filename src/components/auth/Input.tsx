"use client";
import Image from 'next/image';
import React from 'react'
import { InputHTMLAttributes } from 'react'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: string,
  password?: boolean
}

export default function Input(props: InputProps) {
  
  const {...rest} = props;
  return (
    <div>
      <div>
        <Image src={props.icon} alt="field_icon" width={32} height={32}/>
        <input type="text" />
        {props.password && <Image src="icons/eye.svg" width={24} height={24} alt="eye"/>}
      </div>
    </div>
  )
}
