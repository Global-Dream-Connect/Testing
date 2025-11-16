import Image from "next/image"
import React from "react"

export default function BrandGuideline(){
    return(
        <>
            <div className="w-full px-24 py-10 relative bg-neutral-100 inline-flex flex-col justify-start items-center gap-12 overflow-hidden">
  <div className="self-stretch inline-flex justify-start items-center gap-10">
    <div className="w-60 self-stretch flex justify-center items-center gap-2.5">
      <div className="justify-start text-neutral-400 text-2xl font-normal font-['Poppins'] leading-7">Get into top schools</div>
    </div>
    <div  className="flex-1 relative inline-flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className=" w-max h-fit inline-flex justify-start items-start gap-10">
        <Image className="w-52 h-fit " width={300} height={300} src={'/asset/image/columbia-university-seeklogo.png'} alt="columbia-university-seeklogo"/>
        <Image className="w-32 h-fit " width={300} height={300} src={'/asset/image/dartmouth-seeklogo.png'} alt="dartmouth-seeklogo"/>
        <Image className="w-32 h-fit " width={300} height={300} src={'/asset/image/harvard-university-seeklogo.png'} alt="harvard-university-seeklogo"/>
        <Image className="w-32 h-fit " width={300} height={300} src={'/asset/image/princeton-university-seeklogo.png'} alt="princeton-university-seeklogo"/>
        <Image className="w-32 h-fit " width={300} height={300} src={'/asset/image/upenn-university-of-pennsylvania-seeklogo.png'} alt="upenn-university-of-pennsylvania-seeklogo"/>
        <Image className="w-10 h-fit " width={300} height={300} src={'/asset/image/cornell-university-seeklogo.png'} alt="cornell-university-seeklogo"/>

      </div>
    </div>
  </div>
  <div className="w-16 h-24 left-[351px] top-[8px] absolute bg-neutral-100 blur-[20px]" />
  <div className="w-16 h-24 left-[1388px] top-[8px] absolute bg-neutral-100 blur-[20px]" />
</div>
        </>
    )
}