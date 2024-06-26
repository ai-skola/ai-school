import { Roboto } from 'next/font/google'
import React from 'react'
import { usePathname } from 'next/navigation';

interface ButtonProps {
  onSubmit?: (e) => void
}

const roboto = Roboto({ subsets: ["latin"], weight: "400" })

export default function Button(props: ButtonProps) {
  const pathname = usePathname();
  const text = (pathname === "/signup" ? "Sign Up" : "Log In")

  return (
    <div className={`${roboto.className} flex justify-center items-center py-4 px-9 bg-[#3E4AF3] text-white rounded-xl hover:cursor-pointer self-center`} onClick={props.onSubmit}>
      <h2 className='text-2xl'>{text}</h2>
    </div>
  )
}
