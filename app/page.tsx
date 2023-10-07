import WelcomeCard from "@/app/_components/WelcomeCard";
import dynamic from "next/dynamic";

const DynamicCarousel = dynamic(() => import("@/app/_components/Carousel"), {
  ssr: false,
  loading: () => <p className="text-3xl text-center">...Loading</p>
})

export default function Home() {
  return (
    <div className="gradient-bg">
      <div className="flex justify-center">
        <main className="lg:max-w-5xl">
          <WelcomeCard />
        </main>
      </div>
      <DynamicCarousel />
    </div>
  )
}
