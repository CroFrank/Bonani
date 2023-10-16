import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

interface ProductCardProps {
  src: string
  title: string
  content: string
}

export default function ProductCard({ src, title, content }: ProductCardProps) {
  return (
    <div className="relative m-5 flex max-w-lg flex-col rounded-lg bg-white shadow-lg">
      <div className="h-96 w-full">
        <Image
          src={src}
          width={500}
          height={500}
          alt="product image"
          className="h-full w-full rounded-t-lg object-cover"
        />
      </div>
      <div className="p-5 pb-20">
        <h2 className="pb-3 text-center text-xl">{title}</h2>
        <p>{content}</p>
      </div>
      <div className="absolute bottom-0 right-0 flex items-center justify-end p-5 pt-5 underline hover:text-slate-400">
        <Link href="/products" className="flex items-center gap-4 ">
          Let&apos;s see
          <BsArrowRight />
        </Link>
      </div>
    </div>
  )
}
