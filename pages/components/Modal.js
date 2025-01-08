import React from 'react'
import Button from './Button'
import { Close } from '@mui/icons-material'

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 '
      onClick={onClose}
    >
      <div
        className='bg-light-pink rounded-xl shadow-lg w-full max-w-6xl max-h-3xl overflow-y-auto custom-scrollbar flex flex-col gap-10'
        onClick={e => e.stopPropagation()}
      >
        <div className='flex items-center gap-10 '>{children}</div>

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
