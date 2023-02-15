import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <header className="flex justify-between items-center border-b py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">

            <Link href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                <svg width="95" height="94" viewBox="0 0 95 94" className="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>

                Vaccine
            </Link>
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <Link href="/register" className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Signup</Link>
            </div>

            <button type="button" className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>

                Menu
            </button>
            {/* <!-- buttons - end --> */}
        </header>

    )
}

export default Navbar