'use client'

import Link from "next/link"
import Container from "./Container"
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import Image from "next/image";
import logo from "@/public/logo_large.png"

import { useState } from "react";

const links = [
    {
        id: 1,
        title: 'Find Jobs',
        link: '/'
    },
    {
        id: 2,
        title: 'Find Candidates',
        link: '/'
    },
    {
        id: 3,
        title: 'About',
        link: '/'
    },
    {
        id: 4,
        title: 'Contact',
        link: '/'
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="fixed sm:relative border-accent border-b-2 sm:border-none sm:flex w-full h-[100px] sm:h-[150px] overflow-y-hidden bg-white sm:z-10 z-50">
            <Container >
                <div className="w-full h-[150px] flex flex-col bg-white z-50">
                    <div className="flex flex-row items-center justify-between border-b-2 border-accent">
                        <Image alt='logo' height={500} width={500} src={logo} className="w-[100px] h-[100px]" />

                        <div className="sm:hidden pr-5 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <LiaTimesSolid size={30} color="#001f3f" /> : <RxHamburgerMenu size={30} color="#001f3f" />}
                        </div>
                    </div>
                    <nav className="sm:flex flex-row justify-evenly items-center w-4/5 h-[80px] hidden">
                        {links.map(item => (
                            <Link key={item.id} href={item.link} className="font-bold text-main border-transparent border-b-2 hover:border-accent">{item.title}</Link>
                        ))}
                    </nav>
                </div>


                <nav className={`fixed bg-accent text-white flex flex-col justify-evenly items-center mt-[100px] h-[300px] w-full z-40 ${isOpen ? 'translate-y-0' : '-translate-y-[400px]'} transition-all duration-600 sm:hidden`}>
                    {links.map(item => (
                        <Link key={item.id} href={item.link} className="w-full h-full flex flex-row justify-center items-center bg-accent hover:bg-main transition-all">{item.title}</Link>
                    ))}
                </nav>

            </Container>
        </header>
    )
}

export default Navbar