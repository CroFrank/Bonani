import Image from "next/image";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";

export default function Contact() {

    return (
        <div className="flex flex-col items-center">
            <div className='flex flex-col items-center justify-start md:flex-row md:justify-center py-10'>
                <Image
                    src='/bojki.jpg'
                    width={400}
                    height={400}
                    alt="Bojana"
                    className="p-5"
                    priority={true}
                />
                <div className="flex flex-col items-center border-2 p-3">
                    <h3 className="text-white text-3xl px-5 font-bold">Contact Us</h3>
                    <div className="border-2 m-5 w-full h-auto p-3 bg-slate-200">
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
            <div className="w-full h-96 p-5 md:max-w-2xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.993189419981!2d15.936664475472483!3d45.79136417108115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6bca7fc8327%3A0xe69d0c38e321e577!2zSGXEh2ltb3ZpxIdldmEgdWwuIDM!5e0!3m2!1shr!2shr!4v1697044118410!5m2!1shr!2shr"
                    width="100%" height="100%" loading="lazy"></iframe>
            </div>
        </div >
    )
}