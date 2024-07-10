'use client'

import { useState } from 'react'
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from "react-icons/md";
import { VscDebugBreakpointData, VscDebugBreakpointDataUnverified } from "react-icons/vsc";
{/* <MdOutlineArrowCircleLeft /> */ }
{/* <MdOutlineArrowCircleRight /> */ }

// const slides = [
//     {
//         url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
//     },
//     {
//         url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
//     },
//     {
//         url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
//     },

//     {
//         url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
//     },
//     {
//         url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
//     },
// ];

const Slider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentSlide === 0;
        const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide)
    }

    const nextSlide = () => {
        const isLastSlide = currentSlide === slides.length - 1;
        const newSlide = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide)
    }


    return (
        <div className='max-w-[1000px] h-[300px] w-full m-auto pb-12 px-4 relative group'>
            <div className={`w-[300px] h-full flex flex-col justify-between rounded-md bg-center bg-cover duration-500 shadow-2xl border-t-[12px] ${slides[currentSlide].borderColor} p-5`}>
                <p className='text-main font-light text-lg'>{slides[currentSlide].text}</p>
                <p className={` font-bold text-xl ${slides[currentSlide].color}`}>{slides[currentSlide].author}</p>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={prevSlide}>
                <MdOutlineArrowCircleLeft />
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={nextSlide}>
                <MdOutlineArrowCircleRight />
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => setCurrentSlide(slideIndex)} className='text-2xl cursor-pointer text-main'>
                        {currentSlide === slideIndex ? <VscDebugBreakpointData fill='#bc9c22' /> : <VscDebugBreakpointDataUnverified fill='#bc9c22' />}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider