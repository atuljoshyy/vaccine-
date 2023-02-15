import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'

const customer = () => {
    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="flex flex-col items-center gap-4 md:gap-6">
                        <div href="#" className="flex items-center text-blue-400 hover:text-blue-500 active:text-gray-600 transition duration-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                            <p className='text-4xl'>Vaccinated</p>

                        </div>

                        <div className="max-w-md text-gray-600 lg:text-lg text-center">You are fully vaccinated and you are safe to travel</div>

                        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">

                            <div>
                                <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">Pfizer, 2020-12-11</p>
                            </div>
                        </div>
                        <Link href="/" className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Back to home</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default customer