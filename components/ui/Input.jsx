import React from 'react'

const Input = ({ placeholder }) => {
    return (
        <input placeholder={placeholder} type='text' className='outline-none mt-5 rounded-lg px-2 py-2 ring-0 ring-green-500 focus-within:ring-4 transition-all' />
    )
}

export default Input