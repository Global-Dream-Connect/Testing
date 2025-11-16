import Image from "next/image";
import React from "react";

export default function Hero(){
    return(
        <>
                <div className="w-full h-screen inline-flex flex-col justify-start items-start">
  <div className="w-full flex px-20 py-12 relative justify-start items-center gap-20 overflow-hidden">
    <div className="w-1/2 flex justify-start items-center gap-16">
      <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-20">
        <div className="self-stretch flex flex-col justify-start items-start gap-12">
          <div className="self-stretch flex flex-col justify-start items-start gap-12">
            <div className="w-full flex flex-col justify-start items-start gap-6">
              <div className="w-full px-6 py-4 bg-indigo-950/5 rounded-[32px] inline-flex justify-center items-center gap-2.5">
                <div data-svg-wrapper className="relative">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4M16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 14.4241 4.31039 12.8637 4.91345 11.4078C5.5165 9.95189 6.40042 8.62902 7.51472 7.51472C8.62902 6.40042 9.95189 5.5165 11.4078 4.91345C12.8637 4.31039 14.4241 4 16 4M16 28C19.6813 28 21.2547 21.116 21.2547 16C21.2547 10.884 19.6813 4 16 4M16 28C12.3187 28 10.7453 21.116 10.7453 16C10.7453 10.884 12.3187 4 16 4M4.66667 12H27.3333M4.66667 20H27.3333" stroke="#2E476B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div className="text-center justify-start text-slate-700 text-xl font-medium font-['Poppins'] leading-7">Connecting Dreams Globally</div>
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-8">
                <div className="w-[814px] relative inline-flex justify-start items-start gap-2.5">
                  <div className="flex-1 justify-start text-zinc-800 text-6xl font-bold font-['Plus_Jakarta_Sans'] leading-[76.80px]">Dream Big, Connect <br/> Globally, <span className="text-blue-500">Achieve More</span> </div>
                  {/* <div className="h-20 left-[291px] top-[77px] inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
                    <div className="w-96 left-[4.50px] top-0 absolute justify-start text-blue-500 text-6xl font-bold font-['Plus_Jakarta_Sans'] leading-[76.80px]">Achieve More</div>
                    <div className="w-96 left-[4.50px] top-[87px] absolute justify-start text-yellow-300 text-6xl font-bold font-['Plus_Jakarta_Sans'] leading-[76.80px]">Do More</div>
                    <div className="left-0 top-[174px] absolute justify-start text-violet-200 text-6xl font-bold font-['Plus_Jakarta_Sans'] leading-[76.80px]">Become More</div>
                    <div className="w-96 left-[4.50px] top-[261px] absolute justify-start text-blue-500 text-6xl font-bold font-['Plus_Jakarta_Sans'] leading-[76.80px]">Achieve More</div>
                  </div> */}
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-2.5">
                  <div className="flex-1 justify-start text-neutral-500 text-2xl font-normal font-['Poppins'] leading-8">At GDC, we connect ambitious teenagers with mentors and professors from the very universities they dream of attending.</div>
                </div>
              </div>
            </div>
            <div className="w-[462px] inline-flex justify-start items-start gap-5">
              <div data-state="primary button with icon" className="w-[462px] px-7 py-5 bg-indigo-950 rounded-[9.60px] flex justify-center items-center gap-3 overflow-hidden">
                <div data-state="active" className="size- inline-flex flex-col justify-start items-start">
                  <div className="size- rounded-[81.60px] flex flex-col justify-center items-start gap-3">
                    <div className="justify-start text-white text-xl font-medium font-['Poppins'] leading-6">Start your journey now</div>
                  </div>
                  <div className="w-3.5 h-0 opacity-0 outline outline-offset-[-0.60px] outline-white" />
                </div>
                <div data-svg-wrapper className="relative">
                  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.8 19.2L21.6 14.4M21.6 14.4L16.8 9.59998M21.6 14.4H7.19995" stroke="white" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-12 font-primary">
            <div className="w-48 inline-flex flex-col justify-start items-start gap-2.5">
              <div className="size- inline-flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-indigo-950 text-5xl font-bold leading-[57.60px]">10k+</div>
              </div>
              <div className="w-max inline-flex justify-center items-center gap-2.5">
                <div className="text-start w-max justify-start text-zinc-800 text-2xl font-normal font-['Poppins'] leading-8">Students Helped</div>
              </div>
            </div>
            <div className="size- inline-flex flex-col justify-start items-start gap-2.5">
              <div className="size- inline-flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-yellow-300 text-5xl font-bold leading-[57.60px]">2k+</div>
              </div>
              <div className="size- inline-flex justify-center items-center gap-2.5">
                <div className="justify-start text-zinc-800 text-2xl font-normal font-['Poppins'] leading-8">Expert Mentors</div>
              </div>
            </div>
            <div className="size- inline-flex flex-col justify-start items-start gap-2.5">
              <div className="size- inline-flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-purple-600 text-5xl font-bold leading-[57.60px]">50+</div>
              </div>
              <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-zinc-800 text-2xl font-normal font-['Poppins'] leading-8">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-1/2 h-full grid place-items-start gap-2.5 overflow-hidden">
      <Image className="w-full h-full object-cover" src={'/asset/image/joyful-young-schoolgirl-wearing-backpack-holding-notebook-points-himself 1.png'} alt="joyful-young-schoolgirl-wearing-backpack-holding-notebook-points-himself 1" width={800} height={400}/>
    </div>
  </div>
</div>
        </>
    )
}