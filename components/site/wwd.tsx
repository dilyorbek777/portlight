import { nuito, syne } from '@/constants'
import React from 'react'
import { Button } from '../ui/button'
import { CircleArrowRight } from 'lucide-react'

export default function Wwd() {
    return (
        <div className='flex max-md:flex-col gap-7 max-md:items-center  items-start justify-between max-w-screen-2xl px-7 mx-auto py-7 my-16'>
            <h1 className={'text-5xl !font-extrabold w-1/2 max-md:w-full max-[424px]:text-3xl ' + syne}>What <span className='w-max rounded px-2  text-primary-foreground  p-1  bg-primary'>we do</span></h1>
            <div className={"flex w-1/2 max-md:w-full max-[424px]:text-base max-w-lg text-2xl items-start justify-center flex-col " + nuito}>
                <p>  High-end digital experiences.
                    Created
                    at the heart of Manhattan,
                    we are a should human team.</p>
                <br />
                <p>

                    The driving force of all speeches, we believe that creation should be the point around which any strategy revolves.
                </p>


                <Button className='flex items-center justify-center gap-2 font-bold tracking-wider my-7'>See Our Process <CircleArrowRight /></Button>
            </div>
        </div>
    )
}
