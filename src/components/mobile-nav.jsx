'use client'
import Link from "next/link";
import React, { useState } from "react";

const navmenu = [
    {id:1, title : 'Home', url : '#home'},
    {id:2, title : 'Features', url : '#features'},
    {id:3, title : 'Testimonials', url : '#testimonials'},
    {id:4, title : 'Blog', url : '#blog'}

]

export default function MobileNav(){
    const [openMenu, setOpenMenu] = useState(true)
    return(
        <>
            <nav className="fixed z-999 top-0 h-max border-b w-full bg-white flex items-center justify-between">
                <div className="w-full h-max relative">
                    <div className="relative w-full h-fit flex items-center justify-between px-4 pt-4 pb-2">
                    <a href="#" class="flex items-center space-x-2">
                        <div class="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl">G</div>
                    </a>
                     <div class="flex items-center space-x-4">
                        <button class="bg-brand-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-blue/90 transition-colors">Login</button>
                        <button id="hamburger-button" class="md:hidden p-2" onClick={()=>{setOpenMenu(!openMenu)}}>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>
                <div className={`absolute z-40 w-full flex flex-col justify-evenly px-8 duration-200 bg-white overflow-hidden ${openMenu?'h-36 py-2 border-b': 'h-0 py-0'}`}>
                    {navmenu.map((item)=>(
                        <Link href={item.url} key={item.id}>{item.title}</Link>
                    ))}
                </div>
                </div>
            </nav>
        </>
    )
}