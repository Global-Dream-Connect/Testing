"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import RouteBtn from "./routeBtn";
import Link from "next/link";

export default function Header1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#e8dfd3]/95 backdrop-blur-md border-[#1a2b4a]/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start gap-6 h-16">
          {/* Logo */}
          <Logo/>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#1a2b4a] hover:text-[#1a2b4a]/70 font-medium transition-colors">
              Home
            </Link>
            
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-auto">
            <RouteBtn link={'/join'} className={'bg-brand-yellow hover:bg-brand-yellow/70 hover:cursor-pointer text-brand-blue font-semibold rounded-full'}>
              Join Us
            </RouteBtn>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1a2b4a] ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#1a2b4a]/10 border-b">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-[#1a2b4a] hover:text-[#1a2b4a]/70 font-medium py-2">
                Home
              </Link>
              
              <RouteBtn link={'/join'} className={'w-fit bg-brand-yellow hover:bg-brand-yellow/70 hover:cursor-pointer text-brand-blue font-semibold rounded-full'}>
                Join Us
              </RouteBtn>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}