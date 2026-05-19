import Image from "next/image"

const WhatWeDo = () => {
    return (
        <section className="bg-my-deep-black mt-16 md:mt-24 py-16 md:py-24">
            <div className="max-w-312.5 mx-auto px-4 md:px-8 lg:px-4">
                <div className="max-w-6xl mx-auto flex flex-col gap-16">
                    <h2 className="text-3xl md:text-4xl mx-auto font-semibold">What We Do For You</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="border-l-2 border-l-my-blue border-dashed flex flex-col gap-8 text-lg p-6 md:p-10 lg:p-14">
                            <div className="bg-my-blue rounded-full p-1 w-max">
                                <div className="bg-my-blacker rounded-full p-1">
                                    <div className="bg-my-blue rounded-full p-3">
                                        <Image src="/images/website.png" alt="Strategy Icon" width={35} height={35} />
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-medium text-xl">Strategic Website Development</h3>
                            <p>Conversion-focused websites designed to
                                get you leads and guide your prospects
                                from curiosity to committing to you. </p>
                        </div>
                        <div className="border-l-2 border-l-my-blue border-dashed flex flex-col gap-8 text-lg p-6 md:p-10 lg:p-14">
                            <div className="bg-my-blue rounded-full p-1 w-max">
                                <div className="bg-my-blacker rounded-full p-1">
                                    <div className="bg-my-blue rounded-full p-3">
                                        <Image src="/images/funnel.png" alt="Strategy Icon" width={35} height={35} />
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-medium text-xl">Sales Funnels & Growth Systems</h3>
                            <p>Systems that capture, qualify, and route
                                leads automatically so opportunities don’t
                                sit in your inbox. </p>
                        </div>
                        <div className="border-l-2 border-l-my-blue border-dashed flex flex-col gap-8 text-lg p-6 md:p-10 lg:p-14">
                            <div className="bg-my-blue rounded-full p-1 w-max">
                                <div className="bg-my-blacker rounded-full p-1">
                                    <div className="bg-my-blue rounded-full p-3">
                                        <Image src="/images/optimization.png" alt="Strategy Icon" width={35} height={35} />
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-medium text-xl">Sales Funnel Optimization</h3>
                            <p>Data-informed refinement of your messaging,
                                structure, and user flow to increase
                                conversion rate over time. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo