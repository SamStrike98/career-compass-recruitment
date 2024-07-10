'use client'

import AddressSection from './AddressSection'
import ContactForm from './ContactForm'
import Container from './Container'
import Button from './Button'


const Footer = () => {
    return (
        <footer className='bg-main min-h-[500px] text-white mt-10 py-5'>
            <Container>
                <div className='flex flex-col h-full gap-10 justify-between'>
                    <div className='flex md:flex-row flex-col items-center justify-center gap-10'>
                        <ContactForm />
                        <AddressSection />
                        <div className='flex flex-col gap-4'>
                            <Button btnText={'Find Jobs'} textColor='white' color='accent' />
                            <Button btnText={'Find Candidates'} textColor='accent' color='white' />
                        </div>

                    </div>
                    <div className='w-full text-center'>
                        <p>Copyright CareerCompass © 2024 | Privacy Policy | Data Protection | Cookie Policy | Sam Strike Design</p>
                    </div>
                </div>

            </Container>
        </footer>
    )
}

export default Footer