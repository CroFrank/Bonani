import Image from "next/image";

export default function WelcomeImg() {
    return (
        <div className="relative pt-10 bg-white md:max-w-lg rounded-lg">
            <Image src='/welcome.svg' width={400} height={400} alt="welcome image"
                className="object-cover w-full h-full p-3" />
            <div className="absolute top-1/3 right-5 text-lg font-bold z-10 sm:text-center">
                Hi, my name  is Bojana
            </div>
        </div>
    )
}