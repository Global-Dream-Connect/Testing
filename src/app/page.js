import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ArrowUpRight, FlagTriangleRight, Search, Star, UserCheck2Icon, VideoIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-fit bg-white p-4">
      {/* hero section */}
      <div className="w-full h-fit flex flex-col md:flex-row md:h-screen">
        {/* hero text */}
        <div className="w-full h-fit flex md:items-center md:justify-center md:h-full md:px-8 md:w-1/2">
          <div className="w-full max-w-3xl h-fit flex flex-col items-center gap-2 md:items-start sm:gap-4 md:gap-8">
            <h1 className="w-full max-w-md h-fit font-serif font-bold text-3xl text-center text-neutral-900 md:text-4xl md:text-start md:max-w-full lg:text-5xl md:leading-14">Your path to the <span className="text-indigo-600">Ivy League</span> Starts Here</h1>
            <p className="w-full max-w-md text-base text-center text-neutral-700 text-pretty md:text-start md:text-lg md:max-w-full">Through mentorship and real-world opportunities, we help students excel, lead and stand out at top universities.</p>
            <div className="w-full max-w-md h-fit flex flex-col items-center gap-2 justify-start mt-4 sm:flex-row sm:justify-start sm:gap-4">
              <Button className={'w-max h-max items-center flex gap-2 bg-indigo-500 py-3 hover:bg-indigo-400 duration-400 md:text-base'}> Start your journey <ArrowRightIcon/> </Button>
              <Button variant={'outline'} className={'w-max h-max items-center flex gap-2 py-3 hover:bg-neutral-800 hover:text-white duration-400 md:text-base'}> Become a mentor <ArrowRightIcon/> </Button>
            </div>
            <div className="w-full max-w-md h-fit flex justify-evenly items-center divide-x md:max-w-full my-4">            
              <StatCard number={'10k'} title={'students helped'} className={'text-blue-400'}/>
              <StatCard number={'2k'} title={'expert mentors'} className={'text-amber-400'}/>
              <StatCard number={'50'} title={'countries'} className={'text-lime-400'}/>
            </div>
          </div>
        </div>
        {/* hero avatar */}
        <div className="w-full aspect-square  md:h-full md:w-1/2 pt-16 md:grid md:place-items-center">
          <Avatar/>
        </div>
      </div>

      {/* university carousal */}
      <div className="w-full h-14 bg-slate-100"></div>

      {/* process */}
      <div className="w-full h-fit flex flex-col items-center gap-3">
        <h3 className="text-2xl font-semibold text-center">Why you will love Global Dream Connect</h3>
        <p className="max-w-md text-sm text-neutral-700 text-center">From dream to achievement in four simple steps. Join thousands of students who've transformed their aspirations into reality</p>
        <div className="w-full h-fit grid grid-cols-1 auto-rows-auto place-items-center gap-2 md:grid-cols-2 md:grid-rows-2">
            <Card className='p-4 gap-4 bg-sky-100 max-w-md'>
              <div className="w-fit aspect-square p-1.5 rounded-md bg-white">
                <UserCheck2Icon fill="#00a6f4" stroke="#00a6f4" size={24}/>
              </div>
              <span className="text-lg font-semibold text-neutral-800">Sign Up & Share Your Dreams</span>
              <p className="text-neutral-700">Share your goals, interests, and areas where you need support so we can build your personalized profile.</p>
              <div className="px-3 py-1 w-fit h-fit rounded-full text-sm bg-sky-500 text-white">2 mins setup</div>
            </Card>
            <Card className='p-4 gap-4 bg-green-100 max-w-md'>
              <div className="w-fit aspect-square p-1.5 rounded-md bg-white">
                <Search stroke="#00c950" size={24}/>
              </div>
              <span className="text-lg font-semibold text-neutral-800">Get Matched with Perfect Mentors</span>
              <p className="text-neutral-700">Our AI matches you with mentors who have the right expertise and experience to guide your success.</p>
              <div className="px-3 py-1 w-fit h-fit rounded-full text-sm bg-green-500 text-white">smart matching</div>
            </Card>
            <Card className='p-4 gap-4 bg-amber-100 max-w-md'>
              <div className="w-fit aspect-square p-1.5 rounded-md bg-white">
                <VideoIcon fill="#fe9a00" stroke="none" size={24}/>
              </div>
              <span className="text-lg font-semibold text-neutral-800">Start Your Mentorship Journey</span>
              <p className="text-neutral-700">Book sessions, receive personalized guidance, and access exclusive resources designed for your growth.</p>
              <div className="px-3 py-1 w-fit h-fit rounded-full text-sm bg-amber-500 text-white">flexible scheduling</div>
            </Card>
            <Card className='p-4 gap-4 bg-rose-100 max-w-md'>
              <div className="w-fit aspect-square p-1.5 rounded-md bg-white">
                <FlagTriangleRight fill="#ff637e" stroke="#ff637e" size={24}/>
              </div>
              <span className="text-lg font-semibold text-neutral-800">Achieve Your Goals</span>
              <p className="text-neutral-700">Monitor your progress, celebrate milestones, and turn your dreams into real achievements with expert support.</p>
              <div className="px-3 py-1 w-fit h-fit rounded-full text-sm bg-rose-400 text-white">flexible scheduling</div>
            </Card>

            
        </div>
      </div>
    </div>
  );
}

function StatCard({number, className,title}){
  return(
    <div className="w-fit h-fit flex flex-col items-center gap-1 p-1">
      <span className={cn("text-2xl font-semibold md:text-3xl lg:text-4xl",className)}>{number}+</span>
      
      <span className="text-neutral-700 text-sm font-medium ">{title}</span>
    </div>
  )
}

function Avatar(){
  return(
    <>
        <div className="w-full h-fit flex items-center justify-center">
          <div className="relative w-[80%] max-w-xs aspect-square rounded-2xl bg-indigo-100 md:max-w-md">
            <div className="absolute -top-10 -left-10  z-10 w-fit max-w-xs h-fit flex gap-2 items-center bg-white rounded-md border border-neutral-200 shadow-lg p-2">
              <span className="h-fit text-sm">GDC helped me in getting into my dream university</span>
            </div>
            <div className="absolute bottom-8 -left-8 w-fit h-fit flex items-center gap-1 p-2 bg-white rounded-md border shadow-lg">
              <Star size={24} fill="#ffc300" stroke="none"/>
              <Star size={24} fill="#ffc300" stroke="none"/>
              <Star size={24} fill="#ffc300" stroke="none"/>
              <Star size={24} fill="#ffc300" stroke="none"/>
              <Star size={24} fill="#ffc300" stroke="none"/>
            </div>
            <Image src={'/asset/image/youngwomen.png'} alt="young-women-holding-notebook" width={500} height={500} className="w-[110%] h-full object-cover shadow"/>
          </div>
        </div>

    </>
  )
}

