import React from 'react'

const Button = ({
  label,
  onClick,
  icon,
  type,
  variant,
  disabled,
  column,
}) => {
  const bgColorGrid = (variant, column) => {
    const bgColorMap = {
      'grid-1': 'bg-pink-grad-40 hover:bg-pink-grad-30',
      'grid-2': 'bg-pink-grad-30 hover:bg-pink-grad-20',
      'grid-3': 'bg-pink-grad-20 hover:bg-pink-grad-10',
      'grid-4': 'bg-pink-grad-10 hover:bg-pink-grad-05',
    }

    const key = `${variant}-${column}`
    return (
      `${bgColorMap[key]} text-white rounded-3xl py-2 px-8 flex-col` || ''
    )
  }

  const variants = {
    primary: 'bg-white text-dark-pink hover:bg-light-pink',
    secondary: 'bg-dark-pink text-white hover:bg-pink-400',
    grid: bgColorGrid('grid', column),
  }

  return (
    <button
      onClick={onClick}
      className={`${
        variants[variant]
          ? variants[variant]
          : 'bg-white text-dark-pink hover:bg-light-pink'
      } font-medium py-2 px-8 shadow-md rounded-full gap-3 flex items-center justify-center`}
      type={type}
      disabled={disabled}
    >
      {icon && icon}
      {label}
    </button>
  )
}

export default Button
