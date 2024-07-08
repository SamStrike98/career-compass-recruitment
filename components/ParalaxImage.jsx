import React from 'react'
import Container from './Container'
import Wave from './Wave'

const ParalaxImage = () => {
    return (
        <div className='h-[350px] bg-orange-500'>
            <Wave colour="#f97316" isTop={true} />
            <Container>
                <div>
                    ParalaxImage
                </div>
            </Container>

        </div>
    )
}

export default ParalaxImage