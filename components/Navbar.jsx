'use client'

import Link from "next/link"
import Container from "./Container"
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";

import { useState } from "react";

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

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="bg-blue-500 h-[80px]">
            <Container >
                <div className="fixed sm:absolute bg-green-500 flex flex-row justify-between items-center w-full h-[80px] z-50">
                    <div className="w-[150px] bg-purple-500 flex flex-row justify-center text-white">Logo</div>
                    <nav className=" sm:flex flex-row justify-evenly items-center w-1/2  h-[80px] hidden">
                        {links.map(item => (
                            <Link key={item.id} href={item.link}>{item.title}</Link>
                        ))}
                    </nav>
                    <div className="sm:hidden pr-5 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <LiaTimesSolid size={30} color="white" /> : <RxHamburgerMenu size={30} color="white" />}
                    </div>

                </div>
                <nav className={`fixed bg-orange-500 text-white flex flex-col justify-evenly items-center mt-[80px] h-[300px] w-full z-40 ${isOpen ? 'translate-y-0' : '-translate-y-[300px]'} transition-all duration-300 sm:hidden`}>
                    {links.map(item => (
                        <Link key={item.id} href={item.link} className="w-full h-full flex flex-row justify-center items-center hover:bg-orange-300 ">{item.title}</Link>
                    ))}
                </nav>

            </Container>
        </header>
    )
}

export default Navbar