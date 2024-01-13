import WelcomeCard from '@/app/[locale]/_components/Banner'

import Banner from './_components/Banner'
import CakeToppers from './_components/CakeToppers'
import Carousel from './_components/Carousel'
import Featured from './_components/Featured'

export default function Home() {
  return (
    <div className="flex-grow container mx-auto border-2">
      <div className="flex justify-center">
        <main className="lg:max-w-5xl">
          <Banner />
        </main>
      </div>
      {/* <Carousel /> */}
      <Featured />
    </div>
  )
}
