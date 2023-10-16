import WelcomeCard from '@/app/[locale]/_components/WelcomeCard'
import dynamic from 'next/dynamic'

const DynamicCarousel = dynamic(
  () => import('@/app/[locale]/_components/Carousel'),
  {
    ssr: false,
    loading: () => <p className="text-center text-3xl">...Loading</p>,
  }
)

export default function Home() {
  return (
    <div className="flex-grow">
      <div className="flex justify-center">
        <main className="lg:max-w-5xl">
          <WelcomeCard />
        </main>
      </div>
      <DynamicCarousel />
    </div>
  )
}
