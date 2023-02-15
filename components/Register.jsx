import React, { useState } from 'react'
import Link from 'next/link'
import userInfo from '@/data/userInfo'

const Register = () => {
    const [email, setEmail] = useState('')
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (email === 'customer@vaccine.com') {
            window.location.href = '/customer'
        }
        else if (email === 'verifier@vaccine.com') {
            window.location.href = '/verify'
        }
        else if (email === 'manufacturer@vaccine.com') {
            window.location.href = '/manufacturer'
        }
    }
    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                    <p className="mt-4 text-gray-500">
                        Welcome to the future of vaccine distribution! Our cutting-edge blockchain technology is revolutionizing the way vaccines are being transported and tracked across the globe.
                    </p>
                </div>

                <form onSubmit={handleFormSubmit} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div>
                        <label for="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label for="password" className="sr-only">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <p className='pt-5 text-gray-500 font-semibold'>Select your role</p>
                    <div className="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manufacturer</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Verifier</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Customer</label>
                    </div>


                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            Have an account?
                            <Link href='/login' className="underline">Login</Link>
                        </p>

                        <button
                            type="submit"
                            className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt="Welcome"
                    src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </section>

    )
}

export default Register