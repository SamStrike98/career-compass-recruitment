import React from 'react'

const Card = ({ size = 'sm' }) => {
    const sizes = {
        sm: 'w-[250px] h-[300px]'
    }

    return (
        <div className={`${sizes[size]} bg-white border-4 border-accent text-black rounded-md shadow-xl `}>

        </div>
    )
}

export default Card