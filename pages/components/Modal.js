import React from 'react'
import Button from './Button'
import { Close } from '@mui/icons-material'

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  procedimentosModal,
}) => {
  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-full max-w-5xl max-h-3xl overflow-y-auto custom-scrollbar relative flex flex-col gap-10 ${
          procedimentosModal ? ' pt-8 pb-16 ' : 'p-8'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className='absolute top-8 right-8 z-50'>
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
        <div className='flex flex-col items-center '>{children}</div>
        {procedimentosModal && (
          <div className='flex justify-center '>
            <Button
              label='Fale Conosco'
              variant={'secondary'}
              onClick={() => {
                window.open('https://wa.me/5551989016197', '_blank')
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
