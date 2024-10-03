import React from 'react'

const Button = ({
  label,
  secondLabel,
  onClick,
  icon,
  type,
  variant,
  disabled,
  row,
}) => {
  const bgColorGrid = (variant, row) => {
    const bgColorMap = {
      'grid-1': 'bg-pink-grad-40 hover:bg-pink-grad-30',
      'grid-2': 'bg-pink-grad-30 hover:bg-pink-grad-20',
      'grid-3': 'bg-pink-grad-20 hover:bg-pink-grad-10',
      'grid-4': 'bg-pink-grad-10 hover:bg-pink-grad-05',
    }

    const key = `${variant}-${row}`
    return (
      `${bgColorMap[key]} text-white rounded-9xl py-2 px-5 h-64 w-64 flex-col hover` ||
      ''
    )
  }

  const variants = {
    primary:
      'bg-white text-dark-pink hover:bg-pink-200 rounded-full font-semibold  py-2 px-8 ',
    secondary:
      'bg-dark-pink text-white hover:bg-darker-pink rounded-full py-2 px-8 ',
    iconPink: 'bg-dark-pink text-white hover:bg-pink-200 p-1',
    iconWhite: 'bg-white text-dark-pink hover:bg-pink-200 p-1',
    grid: bgColorGrid('grid', row),
  }

  return (
    <button
      onClick={onClick}
      className={`${
        variants[variant]
          ? variants[variant]
          : 'bg-white text-dark-pink hover:bg-light-pink'
      } shadow-md gap-3 flex items-center justify-center text-2xl`}
      type={type}
      disabled={disabled}
    >
      {icon && icon}
      {label && (
        <div className='flex flex-col items-center w-full justify-center '>
          <span>{label}</span>
          {secondLabel && (
            <span className='underline underline-offset-2 font-semibold'>
              {secondLabel}
            </span>
          )}
        </div>
      )}
    </button>
  )
}

export default Button
