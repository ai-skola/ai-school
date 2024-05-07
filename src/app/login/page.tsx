import React from 'react'
import styles from './page.module.css'
import Input from '@/components/auth/Input'

export default function Login() {
  return (
    <div className={`${styles.background} bg-cover w-full h-full`}>
      <div className='bg-white'>
        <h1>Log In</h1>
        <div>
          <Input icon='icons/dev.svg'/>
        </div>
      </div>
    </div>
  )
}
