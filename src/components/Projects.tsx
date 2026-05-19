import Image from "next/image"

const Projects = () => {
    return (
        <section className="my-16 md:my-24">
            <div className="max-w-312.5 mx-auto px-4 md:px-8 lg:px-4">
                <div className="max-w-6xl mx-auto flex flex-col gap-16">
                    <h2 className="text-3xl md:text-4xl mx-auto font-semibold ">Our Past Work</h2>
                    <div className="relative overflow-clip">
                        <div className="sticky top-16 max-w-6xl mx-auto flex flex-col justify-between p-2 md:p-4 gap-16 h-72 md:h-115 rounded-t-3xl bg-my-deep-black shadow-2xl w-full">
                            <h3 className="text-center text-lg mt-6">1. Memestructures Investment App</h3>
                            <div className="flex flex-wrap gap-3 z-10 justify-center">
                                <div className="mt-4 outline outline-my-black bg-my-blacker rounded-3xl px-4 py-2 flex gap-1.5 items-center w-max">
                                    <h2 className="text-sm">Frontend</h2>
                                </div>
                                <div className="mt-4 outline outline-my-black bg-my-blacker rounded-3xl px-4 py-2 flex gap-1.5 items-center w-max">
                                    <h2 className="text-sm">Backend</h2>
                                </div>
                                <div className="mt-4 outline outline-my-black bg-my-blacker rounded-3xl px-4 py-2 flex gap-1.5 items-center w-max">
                                    <h2 className="text-sm">Automation</h2>
                                </div>
                            </div>
                            <div className="mx-auto w-full max-w-3xl rounded-t-3xl overflow-hidden absolute bottom-0 left-1/2 -translate-x-1/2">
                                <Image src="/images/project1.png" width={900} height={300} alt="" />
                            </div>
                        </div>

                        <div className="sticky top-16 max-w-6xl mx-auto flex flex-col justify-between p-2 md:p-4 gap-16 h-72 md:h-115 rounded-t-3xl bg-my-deep-black shadow-2xl w-full">
                            <h3 className="text-center text-lg mt-6">3. Alpha Media Website</h3>
                            <div className="flex flex-wrap gap-3 z-10 justify-center">
                                <div className="mt-4 outline outline-my-black bg-my-blacker rounded-3xl px-4 py-2 flex gap-1.5 items-center w-max">
                                    <h2 className="text-sm">Website Design</h2>
                                </div>
                                <div className="mt-4 outline outline-my-black bg-my-blacker rounded-3xl px-4 py-2 flex gap-1.5 items-center w-max">
                                    <h2 className="text-sm">Automation</h2>
                                </div>
                                <div className="mt-4 outline outline-my-black bg-my-blacker rounded-3xl px-4 py-2 flex gap-1.5 items-center w-max">
                                    <h2 className="text-sm">Sales Funnel</h2>
                                </div>

                            </div>
                            <div className="mx-auto w-full max-w-3xl rounded-t-3xl overflow-hidden absolute bottom-0 left-1/2 -translate-x-1/2">
                                <Image src="/images/project3.png" width={900} height={300} alt="" />
                            </div>
                        </div>
                        <div className="sticky top-16 max-w-6xl mx-auto flex flex-col justify-between p-2 md:p-4 gap-16 h-72 md:h-115 rounded-t-3xl bg-my-deep-black shadow-2xl w-full">
                            <h3 className="text-center text-lg mt-6">2. Keda Marketing Web Funnel</h3>
                            <div className="flex flex-wrap gap-3 z-10 justify-center">
                                <div className="mt-4 outline outline-my-black bg-my-blacker rounded-3xl px-4 py-2 flex gap-1.5 items-center w-max">
                                    <h2 className="text-sm">Website Design</h2>
                                </div>
                                <div className="mt-4 outline outline-my-black bg-my-blacker rounded-3xl px-4 py-2 flex gap-1.5 items-center w-max">
                                    <h2 className="text-sm">Automation</h2>
                                </div>
                            </div>
                            <div className="mx-auto w-full max-w-3xl rounded-t-3xl overflow-hidden absolute bottom-0 left-1/2 -translate-x-1/2">
                                <Image src="/images/project2.png" width={900} height={300} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Projects