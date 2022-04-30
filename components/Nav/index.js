import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import FadeIn from '../Motion/FadeIn'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu(e) {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='py-5 md:pt-16 flex items-center justify-between'>
      <FadeIn direction='down' hero={true}>
        <div className='logo'>
          <Link href='/'>
            <h1 className='text-2xl font-semibold text-primary uppercase'>
              Construction
            </h1>
          </Link>
        </div>
      </FadeIn>
      <ul
        className={`flex md:items-center fixed left-0 top-0 bg-white md:bg-transparent z-10 w-full h-screen md:w-auto md:h-auto pt-5 px-5 flex-col md:flex-row md:p-0 items-start md:relative ${
          menuOpen ? 'left-0' : 'left-[100%]'
        } transition-all duration-300 md:left-0`}
      >
        <li className='md:hidden self-end mb-12'>
          <a href='#' onClick={toggleMenu}>
            <Image
              src='/close.svg'
              layout='fixed'
              width={24}
              height={24}
            ></Image>
          </a>
        </li>
        <li>
          <FadeIn hero={true} direction='down' delay={0.1}>
            <a
              className='text-lg text-white font-semibold mr-[2.09vw] transition-all duration-300 active'
              href='#'
            >
              Home
            </a>
          </FadeIn>
        </li>
        <li>
          <FadeIn hero={true} direction='down' delay={0.2}>
            <a
              className='text-lg text-white mr-[2.09vw] transition-all duration-300'
              href='#'
            >
              About Us
            </a>
          </FadeIn>
        </li>
        <li>
          <FadeIn hero={true} direction='down' delay={0.3}>
            <a
              className='text-lg text-white mr-[2.09vw] transition-all duration-300'
              href='#'
            >
              Services
            </a>
          </FadeIn>
        </li>
        <li>
          <FadeIn hero={true} direction='down' delay={0.4}>
            <a
              className='text-lg text-white transition-all duration-300'
              href='#'
            >
              Project
            </a>
          </FadeIn>
        </li>
      </ul>
    </nav>
  )
}
