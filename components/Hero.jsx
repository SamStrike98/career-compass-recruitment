import React from 'react'
import Container from './Container'
import Button from './Button'

const Hero = () => {
    return (
        <div className=' bg-purple-500 w-full h-[350px] flex flex-col'>
            <Container>
                <div className='bg-yellow-500 w-full h-full flex flex-row justify-center items-center'>
                    <Button btnText={"Call To Action"} />
                </div>
            </Container>
        </div>
    )
}

export default Hero