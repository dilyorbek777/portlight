import { latests, nuito, syne } from '@/constants'
import Image from 'next/image'
import React from 'react'

export default function Latest() {
    return (
        <section className='max-w-screen-2xl px-7 py-16 flex-col flex items-center justify-center mx-auto'>
            <h1 className={syne + '  text-5xl text-center !font-bold leading-[60px] max-md:text-3xl max-[512px]:text-2xl mb-16'}>Latest News &    <span className='w-max  px-2  text-primary-foreground   bg-primary'>Blogs </span> </h1>

            <div className="w-full flex items-center justify-between gap-4 max-lg:flex-col">
                <div className="flex flex-col items-start gap-8 justify-center max-md:w-full w-1/2">
                    {/* card */}
                    {latests.map((lst, i) => (
                        <div key={i} className="flex flex-col justify-center items-start gap-4 py-3 rounded-md max-w-[789px] cursor-pointer border  px-2 w-full">
                            <div className="flex items-center  gap-3 w-full">
                                <p className={nuito + ' !font-bold tracking-wide max-[470px]:text-sm'}>Posted on {lst.time}</p>
                                <div className="max-w-40 border  w-full border-foreground" />
                            </div>
                            <h4 className={'text-3xl !font-bold max-[470px]:text-xl ' + syne}>{lst.title}</h4>
                        </div>
                    ))}
                </div>
                <Image src={'/blogs.png'} width={600} height={600} alt='Blogs posts' className='w-1/2 max-md:w-full h-full' />
            </div>

        </section>
    )
}
