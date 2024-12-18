import {
  Instagram,
  LinkedIn,
  WhatsApp,
  YouTube,
} from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex w-full min-h-60 bg-dark-pink text-white px-20 py-10 gap-10'>
      <div className='flex justify-center items-center rounded-full'>
        <Image
          src='/images/logoBranco.png'
          alt='logo'
          width={200}
          height={200}
        />
      </div>
      <div className='flex flex-col justify-center w-full gap-4 '>
        <div className='flex gap-10 justify-between px-32'>
          <div className='flex flex-col gap-5'>
            <span className='font-bold text-3xl '>Contato</span>
            <div className='flex flex-col gap-2 text-xl'>
              <span>Telefone: (51) 3207-8469</span>
              <span>Whatsapp: (51) 98901-6197</span>
              <span>
                Email:{' '}
                <a
                  href='mailto:contato
            @andrea.vm1970@gmail.com'
                >
                  andrea.vm1970@gmail.com
                </a>
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <span className='font-bold text-3xl '>Horários</span>
            <span className='text-xl'>
              Das 9h às 18h, de segunda a sexta-feira.
            </span>
          </div>
          <div className='flex flex-col gap-5'>
            <span className='font-bold text-3xl '>Redes Sociais</span>
            <div className='flex gap-5'>
              <Link href='https://wa.me/5551989016197' target='_blank'>
                <div className='bg-white rounded-full p-2 box-border'>
                  <WhatsApp
                    fontSize='large'
                    sx={{ color: '#8c0d3b', fontSize: '40px' }}
                  />
                </div>
              </Link>
              <Link
                href='https://www.instagram.com/andrea.vieira.machado/'
                target='_blank'
              >
                <div className='bg-white rounded-full p-2 box-border'>
                  <Instagram
                    fontSize='large'
                    sx={{ color: '#8c0d3b', fontSize: '40px' }}
                  />
                </div>
              </Link>
              <Link
                href='https://www.instagram.com/andrea.vieira.machado/'
                target='_blank'
              >
                <div className='bg-white rounded-full p-2 box-border'>
                  <LinkedIn
                    fontSize='large'
                    sx={{ color: '#8c0d3b', fontSize: '40px' }}
                  />
                </div>
              </Link>
              <Link
                href='https://www.instagram.com/andrea.vieira.machado/'
                target='_blank'
              >
                <div className='bg-white rounded-full p-2 box-border'>
                  <YouTube
                    fontSize='large'
                    sx={{ color: '#8c0d3b', fontSize: '40px' }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <span className='flex items-end self-end'>
          © 2024 Site desenvolvido por BioCode Jr e Neodonto Jr.
        </span>
      </div>
    </footer>
  )
}

export default Footer
