import React from 'react'
import Container from './Container'
import Wave from './Wave'
import Card from './ui/Card'

const Intro = () => {
    return (
        <div className='bg-white'>
            <Container>
                <div className='w-full flex sm:flex-row flex-col my-5 justify-evenly '>
                    <Card />
                    <Card />
                </div>
            </Container>
        </div>
    )
}

export default Intro