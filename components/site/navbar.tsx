"use client"

import { navlink, nuito, syne } from '@/constants'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <div className='max-w-screen-2xl max-md:top-0 bg-background/50 rounded-md z-50 backdrop-blur-lg px-7 flex items-center justify-between fixed w-full left-1/2 -translate-x-1/2 top-7 shadow-secondary border-b py-5 mx-auto'>
            <Link href={'/'}>
                <h1 className={syne + ' w-max text-primary-foreground underline underline-offset-2 text-4xl p-1 rounded-md bg-primary'}>Portlight</h1>
            </Link>
            <div className={open ? "flex flex-col -z-10 max-md:flex absolute w-full left-0 top-0 h-screen items-center justify-center gap-5 text-2xl bg-background/70" : "flex items-center gap-10 max-md:hidden"}>
                {navlink.map((link, i) => (
                    <Link onClick={() => setOpen(false)}     key={i} href={link.link} className={nuito + ' text-lg !font-black'}>{link.name}</Link>
                ))}
            </div>
            <Button aria-label="Menu" className='max-md:flex hidden' onClick={()=>setOpen(!open)}><Menu /></Button>
        </div>
    )
}
