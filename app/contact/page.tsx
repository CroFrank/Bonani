import Image from 'next/image'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from 'react-icons/fa'

import { Map } from './map'

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-start py-10 md:flex-row md:justify-center">
        <Image
          src="/bojki.jpg"
          width={400}
          height={400}
          alt="Bojana"
          className="p-5"
          priority={true}
        />
        <div className="flex flex-col items-center border-2 p-3">
          <h3 className="px-5 text-3xl font-bold text-white">Contact Us</h3>
          <div className="m-5 h-auto w-full border-2 bg-slate-200 p-3">
            <a
              href="https://www.facebook.com/shop.bonani/?locale=hr_HR"
              target="_blank"
              className="flex items-center py-3 text-3xl"
            >
              <FaFacebookSquare />
              <span className="px-2 text-lg">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/bonanicraftanddecor/"
              target="_blank"
              className="flex items-center py-3 text-3xl"
            >
              <FaInstagramSquare />
              <span className="px-2 text-lg">Instagram profile</span>
            </a>
            <div className="flex items-center py-3 text-3xl">
              <FaWhatsappSquare />
              <span className="px-2 text-lg">+385 97 678 5381</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 w-full p-5 md:max-w-2xl">
        <Map />
      </div>
    </div>
  )
}
