import React, { useEffect, useState } from 'react'
import Button from './Button'
import { ArrowBack, ArrowForward, Star } from '@mui/icons-material'
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

  return (
    <div className='flex flex-col gap-5 w-full mx-auto relative'>
      <div className='overflow-hidden relative '>
        <div
          className='flex transition-transform duration-700 ease-in-out max-h-fit'
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {variant === 'image'
            ? slides?.map((slide, index) => (
                <div
                  key={index}
                  className={`min-w-full transition-opacity duration-700 flex justify-center ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={slide.url}
                    width={400}
                    height={400}
                    alt={`Slide ${index + 1}`}
                    className='w-240 h-128 object-contain rounded-lg'
                  />
                </div>
              ))
            : variant === 'feedback'
            ? slides?.map((slide, index) => (
                <div
                  key={index}
                  className={`min-w-full flex justify-center items-center transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className='flex flex-col w-3/5 justify-center items-center gap-6 p-10 bg-pink-300 rounded-7xl shadow-md'>
                    <span className='font-bold text-white text-5xl'>
                      Depoimentos
                    </span>
                    <div
                      className='flex bg-white rounded-4xl w-full p-8 gap-6 flex-col'
                      style={{ maxWidth: '100%' }}
                    >
                      <div className='flex items-center justify-center gap-5'>
                        <Image
                          src={slide.image}
                          width={100}
                          height={100}
                          alt={`Paciente ${index + 1}`}
                          className='rounded-full border-4 border-dark-pink '
                        />
                        <div className='flex flex-col gap-1'>
                          <p className='text-black text-3xl font-semibold'>
                            {slide.paciente}
                          </p>
                          <p className='text-dark-pink text-lg'>
                            Paciente desde {slide.inicioPaciente}
                          </p>
                          <div className='flex gap-1'>
                            <Star className='text-dark-pink' />
                            <Star className='text-dark-pink' />
                            <Star className='text-dark-pink' />
                            <Star className='text-dark-pink' />
                            <Star className='text-dark-pink' />
                          </div>
                        </div>
                      </div>

                      <p className='relative text-gray-600'>
                        <Image
                          src={'/images/quote.svg'}
                          width={30}
                          height={30}
                          alt={`Paciente ${index + 1}`}
                          className='absolute -top-2 -left-2'
                        />
                        <span className='block text-justify text-lg pl-8 pr-8'>
                          {slide.feedback}
                        </span>
                        <Image
                          src={'/images/quote.svg'}
                          width={30}
                          height={30}
                          className='absolute transform rotate-180 bottom-0 right-0'
                          alt={`Paciente ${index + 1}`}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>

      {/* Bolinhas de navegação */}
      <div className='justify-center flex space-x-2'>
        {slides?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index
                ? variant === 'feedback'
                  ? 'bg-dark-pink'
                  : 'bg-white'
                : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>

      {/* Botões de navegação */}
      <div
        className='flex gap-2 justify-center'
        style={{ marginTop: '24px' }}
      >
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
