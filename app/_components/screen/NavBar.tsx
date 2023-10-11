'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { FaXmark } from 'react-icons/fa6';

export default function NavBar() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <div className="bg-components p-5 shadow-lg w-full sticky top-0 z-50">
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-white text-2xl font-bold">BONANI</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="text-slate-600 hover:underline hover:text-slate-500">Home</Link>
                    <Link href="/products" className="text-slate-600 hover:underline hover:text-slate-500">Cake-Toppers</Link>
                    <Link href="/contact" className="text-slate-600 hover:underline hover:text-slate-500">Contact</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {isMenuVisible && (
                <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-75 z-50">
                    <div className='bg-components flex flex-col justify-between items-start w-full m-5'>
                        <div className='p-5 flex justify-between items-center w-full'>
                            <Link href="/" className="text-white text-xl font-bold">BONANI</Link>
                            <button className='text-black p-5 text-xl' onClick={() => toggleMenu()}>
                                <FaXmark />
                            </button>
                        </div>
                        <div className="border-t-2 border-white w-full my-4"></div>
                        <div className="flex flex-col justify-center items-start text-white">
                            <Link href="/" className="p-5 text-slate-600 hover:underline hover:text-slate-500" onClick={() => toggleMenu()}>Home</Link>
                            <Link href="/products" className="p-5 text-slate-600 hover:underline hover:text-slate-500" onClick={() => toggleMenu()}>Cake-Toppers</Link>
                            <Link href="/contact" className="p-5 text-slate-600 hover:underline hover:text-slate-500" onClick={() => toggleMenu()}>Contact</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}