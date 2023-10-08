import Button from "./Button"
import WelcomeImg from "./WelcomeImg"

export default function WelcomeCard() {
    return (
        <div className="flex flex-col sm:flex-row shadow-lg rounded-lg m-5 mt-14 p-2">
            <div className="text-center p-8 bg-white md:flex md:flex-col md:justify-between md:max-w-lg rounded-lg">
                <h1 className="capitalize text-4xl pb-7">
                    Amazing world of <span className="text-components">Cake Toppers</span>
                </h1>
                <p className="pb-10 leading-7">
                    All cake toppers are precisely designed and handmaded with special care to make <span className="text-components font-semibold">happy</span> everyone who see them.
                </p>
                <div>
                    <Button href={'/products'} content='Explore' />
                </div>
            </div>
            <WelcomeImg />
        </div>
    )
}