import React from 'react'
import Container from './Container'
import Button from './Button'

const Hero = () => {
    return (
        <div className="w-full pt-[100px] sm:pt-[0px] h-[350px] flex flex-col bg-[url('../public/banner_img.jpg')] bg-center bg-cover bg-blend-multiply bg-accent">
            <Container>
                <div className='w-full h-full flex flex-row justify-center items-center'>
                    <h3 className='font-bold text-accent text-4xl bg-main p-4 rounded-md'>
                        Your Path to Opportunity
                    </h3>
                </div>
            </Container>
        </div>
    )
}

export default Hero