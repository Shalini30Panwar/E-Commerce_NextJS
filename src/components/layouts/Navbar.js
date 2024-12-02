import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CartContext } from '@/utils/ContextReducer'

export default function Navbar() {
    const {state}=useContext(CartContext)
    let totalItems = state.reduce((total, item) => total + item.quantity, 0);
    return (
        <nav className="bg-stone-200 shadow dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={"/Cartlogo.png"} width={50} height={50} alt="cartlogo" className="h-8" style={{ width: 'auto', height: 'auto' }} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-Commerce</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link href="/cart" className="text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 inline-flex items-center space-x-2">
                        Cart 
                        <svg className="h-4 w-4 text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{totalItems}</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
