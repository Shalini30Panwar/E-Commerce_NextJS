import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-stone-200 shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={"/Cartlogo.png"} width={50} height={50} alt="cartlogo" className="h-8" style={{ width: 'auto', height: 'auto' }} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-Commerce</span>
                    </Link>
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">E-Commerce™</Link>. All Rights Reserved.</span>
                </div>
            </div>
        </footer>

        // FAST_REFRESH=false 
    )
}
