import { FaArrowCircleRight, FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { LiaCopyrightSolid } from 'react-icons/lia'

export default function Footer() {
    return (
        <div className="bg-components p-5 w-full flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between mt-auto">
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
                <a href="https://wa.me/+385976785381?text=Hello,%20how%20can%20I%20help%20you">
                    <FaWhatsappSquare />
                </a>
            </div>
            <a href="https://crofrank.github.io/portfolio/" className='flex gap-2 items-center' target="_blank">
                <FaArrowCircleRight />
                Made by <span className='font-extrabold text-center'>CroFrank</span>
            </a>
        </div >
    )
}