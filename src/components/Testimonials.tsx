import Image from "next/image"

const Testimonials = () => {
    return (
        <section className="bg-my-deepest-black my-16 md:my-24">
            <div className="max-w-312.5 mx-auto px-4 md:px-8 lg:px-4">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] max-w-6xl mx-auto gap-16 relative overflow-clip">
                    <div className="sticky top-20 flex flex-col gap-8 md:gap-12 lg:gap-16 h-max">
                        <div className="mt-4 outline outline-my-black rounded-3xl px-4 py-2 flex gap-1.5 items-center w-max">
                            <Image src="/images/knight.png" alt="Logo" width={16} height={16} />
                            <h2 className="text-sm">Testimonials</h2>
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-7xl mx-auto font-lao font-mediun">What Our <br /><span className="font-semibold">Clients</span> Say</h2>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div>
                                <p className="text-5xl md:text-7xl font-lao font-medium">
                                    4
                                </p>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <p className="text-5xl md:text-7xl font-lao font-medium">
                                    5+
                                </p>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="sticky top-20 bg-my-deep-black rounded-2xl p-6 md:p-10 flex flex-col gap-6">
                            <div className="w-20 h-20 rounded-xl bg-my-blue"></div>
                            <p>Really love the shii that happened and shii. Great type
                            shii. Ain’t no shi shitter.</p>
                            <p className="text-my-blue">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                        </div>
                        <div className="sticky top-20 bg-my-deep-black rounded-2xl p-6 md:p-10 flex flex-col gap-6">
                            <div className="w-20 h-20 rounded-xl bg-my-blue"></div>
                            <p>Really love the shii that happened and shii. Great type
                            shii. Ain’t no shi shitter.</p>
                            <p className="text-my-blue">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                        </div>
                        <div className="sticky top-20 bg-my-deep-black rounded-2xl p-6 md:p-10 flex flex-col gap-6">
                            <div className="w-20 h-20 rounded-xl bg-my-blue"></div>
                            <p>Really love the shii that happened and shii. Great type
                            shii. Ain’t no shi shitter.</p>
                            <p className="text-my-blue">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                        </div>
                        <div className="sticky top-20 bg-my-deep-black rounded-2xl p-6 md:p-10 flex flex-col gap-6">
                            <div className="w-20 h-20 rounded-xl bg-my-blue"></div>
                            <p>Really love the shii that happened and shii. Great type
                            shii. Ain’t no shi shitter.</p>
                            <p className="text-my-blue">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                        </div>
                        <div className="sticky top-20 bg-my-deep-black rounded-2xl p-6 md:p-10 flex flex-col gap-6">
                            <div className="w-20 h-20 rounded-xl bg-my-blue"></div>
                            <p>Really love the shii that happened and shii. Great type
                            shii. Ain’t no shi shitter.</p>
                            <p className="text-my-blue">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials