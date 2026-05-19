import HeroScene from "./HeroScene"
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"

const Hero = () => {
    return (
        <section className="mt-16  px-4 md:px-8 lg:px-4 min-h-[70vh] md:min-h-[80vh] flex py-10 md:py-0 items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-6 max-w-6xl mx-auto">
                <div className="flex flex-col gap-6 w-full my-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-lao text-my-white leading-tight">
                        Strategic <span className="text-my-blue">Websites</span> for Businesses Ready to Scale
                    </h1>
                    <p className="text-lg md:text-xl text-my-gray max-w-2xl -mt-1">
                        We Build Digital Systems That Convert Attention Into Revenue.
                    </p>
                    <div className="mt-2 flex gap-2 text-[15px] md:text-base md:gap-4">
                        <PrimaryButton text="Book a Call" scrollTo="" />
                        <SecondaryButton text="View Our Work" scrollTo="" />
                    </div>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                   <HeroScene />
                </div>
            </div>
        </section>
    )
}

export default Hero