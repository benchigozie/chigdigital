import React from 'react'

const OurProcess = () => {
    return (
        <section className="bg-my-deepest-black mt-16 md:mt-24 py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-4" >
                <h2>Our Process</h2>
                <div className='mt-14'>
                    <div className='sticky top-20 border-t border-my-black bg-my-deepest-black flex flex-col gap-16 py-10'>
                        <div>1.</div>
                        <div className='font-lao text-6xl md:text-8xl font-medium'>Design</div>
                        <div className='flex flex-col gap-4 px-1'>
                            <div className='grid grid-cols-3 gap-1 md:gap-3 w-max'>
                                <div className='outline outline-my-black rounded-full w-max px-4 py-2 text-xs md:text-sm'><p>Some Shiii</p></div>
                                <div className='outline outline-my-black rounded-full w-max px-4 py-2 text-xs md:text-sm'><p>Some Shiii</p></div>
                                <div className='outline outline-my-black rounded-full w-max px-4 py-2 text-xs md:text-sm'><p>Some Shiii</p></div>
                            </div>
                            <p>We design the strategic structure before touching visuals. </p>
                        </div>
                    </div>
                    <div className='sticky top-40 border-t border-my-black bg-my-deepest-black flex flex-col gap-16 py-10'>
                        <div>2.</div>
                        <div className='font-lao text-6xl md:text-8xl font-medium'>Build</div>
                        <div className='flex flex-col gap-4 px-1'>
                            <div className='grid grid-cols-3 gap-1 md:gap-3 w-max'>
                                <div className='outline outline-my-black rounded-full w-max px-4 py-2 text-xs md:text-sm'><p>Some Shiii</p></div>
                                <div className='outline outline-my-black rounded-full w-max px-4 py-2 text-xs md:text-sm'><p>Some Shiii</p></div>
                                <div className='outline outline-my-black rounded-full w-max px-4 py-2 text-xs md:text-sm'><p>Some Shiii</p></div>
                            </div>
                            <p>We develop performance-ready digital infrastructure.  </p>
                        </div>
                    </div>
                    <div className='sticky top-60 border-y border-my-black bg-my-deepest-black flex flex-col gap-16 py-10'>
                        <div>3.</div>
                        <div className='font-lao text-6xl md:text-8xl font-medium'>Optimize</div>
                        <div className='flex flex-col gap-4 px-1'>
                            <div className='grid grid-cols-3 gap-1 md:gap-3 w-max'>
                                <div className='outline outline-my-black rounded-full w-max px-4 py-2 text-xs md:text-sm'><p>Some Shiii</p></div>
                                <div className='outline outline-my-black rounded-full w-max px-4 py-2 text-xs md:text-sm'><p>Some Shiii</p></div>
                                <div className='outline outline-my-black rounded-full w-max px-4 py-2 text-xs md:text-sm'><p>Some Shiii</p></div>
                            </div>
                            <p>We refine based on real user behavior and data.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurProcess