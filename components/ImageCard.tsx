import Image from "next/image";

export default function ImageCard({ src }: { src: string }) {
    return (
        <div className='w-80 h-80'>
            <Image
                src={src}
                width={400}
                height={400}
                alt="welcome image"
                className="object-cover w-full h-full rounded-2xl" />
            <p>price: 20€</p>
        </div>
    )
}