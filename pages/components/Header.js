import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
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
    <header className='flex h-max max-h-32 w-full justify-around px-8 py-4 shadow'>
      <Image src='/images/logo.png' alt='logo' width={100} height={100} />
      <nav className='flex items-center justify-between w-4/6'>
        <ul className='flex items-center w-full justify-between'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='hover:underline hover:underline-offset-8 hover:text-dark-pink hover:decoration-2'
            >
              <Link href={item.href}>
                <span className='text-pink-400 hover:text-dark-pink font-semibold '>
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
