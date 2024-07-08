import React from 'react'

const TextArea = ({ placeholder, resize, size }) => {
    const sizeVariants = {
        sm: 'w-[200px] h-[100px]',
        md: 'w-[400px] h-[200px]',
        lg: 'w-[600px] h-[300px]',
        xl: 'w-[800px] h-[400px]'

    }

    return (
        <textarea placeholder={placeholder} className={`${!resize ? 'resize-none' : ''} ${sizeVariants[size]} outline-none mt-5 rounded-lg px-2 py-2 ring-0 ring-green-500 focus-within:ring-4 transition-all`} />
    )
}

export default TextArea