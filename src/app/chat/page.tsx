import Sidebar from '@/components/Sidebar'
import React from 'react'
import Dropdown from '@/components/Dropdown'

export default function page() {
  return (
    <div className='h-full flex'>
      <Sidebar/>
      <div>
        <div></div>
        <div>
          <Dropdown/>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
