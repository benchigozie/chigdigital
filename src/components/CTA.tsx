import Image from "next/image"
import PrimaryButton from "./PrimaryButton"

const CTA = () => {
    return (
        <section className="bg-my-deepest-black my-16 md:my-24">
            <div className="max-w-312.5 mx-auto px-4 md:px-8 lg:px-4">

                <div className="flex flex-col shadow-xl shadow-my-light-black/10 hover:shadow-my-blue/30 gap-6 max-w-6xl mx-auto bg-linear-to-r from-my-deep-black to-my-deepest-black rounded-4xl px-8 py-14 md:px-16 md:py-24 transition-all duration-300">
                    <h2 className="font-lao text-4xl md:text-6xl font-medium">
                        Ready to Build <span className="text-my-blue">Systems</span> <br /> That Convert?
                    </h2>
                    <p className="text-lg md:text-xl">Lets design a system that actually brings in revenue for you</p>
                    <div className="mt-2">
                        <PrimaryButton text="Book a Call" scrollTo="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CTA