import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className='container flex justify-between p-3'>
        <Image className='ml-8' src="/images/brain.png" alt="logo" width={50} height={50}/>
        <span className='mt-4 text-slate-600'>All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer