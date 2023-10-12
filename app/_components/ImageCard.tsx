import Image from 'next/image'

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
        className="h-full w-full rounded-2xl object-cover"
      />
      <p className="rounded-xl bg-white p-2">price: {price}€</p>
    </>
  )
}
