import { header, nuito, subHeader, syne } from '@/constants'
import { Asterisk, CircleArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'



export default function Hero() {
    return (
        <div className='max-w-screen-2xl px-7 min-h-[80vh] flex items-center justify-center mx-auto'>

            <div className="space-y-7 flex flex-col justify-center items-center">
                <h2 className={'text-[100px] !font-extrabold text-center max-md:text-6xl max-[515px]:text-4xl    ' + syne}><span className='flex items-center justify-center'>Take it to </span> the <span className=" bg-[url('/hdr.png')] bg-clip-text text-transparent bg-cover">Creative</span> level</h2>
                <p className={nuito + ' text-2xl max-md:text-xl max-w-xl text-center max-[515px]:text-base'}>{subHeader}</p>
                <Button className='flex items-center justify-center gap-2 max-[515px]:text-sm'>Say Hello <CircleArrowRight /></Button>
               
            </div>

        </div>
    )
}
