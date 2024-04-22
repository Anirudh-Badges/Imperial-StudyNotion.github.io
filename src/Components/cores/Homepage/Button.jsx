import React from 'react'

export const Button = ({text}) => {
  return (
    <div className='flex justify-center items-center border-none rounded-md p-[10px] px-7'>
        <button>{text}</button>
    </div>
  )
}
