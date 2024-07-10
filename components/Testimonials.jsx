'use client'

import React from 'react';
import Container from './Container';
import Card from './ui/card';
import SectionTitle from './SectionTitle';
import Slider from './Slider';

const testimonialsArr = [
    {
        id: 1,
        author: 'Sam Strike',
        text: 'This is where the review text with go...',
        borderColor: 'border-main',
        color: 'text-accent'
    },
    {
        id: 2,
        author: 'Joe Strike',
        text: 'Some more review text will go here...',
        borderColor: 'border-accent',
        color: 'text-main'
    },
    {
        id: 3,
        author: 'Paula Strike',
        text: 'I should have just generated some review text...',
        borderColor: 'border-main',
        color: 'text-accent'
    },
    {
        id: 4,
        author: 'David Strike',
        text: 'Final piece of review text will go here...',
        borderColor: 'border-accent',
        color: 'text-main'
    },
]

const Testimonials = () => {
    return (
        <div className='bg-[#f2f2f2] min-h-[500px]'>
            <Container>
                <div>
                    <SectionTitle text={'Testimonials'} color={'main'} />
                    {/* <Card /> */}
                    <Slider slides={testimonialsArr} />

                </div>
            </Container>
        </div>
    )
}

export default Testimonials;