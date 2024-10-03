import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import Image from 'next/image'

const Carousel = ({ slides, variant }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + slides.length) % slides.length
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className='flex flex-col gap-5 w-full mx-auto relative'>
      <div className='overflow-hidden relative h-96'>
        <div
          className='flex transition-transform duration-700 ease-in-out'
          style={{
            transform: `translateX(-${(currentIndex - 1) * 33.33}%)`,
          }}
        >
          {variant === 'image'
            ? slides.map((slide, index) => (
                <div
                  key={index}
                  className={`min-w-[33.33%] px-2 transition-opacity duration-700 ease-in-out ${
                    index === currentIndex
                      ? 'scale-100 opacity-100'
                      : 'scale-90 opacity-50'
                  }`}
                >
                  <Image
                    src={slide.url}
                    width={400}
                    height={400}
                    alt={`Slide ${index + 1}`}
                    className='w-full h-96 object-cover rounded-lg'
                  />
                </div>
              ))
            : null}
        </div>
      </div>

      {/* Bolinhas de navegação */}
      <div className='justify-center flex space-x-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>

      {/* Botões de navegação */}
      <div className='flex gap-2 justify-center'>
        <Button
          icon={<ArrowBack />}
          variant='iconPink'
          onClick={prevSlide}
        />
        <Button
          icon={<ArrowForward />}
          variant='iconPink'
          onClick={nextSlide}
        />
      </div>
    </div>
  )
}
export default Carousel
