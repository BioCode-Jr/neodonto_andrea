import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, Close } from '@mui/icons-material'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { label: 'Início', href: '#' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Mídias', href: '#midias' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className='flex flex-wrap items-center justify-between px-4 py-4 shadow-md md:px-8'>
      <div className='flex items-center justify-between w-full md:w-auto'>
        <Image
          src='/images/logo.png'
          alt='logo'
          width={100}
          height={100}
        />
        <button
          className='text-dark-pink md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Close fontSize='large' /> : <Menu fontSize='large' />}
        </button>
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full md:flex md:items-center md:w-auto`}
      >
        <ul className='flex flex-col items-center w-full space-y-4 md:flex-row md:space-y-0 md:space-x-20'>
          {navItems?.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <span className='text-pink-400 hover:text-dark-pink font-semibold'>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
