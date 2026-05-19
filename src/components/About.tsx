import Image from 'next/image'

const About = () => {
    return (
        <section className="">
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-4">
                <div className="max-w-6xl mx-auto flex flex-col gap-20 md:gap-28 outline outline-my-black rounded-3xl p-6 bg-my-deep-black">
                    <div className="ml-4 mt-4 outline outline-my-black rounded-3xl px-4 py-2 flex gap-1.5 items-center w-max">
                        <Image src="/images/knight.png" alt="Logo" width={16} height={16} />
                        <h2 className="text-sm">Our Approach</h2>
                    </div>
                    <div className='px-5 py-2'>
                        <p className="text-lg md:text-xl lg:text-2xl text-my-gray">
                            Your website shouldn’t exist just for the sake of having one.
                            It should qualify leads, handle objections, build authority,
                            and move prospects toward action.
                            <br />
                            <br />
                            We approach every project like with this in mind,
                            Strategy first. Design second.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About