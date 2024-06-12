import Image from 'next/image'
import React from 'react'

export default function CE() {
  return (
    <div className='mb-16'>
     <Image src={"/hdr.png"} width={50000} height={500} alt='header ' className='w-full max-md:h-[50vh] object-cover' />
      <div className="flex w-36 mx-auto animate relative">
        {/* animate-bounce */}
      
        <svg viewBox="0 0 100 100" xmlns="hzttp://www.w3.org/2000/svg">
          <path id="circlePath" fill="none" stroke-width="4" d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        " />
          <text id="text" font-family="monospace" font-size="12" font-weight="bold" fill="var(--text-1)">
            <textPath id="textPath" href="#circlePath">Scroll down here *   Scroll down here * </textPath>
          </text>
        </svg>
      </div>
    
    </div>
  )
}
