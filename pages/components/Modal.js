import React from 'react'
import Button from './Button'
import { Close } from '@mui/icons-material'

const Modal = ({ isOpen, onClose, title, children, text }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-lg shadow-lg w-full max-w-3xl  mx-auto p-6 flex flex-col gap-10'>
        <div className='flex justify-end items-center'>
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
        <div className='flex flex-col items-center gap-10 px-10'>
          <h2 className='text-4xl font-semibold text-dark-pink'>
            {title}
          </h2>
          {children}
        </div>

        <div className='flex justify-center mt-6'>
          <Button
            label='Agende sua Consulta'
            variant={'secondary'}
            onClick={() => alert('Clicou')}
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
