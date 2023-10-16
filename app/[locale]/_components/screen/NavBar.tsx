'use client'

import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'

export const locales = ['en', 'hr'] as const

export const { Link } = createSharedPathnamesNavigation({ locales })

export default function NavBar({ lang }: { lang: string }) {
  const [isMenuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible)
  }

  return (
    <div className="sticky top-0 z-50 w-full bg-components p-5 shadow-lg">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            BONANI
          </Link>
        </div>
        <div className="hidden space-x-4 md:flex">
          <Link
            href="/"
            className="text-slate-600 hover:text-slate-500 hover:underline"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-slate-600 hover:text-slate-500 hover:underline"
          >
            Cake-Toppers
          </Link>
          <Link
            href="/contact"
            className="text-slate-600 hover:text-slate-500 hover:underline"
          >
            Contact
          </Link>
          <div>
            <button
              className={
                lang === 'en'
                  ? 'font-bold text-slate-700 hover:text-slate-500 hover:underline'
                  : 'text-slate-600 hover:text-slate-500 hover:underline'
              }
            >
              <Link href="/" locale="en">
                EN
              </Link>
            </button>
            /
            <button
              className={
                lang === 'hr'
                  ? 'font-bold text-slate-700 hover:text-slate-500 hover:underline'
                  : 'text-slate-600 hover:text-slate-500 hover:underline'
              }
            >
              <Link href="/" locale="hr">
                HR
              </Link>
            </button>
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {isMenuVisible && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-75">
          <div className="m-5 flex w-full flex-col items-start justify-between bg-components">
            <div className="flex w-full items-center justify-between p-5">
              <Link href="/" className="text-xl font-bold text-white">
                BONANI
              </Link>
              <button
                className="p-5 text-xl text-black"
                onClick={() => toggleMenu()}
              >
                <FaXmark />
              </button>
            </div>
            <div className="my-4 w-full border-t-2 border-white"></div>
            <div className="flex flex-col items-start justify-center text-white">
              <Link
                href="/"
                className="p-5 text-slate-600 hover:text-slate-500 hover:underline"
                onClick={() => toggleMenu()}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="p-5 text-slate-600 hover:text-slate-500 hover:underline"
                onClick={() => toggleMenu()}
              >
                Cake-Toppers
              </Link>
              <Link
                href="/contact"
                className="p-5 text-slate-600 hover:text-slate-500 hover:underline"
                onClick={() => toggleMenu()}
              >
                Contact
              </Link>
              <div className="p-5 text-slate-600">
                <button
                  className={
                    lang === 'en'
                      ? 'font-bold  text-slate-700 hover:text-slate-500 hover:underline'
                      : ' text-slate-600 hover:text-slate-500 hover:underline'
                  }
                >
                  <Link href="/" locale="en">
                    EN
                  </Link>
                </button>
                /
                <button
                  className={
                    lang === 'hr'
                      ? 'font-bold  text-slate-700 hover:text-slate-500 hover:underline'
                      : ' text-slate-600 hover:text-slate-500 hover:underline'
                  }
                >
                  <Link href="/" locale="hr">
                    HR
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
