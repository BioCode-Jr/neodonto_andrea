import React, { useEffect, useState } from 'react'
import Button from '../Button'
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className='flex flex-col gap-5 w-full mx-auto relative'>
      <div className='overflow-hidden relative '>
        <div
          className='flex transition-transform duration-700 ease-in-out'
          style={{
            // Se for "image", mantemos o movimento de múltiplos slides, caso contrário um slide por vez
            transform:
              variant === 'image'
                ? `translateX(-${(currentIndex - 1) * 33.33}%)`
                : `translateX(-${currentIndex * 100}%)`, // 100% de transição por vez para feedback
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
            : variant === 'feedback'
            ? slides.map((slide, index) => (
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
                    <div className='flex bg-white rounded-4xl w-full h-full p-8 gap-6 flex-col gap'>
                      <div className='flex items-center justify-center gap-5'>
                        <Image
                          src={slide.url}
                          width={100}
                          height={100}
                          alt={`Paciente ${index + 1}`}
                          className='rounded-full border-4 border-dark-pink'
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

                      <p className='flex fletext-gray-600'>
                        <Image
                          src={'/images/quote.svg'}
                          width={30}
                          height={30}
                          alt={`Paciente ${index + 1}`}
                        />
                        {slide.feedback}{' '}
                        <Image
                          src={'/images/quote.svg'}
                          width={30}
                          height={30}
                          className='transform '
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
        {slides.map((_, index) => (
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
