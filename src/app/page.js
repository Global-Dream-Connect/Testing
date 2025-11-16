import BrandGuideline from "@/components/brand-guideline"
import FQI from "@/components/fqi"
import Hero from "@/components/hero"
import TestimonialCard from "@/components/testimonial-card"
import React from "react"

export default function Page(){
  return(
    <>
    {/* <div className="w-full h-20 bg-red-200">

    </div> */}
      <Hero/>
      <BrandGuideline/>
      <FQI/>
      <div className="w-full h-max p-20 bg-white inline-flex flex-col justify-start items-start gap-2.5">
        <div className="self-stretch p-20 bg-violet-200/30 rounded-[32px] inline-flex justify-center items-start gap-12 overflow-hidden">
          <div className="flex-1 flex justify-start items-start gap-12">
            <div className="flex-1 flex justify-between items-center">
              <div className="w-[787px] inline-flex flex-col justify-start items-start gap-8">
                <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                  <div className="flex-1 justify-start text-zinc-800 text-5xl font-bold font-['Plus_Jakarta_Sans'] leading-[57.60px]">Explore our free resources</div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-2.5">
                  <div className="flex-1 justify-start text-zinc-800 text-2xl font-normal font-['Poppins'] leading-8">Get a taste of what GDC has to offer with our free resources, designed to help you on your college application journey.</div>
                </div>
              </div>
              <div data-state="primary button with icon" className="size- px-7 py-5 bg-indigo-950 rounded-[9.93px] flex justify-center items-center gap-3 overflow-hidden">
                <div data-state="active" className="size- inline-flex flex-col justify-start items-start">
                  <div className="size- rounded-[84.41px] flex flex-col justify-center items-start gap-3">
                    <div className="justify-start text-white text-xl font-medium font-['Poppins'] leading-6">View Resources</div>
                  </div>
                  <div className="w-3.5 h-0 opacity-0 outline outline-[1.24px] outline-offset-[-0.62px] outline-white" />
                </div>
                <div data-svg-wrapper className="relative">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.3793 19.8622L22.3448 14.8967M22.3448 14.8967L17.3793 9.93115M22.3448 14.8967H7.44824" stroke="white" stroke-width="1.86207" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* testimonial */}
      <div className="w-full h-fit p-10">
        <TestimonialCard/>

      </div>
    </>
  )
}