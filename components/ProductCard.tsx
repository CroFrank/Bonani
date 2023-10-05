import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

interface ProductCardProps {
    src: string
    title: string
    content: string
}

export default function ProductCard({ src, title, content }: ProductCardProps) {
    return (
        <div className="flex flex-col shadow-lg rounded-lg bg-white m-5 relative max-w-lg">
            <div className='w-full h-96'>
                <Image src={src} width={700} height={700} alt="welcome image"
                    className="object-cover w-full h-full rounded-t-lg" />
            </div>
            <div className='p-5 pb-20'>
                <h2 className="text-center text-xl pb-3">{title}</h2>
                <p>{content}</p>
            </div>
            <div className='flex items-center gap-4 justify-end p-5 hover:text-slate-400 pt-5 underline absolute bottom-0 right-0'>
                Let&apos;s see
                <BsArrowRight />
            </div>
        </div>
    )
}