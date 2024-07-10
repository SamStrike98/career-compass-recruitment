import React from 'react'
import Container from './Container'
import Input from './ui/Input'
import TextArea from './ui/TextArea'
import SectionTitle from './SectionTitle'
import JobCard from './JobCard'
import Button from './Button'

const jobs = [
    {
        id: 1,
        title: 'Accounts Assistant',
        salary: '£25,000',
        location: 'Colchester',
        color: 'main',
    },
    {
        id: 2,
        title: 'Web Developer',
        salary: '£60,000',
        location: 'Colchester',
        color: 'accent'
    },
    {
        id: 3,
        title: 'Financial Accountant',
        salary: '£55,000',
        location: 'Ipswich',
        color: 'main'
    },
    {
        id: 4,
        title: 'Director of Operations',
        salary: '£75,000',
        location: 'Clacton',
        color: 'accent'
    },
    {
        id: 5,
        title: 'Postman',
        salary: '£25,000',
        location: 'Manningtree',
        color: 'main'
    },
    {
        id: 6,
        title: 'Hotel Manager',
        salary: '£30,000',
        location: 'Colchester',
        color: 'accent'
    }
]

const FeaturedJobs = () => {
    return (
        <div className='text-main min-h-[500px] bg-white py-5'>
            <Container>
                <div className='flex flex-col items-center'>
                    <SectionTitle text={'Featured Jobs'} color={'main'} />

                    <ul className='flex flex-row flex-wrap justify-evenly gap-3 my-10'>
                        {jobs.map(job => (
                            <JobCard key={job.id} title={job.title} salary={job.salary} location={job.location} color={job.color} />
                        ))}
                    </ul>

                    <Button btnText={'All Jobs'} textColor='white' />
                </div>
            </Container>
        </div>
    )
}

export default FeaturedJobs