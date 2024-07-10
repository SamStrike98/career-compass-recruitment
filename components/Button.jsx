import React from 'react'

const Button = ({ btnText, color = 'main', textColor = 'white' }) => {
    const colorVariants = {
        white: 'white',
        main: 'main',
        accent: 'accent'
    }
    return (
        <button type='button' className={`min-w-min max-h-[60px] px-3 py-2 text-${colorVariants[textColor]} font-bold text-lg bg-${colorVariants[color]} transition-colors rounded-md hover:bg-opacity-90`}>{btnText}</button>
    )
}

export default Button