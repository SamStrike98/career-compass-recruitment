import React from 'react'

const Button = ({ btnText }) => {
    return (
        <button type='button' className='min-w-min max-h-[60px] px-3 py-2 text-white font-bold text-lg bg-blue-950 hover:bg-blue-700 transition-colors rounded-md'>{btnText}</button>
    )
}

export default Button