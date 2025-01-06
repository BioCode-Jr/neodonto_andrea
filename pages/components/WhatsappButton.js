import React, { useEffect, useState, useRef } from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Link from 'next/link'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true)
  const footerRef = useRef(null)

  useEffect(() => {
    const footerElement = document.querySelector('footer')

    if (!footerElement) return

    footerRef.current = footerElement

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting)
      },
      { root: null, threshold: 0.1 }
    )

    observer.observe(footerRef.current)

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current)
    }
  }, [])

  return (
    <Link
      href='https://wa.me/5551989016197'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div
        className={`fixed bottom-4 right-4 flex items-center space-x-2 bg-white hover:bg-gray-200 py-2 px-3 rounded-full shadow-lg transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className='bg-green-800 rounded-full p-2 box-border shadow-sm'>
          <WhatsAppIcon
            fontSize='large'
            sx={{ fontSize: '32px', color: 'white' }}
          />
        </div>
        <span className='hidden md:inline-block font-medium'>
          Agende sua consulta!
        </span>
      </div>
    </Link>
  )
}

export default WhatsAppButton
