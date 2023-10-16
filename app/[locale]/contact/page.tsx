import Image from 'next/image'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:flex-grow lg:h-0">
      <div className="bg-gradient-to-b from-slate-50 to-slate-300 flex flex-col flex-grow items-center justify-start py-10 w-full md:justify-center lg:w-1/2 lg:h-full">
        <Image
          src="/bojki.jpg"
          width={400}
          height={400}
          alt="Bojana"
          className="p-5"
          priority={true}
        />
        <div className="flex flex-col items-center border-2 p-3 m-3">
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
      <div className="bg-gradient-to-t from-slate-50 to-slate-300 h-96 w-full px-5 py-10 lg:h-full lg:w-1/2 lg:py-20 lg:px-10">
        <h2 className="font-bold text-4xl pb-5">Here we are:</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.993189419979!2d15.936664477228582!3d45.79136417108132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6bca7fc8327%3A0xe69d0c38e321e577!2sHe%C4%87imovi%C4%87eva%20ul.%203%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1697138750282!5m2!1shr!2shr"
          width="100%"
          height="100%"
          loading="lazy"
          className="pb-10"
        ></iframe>
      </div>
    </div>
  )
}
