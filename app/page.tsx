import Carousel from "@/components/Carousel";
import WelcomeImg from "@/components/WelcomeImg";

export default function Home() {
  return (
    <div className="gradient-bg">
      <div className="flex justify-center">
        <main className="lg:max-w-5xl">
          <section className="flex flex-col sm:flex-row shadow-lg rounded-lg m-5">
            <div className="text-center p-5 bg-white md:flex md:flex-col md:justify-between md:max-w-lg rounded-lg">
              <h1 className="capitalize text-4xl pb-7">
                Amazing world of <span className="text-components">Cake Toppers</span>
              </h1>
              <p className="pb-10 leading-7">
                All cake toppers are precisely designed and handmaded with special care to make happy everyone who see them.
              </p>
              <div>
                <button className=" border-2 border-components hover:text-white hover:bg-components text-components font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                  Explore
                </button>
              </div>
            </div>
            <WelcomeImg />
          </section>
        </main>
      </div>
      <Carousel />
    </div>
  )
}