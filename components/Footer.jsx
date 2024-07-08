'use client'

import Container from './Container'
import Link from 'next/link'

const links = [
    {
        id: 1,
        title: 'title1',
        link: '/'
    },
    {
        id: 2,
        title: 'title2',
        link: '/'
    },
    {
        id: 3,
        title: 'title3',
        link: '/'
    },
    {
        id: 4,
        title: 'title4',
        link: '/'
    },
    {
        id: 5,
        title: 'title5',
        link: '/'
    },
]

const Footer = () => {
    return (
        <footer className='bg-green-500 h-[250px]'>
            <Container>
                <div className='flex flex-col w-1/2 h-[250px] items-center justify-center gap-10'>
                    <ul className='w-full flex flex-row justify-evenly'>
                        {
                            links.map(item => (
                                <Link key={item.id} href={item.link}>{item.title}</Link>
                            ))
                        }
                    </ul>

                    <div className='w-full text-center'>
                        <p>Copyright - Sam Strike Design</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer