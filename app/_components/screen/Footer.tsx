import { FaArrowCircleRight, FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { LiaCopyrightSolid } from 'react-icons/lia'

export default function Footer() {
    return (
        <div className="bg-components p-5 w-full flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between">
            <div className='text-sm flex items-center gap-2'>
                <LiaCopyrightSolid />
                2023
                <span className='font-extrabold'>BONANI</span>All rights reserved
            </div>
            <div className='text-2xl flex justify-start gap-5'>
                <a href="https://www.facebook.com/shop.bonani/?locale=hr_HR" target="_blank">
                    <FaFacebookSquare />
                </a>
                <a href="https://www.instagram.com/bonanicraftanddecor/" target="_blank">
                    <FaInstagramSquare />
                </a>
                <FaWhatsappSquare />
            </div>
            <div className='flex gap-2 items-center'>
                <FaArrowCircleRight />
                Made by <span className='font-extrabold text-center'>CroFrank</span>
            </div>
        </div >
    )
}