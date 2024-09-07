import React from 'react'

const Button = ({ label, onClick, icon, type, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        type === 'primary'
          ? 'bg-white text-dark-pink hover:bg-light-pink'
          : type === 'secondary'
          ? 'bg-dark-pink text-white hover:bg-pink-400'
          : ''
      } font-medium py-2 px-8 rounded-full shadow-md`}
      type={type}
      disabled={disabled}
    >
      {icon && icon}
      {label}
    </button>
  )
}

export default Button
