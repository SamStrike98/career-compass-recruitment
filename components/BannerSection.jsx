import React from 'react'
import Container from './Container'
import Input from './ui/Input'
import TextArea from './ui/TextArea'

const BannerSection = () => {
    return (
        <div className='bg-blue-500 h-[350px]'>
            <Container>
                <div>
                    BannerSection
                    <Input placeholder={'test'} />
                    <TextArea placeholder={'test'} resize={false} size={'md'} />
                </div>
            </Container>
        </div>
    )
}

export default BannerSection