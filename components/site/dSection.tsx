import { dscards, marquee, nuito, procards, syne } from '@/constants'
import { ChevronRight, CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function DSection() {
    return (
        <div className='w-full bg-foreground my-16 py-16'>
            <section className='flex flex-col gap-16 items-center justify-between max-w-screen-2xl px-7 mx-auto py-7 '>
                <h1 className={syne + ' !text-background text-5xl text-center leading-[60px] max-md:text-3xl max-[512px]:text-xl'}>Unlock Revenue Growth for  <span className='w-max  px-2  text-primary   bg-primary-foreground'>Your </span> <br />  <span className='w-max  px-2  text-primary   bg-primary-foreground'>Business</span></h1>
                <div className="flex flex-wrap w-full gap-7 items-center justify-center">
                    {dscards.map((c, i) => (
                        <Link href={'#'} className={"flex flex-col w-[360px] gap-5 text-background text-xl " + nuito} key={i}>
                            <h3>Strategy</h3>
                            <Image src={c.img} alt={c.describtion} width={500} height={500} />
                            <p>{c.describtion}</p>
                            <CircleArrowRight size={50} />
                        </Link>
                    ))}
                </div>
                <div className="flex relative w-full border-b-2 border-t-2 py-2 border-secondary">
                    <div className="w-40 h-40 z-20 object-cover blur-2xl bg-[url('/hdr.png')] max-sm:hidden absolute left-0 top-0" />
                    <div className="w-40 h-40 z-20 object-cover blur-2xl bg-[url('/hdr.png')] max-sm:hidden absolute right-0 top-0" />
                    <Marquee className={'text-[117px] text-background relative max-lg:text-[90px] max-sm:text-4xl ' + syne}>
                        {marquee}

                    </Marquee>
                </div>
            </section>
            <section className='flex flex-col gap-16 items-center justify-between max-w-screen-2xl px-7 mx-auto py-7'>
                <h1 className={syne + ' !font-bold !text-background text-5xl text-center leading-[60px] max-md:text-3xl max-[512px]:text-xl'}>We Work to Craft Solid Products <br />
                    &  <span className='w-max  px-2  text-primary   bg-primary-foreground'>Project </span>For You</h1>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-32 items-center justify-center relative">
                    <div className="lrt absolute max-[465px]:h-[1700px] max-[465px]:w-[288px] w-[460px] h-[710px] top-80 left-1/2 -translate-x-1/2 opacity-50" />

                    {procards.map((pc, i) => (
                        <Link href={'#'} className={"flex flex-col max-w-[360px] odd:mt-32 even:py-3 z-10 bg-gradient-to-r from-foreground to-transparent p-1 shadow-lg gap-5 text-background text-xl " + nuito} key={i}>

                            <Image src={pc.img} alt={pc.title} width={500} height={500} />
                            <div className="px-4">
                                <p>{pc.title}</p>
                                <CircleArrowRight size={50} />
                            </div>
                        </Link>

                    ))}

                    <Link href={'#'} className={"w-40  h-40 deca flex items-center justify-center bg-background text-xl !font-bold "+nuito}>
                        See <br />
                        All Project 
                        <ChevronRight />
                    </Link>
                </div>
            </section>

        </div>
    )
}
