import React from 'react'
import Container from './Container'
import Wave from './Wave'
import CardDesign from './ui/CardDesign'
import Button from './Button'
import SectionTitle from './SectionTitle'


const whyUs = [
    {
        id: 1,
        color: 'accent',
        title: 'Personalised Service',
        text: 'Career Compass offers tailored recruitment solutions, taking the time to understand your unique skills and career goals. This ensures a perfect match and high-quality care throughout your job search.',
    },
    {
        id: 2,
        color: 'accent',
        title: 'Specialised Expertise',
        text: 'We excel in Healthcare, Commercial, Industrial, and Driving sectors. Our in-depth knowledge and robust network in these fields connect candidates with the best opportunities and employers with top talent.',
    },
    {
        id: 3,
        color: 'accent',
        title: 'Transparent and Fair Pricing',
        text: 'With a competitive 12% fee and no upfront costs, Career Compass provides a professional and personable service. No hidden fees, no unvetted candidates—just straightforward and trustworthy recruitment.',
    },

]

const WhyChooseUs = () => {

    return (
        <div className='bg-main text-white min-h-[500px] py-5'>
            <Container>
                <div>
                    <SectionTitle text={'Why Choose Us?'} color={'white'} />

                    <ul className='flex flex-col lg:flex-row  justify-evenly w-full gap-3 my-8'>
                        {whyUs.map(item => (
                            <CardDesign key={item.id} color={item.color} title={item.title} text={item.text} />
                        ))}
                    </ul>
                </div>
                <Button btnText={'More Info'} color='white' textColor='main' />
            </Container>
        </div>
    )
}

export default WhyChooseUs