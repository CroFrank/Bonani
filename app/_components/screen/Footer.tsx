import {
  FaArrowCircleRight,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from 'react-icons/fa'
import { LiaCopyrightSolid } from 'react-icons/lia'

export default function Footer() {
  return (
    <div className="mt-auto flex w-full flex-col items-center justify-center gap-3 bg-components p-5 md:flex-row md:justify-between">
      <div className="flex items-center gap-2 text-sm">
        <LiaCopyrightSolid />
        2023
        <span className="font-extrabold">BONANI</span>All rights reserved
      </div>
      <div className="flex justify-start gap-5 text-2xl">
        <a
          href="https://www.facebook.com/shop.bonani/?locale=hr_HR"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.instagram.com/bonanicraftanddecor/"
          target="_blank"
        >
          <FaInstagramSquare />
        </a>
        <a href="https://wa.me/+385976785381?text=Hello,%20how%20can%20I%20help%20you">
          <FaWhatsappSquare />
        </a>
      </div>
      <a
        href="https://crofrank.github.io/portfolio/"
        className="flex items-center gap-2"
        target="_blank"
      >
        <FaArrowCircleRight />
        Made by <span className="text-center font-extrabold">CroFrank</span>
      </a>
    </div>
  )
}
