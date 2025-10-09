import React from "react";
import { NavigationMenu, NavigationMenuLink } from "./ui/navigation-menu";
import { NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import MobileNav from "./mobile-nav";

const navmenu = [
    {id:1, title : 'Home', url : '#home'},
    {id:2, title : 'Features', url : '#features'},
    {id:3, title : 'Testimonials', url : '#testimonials'},
    {id:4, title : 'Blog', url : '#blog'}

]

export default function Navigation(){
    return(
        <>
            <NavigationMenu className={'fixed top-0 z-999 text-neutral-600 bg-white w-full h-fit border-b py-4 justify-start hidden md:flex'}>
                <NavigationMenuList className="w-screen h-12 flex-row items-center px-10 flex">
                    <NavigationMenuItem>
                        <a href={'#home'}>
                            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl">G</div>
                        </a>
                    </NavigationMenuItem>
                    <div className="w-full flex-1 h-full flex justify-center gap-2 items-center">
                        {navmenu.map((item)=>(
                            <NavigationMenuLink key={item.id} asChild>
                                <Link href={item.url} className="scroll-smooth text-lg font-sans-serif">{item.title}</Link>
                            </NavigationMenuLink>
                        ))}
                    </div>
                    <NavigationMenuItem>
                        <div className="flex items-center space-x-4">
                            <button className="bg-brand-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-blue/90 transition-colors">Login</button>
                            <button id="hamburger-button" className="md:hidden p-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                            </button>
                        </div>
                    </NavigationMenuItem>
                </NavigationMenuList>

            </NavigationMenu>

            <MobileNav/>
        </>
    )
}