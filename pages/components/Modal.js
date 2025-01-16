import React from 'react'
import Button from './Button'
import { Close } from '@mui/icons-material'
import Image from 'next/image'

const Modal = ({ isOpen, onClose, image, children }) => {
  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 '
      onClick={onClose}
    >
      <div
        className='bg-light-pink rounded-xl shadow-lg w-full max-w-6xl max-h-3xl overflow-y-auto custom-scrollbar flex flex-col gap-10 border-dark-pink border-4'
        onClick={e => e.stopPropagation()}
      >
        <div className='flex items-center gap-10 '>
          <div className='flex gap-10 relative overflow-hidden justify-center items-center'>
            <div className='absolute top-8 right-8'>
              <Button
                variant={'icon'}
                onClick={onClose}
                icon={
                  <Close
                    className='text-dark-pink'
                    style={{ fontSize: 20, cursor: 'pointer' }}
                  />
                }
              />
            </div>
            <div className='h-[500] min-w-[300px] relative'>
              <Image
                src={image}
                width={500}
                height={500}
                alt='imagem procedimento'
              />
            </div>

            <div className='flex flex-col justify-center items-center text-wrap gap-10 px-20 h-full relative'>
              <div className='absolute top-0 left-[0]'>
                <Image
                  src='/background/border-dark-pink.svg'
                  width={70}
                  height={400}
                  alt='borda rosa escura'
                />
              </div>

              {children}
            </div>
          </div>
        </div>

        {/*   <div className='flex justify-center '>
          <Button
            label='Agende sua Consulta'
            variant={'secondary'}
            onClick={() => alert('Clicou')}
          />
        </div> */}
      </div>
    </div>
  )
}

export default Modal
