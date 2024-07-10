import React from 'react'

const CardDesign = ({ color, title, text }) => {
    return (
        <div className="flex flex-col items-center bg-white w-[320px] border-t-[12px] border-accent p-4 text-main font-bold rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className='font-bold text-xl underline underline-offset-4'>{title}</h4>
            <p className="mb-3 font-light text-md mt-3">
                {text}
            </p>
        </div>
    )
}

export default CardDesign