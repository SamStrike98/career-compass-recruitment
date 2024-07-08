import React from 'react'
import Container from './Container'

const Headline = () => {
    return (
        <div className='bg-red-500 w-full h-[350px] flex flex-col'>
            <Container>
                <div className='h-[45%] flex flex-col justify-around text-center my-auto'>
                    <h2 className='font-bold text-5xl'>Heading</h2>
                    <h5 className='font-semibold text-2xl'>Subheading</h5>
                    <p className='text-lg'>Some more text...</p>
                </div>
            </Container>
        </div>
    )
}

export default Headline