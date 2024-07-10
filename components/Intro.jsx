import React from 'react'
import Container from './Container'

import FindJobCard from './ui/FindJobCard'
import FindCandidatesCard from './ui/FindCandidatesCard'
import SectionTitle from './SectionTitle'

const Intro = () => {
    return (
        <div className='bg-[#f2f2f2] min-h-[500px]'>
            <Container>
                <div>
                    <SectionTitle text={"Let's Get Started"} color={'main'} />
                    <div className='w-full flex sm:flex-row flex-col my-5 justify-evenly items-center gap-4'>
                        <FindJobCard />
                        <FindCandidatesCard />
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Intro