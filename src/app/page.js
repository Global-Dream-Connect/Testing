import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-fit bg-white">
      <div className="w-full h-screen grid grid-cols-5 grid-rows-1">
        <div className="col-span-3 w-full h-full flex flex-col items-start justify-center gap-8 p-4 md:px-10 lg:px-20">
          <h1 className="font-serif font-bold text-5xl  leading-14 text-neutral-900">Your path to the <span className="text-indigo-600">Ivy League</span> Starts Here</h1>
          <p className="text-2xl font-medium text-neutral-700">Through mentorship and real-world opportunities, we help students excel, lead and stand out at top universities.</p>
          <div className="mr-auto flex gap-2 justify-start mt-4">
            <Button className={'w-max h-max items-center flex gap-2 bg-indigo-500 py-3 hover:bg-indigo-400'}> Start your journey <ArrowRightIcon/> </Button>
            <Button variant={'outline'} className={'w-max h-max items-center flex gap-2 py-3'}> Become a mentor <ArrowRightIcon/> </Button>
          </div>
          <div className="w-full h-fit flex items-center justify-start gap-12">
            <StatCard number={'10k'} title={'students helped'} className={'text-blue-400'}/>
            <StatCard number={'2k'} title={'expert mentors'} className={'text-amber-400'}/>
            <StatCard number={'50'} title={'countries'} className={'text-lime-400'}/>

          </div>
        </div>
      </div>  
    </div>
  );
}

function StatCard({number, className,title}){
  return(
    <div className="w-fit h-fit flex flex-col gap-1 p-3">
      <span className={cn("text-5xl font-semibold",className)}>{number}+</span>
      <span className="text-neutral-800 font-medium">{title}</span>
    </div>
  )
}