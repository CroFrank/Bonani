import { Button } from './Button'
import WelcomeImg from './WelcomeImg'

export default function WelcomeCard() {
  return (
    <div className="m-5 mt-14 flex flex-col rounded-lg p-2 shadow-lg sm:flex-row">
      <div className="rounded-lg bg-white p-8 text-center md:flex md:max-w-lg md:flex-col md:justify-between">
        <h1 className="pb-7 text-4xl capitalize">
          Amazing world of <span className="text-components">Cake Toppers</span>
        </h1>
        <p className="pb-10 leading-7">
          All cake toppers are precisely designed and handmaded with special
          care to make
          <span className="font-semibold text-components">happy</span> everyone
          who see them.
        </p>
        <div>
          <Button href={'/products'} content="Explore" />
        </div>
      </div>
      <WelcomeImg />
    </div>
  )
}
