import Image from "next/image";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";

export default function Contact() {
    return (
        <div className='h-screen flex flex-col items-center justify-start md:flex-row md:justify-center'>
            <Image
                src='/bojki.jpg'
                width={400}
                height={400}
                alt="Bojana"
                className="p-5"
            />
            <div className="flex flex-col items-center">
                <h3 className="text-white text-3xl p-5 font-bold">Contact Us</h3>
                <div className="border-2 m-5 w-full h-auto p-3">
                    <a href="https://www.facebook.com/shop.bonani/?locale=hr_HR" target="_blank" className="py-3 text-3xl flex items-center">
                        <FaFacebookSquare />
                        <span className="text-lg px-2">Facebook page</span>
                    </a>
                    <a href="https://www.instagram.com/bonanicraftanddecor/" target="_blank" className="py-3 text-3xl flex items-center">
                        <FaInstagramSquare />
                        <span className="text-lg px-2">Instagram profile</span>
                    </a>
                    <div className="py-3 text-3xl flex items-center">
                        <FaWhatsappSquare />
                        <span className="text-lg px-2">+385 97 678 5381</span>
                    </div>
                </div>
            </div>
        </div>
    )
}