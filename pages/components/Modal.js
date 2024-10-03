import React from 'react'
import Button from './Button'
import { Close } from '@mui/icons-material'

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-3xl overflow-y-auto custom-scrollbar  pt-8 pb-16 flex flex-col gap-10'
        onClick={e => e.stopPropagation()}
      >
        <div className='flex justify-end items-center px-10 '>
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
        <div className='flex flex-col items-center gap-10 '>
          <h2 className='text-4xl font-semibold text-dark-pink px-10'>
            {title}
          </h2>
          {children}
        </div>

        <div className='flex justify-center '>
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
