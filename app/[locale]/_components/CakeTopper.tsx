import Image from 'next/image'

export default function CakeTopper({ src }: { src: string }) {
  return (
    <article className="w-36 border-2 md:w-44 lg:w-48md:w-44 lg:w-48">
      <div>
        <Image
          src={src}
          width={200}
          height={200}
          alt="Image of a cake-topper"
          className="w-36 md:w-44 lg:w-48 h-44 md:h-56"
        />
      </div>
      <h3 className="text-center">Čarobni sastojak svake torte</h3>
      <span>Price</span>
      <button>Povećaj</button>
    </article>
  )
}
