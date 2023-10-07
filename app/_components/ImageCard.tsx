import Image from "next/image";

interface ImageCardProps {
    src: string
    price: number
}

export default function ImageCard({ src, price }: ImageCardProps) {
    return (
        <>
            <Image
                src={src}
                width={400}
                height={400}
                alt="welcome image"
                className="object-cover w-full h-full rounded-2xl" />
            <p className="p-2 bg-white rounded-xl">price: {price}€</p>
        </>
    )
}