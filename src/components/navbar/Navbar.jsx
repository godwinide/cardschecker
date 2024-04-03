'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import styles from './styles.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu =()=> {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='bg-indigo-950 py-4'>
      <div className='flex justify-between container items-center py-4'>
        <div className="font-bold text-white text-lg sm:text-2xl">Cards Checker</div>
        <div className="gap-6 text-white hidden sm:inline-flex">
          <Link href="#">Home</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#verify">Verify Now</Link>
        </div>
        <div className={`${styles.harmburger} flex sm:hidden`} onClick={toggleMenu}>
          <div  className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </div>
      <div className={`gap-6 text-white ${isOpen ? 'flex' : 'hidden'} flex-col justify-center items-center my-4 sm:hidden`}>
        <Link href="#">Home</Link>
        <Link href="#">Services</Link>
        <Link href="#">Contact Us</Link>
        <Link href="#verify">Verify Now</Link>
      </div>
    </nav>
  )
}

export default Navbar