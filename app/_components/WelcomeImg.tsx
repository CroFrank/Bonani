import Image from 'next/image'

export default function WelcomeImg() {
  return (
    <div className="relative rounded-lg bg-white pt-10 md:max-w-lg">
      <Image
        src="/welcome.svg"
        width={400}
        height={400}
        alt="welcome image"
        className="h-full w-full object-cover p-3"
      />
      <div className="absolute right-5 top-1/3 z-10 text-lg font-bold sm:text-center">
        Hi, my name is Bojana
      </div>
    </div>
  )
}
