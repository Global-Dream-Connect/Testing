import RouteBtn from "@/components/routeBtn";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeftRight, ArrowRightIcon, ArrowUpRight, BookOpen, FlagTriangleRight, Search, Sprout, Star, UserCheck2Icon, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
    <>
    <div className="min-h-screen flex flex-col">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#e8dfd3] relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col gap-2 items-center w-full md:flex-row md:gap-10 ">
            <div className="z-10 w-full md:w-1/3">
              <div className="flex items-center justify-start gap-2 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                  <span className="text-brand-blue text-7xl font-medium font-primary md:text-8xl">G</span>
                </div>
                <div>
                  <h1 className="text-lg text-brand-blue md:text-xl font-logo">Global Dream</h1>
                  <h1 className="text-lg text-brand-blue md:text-xl font-logo">Connect</h1>
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-semibold text-brand-blue mb-6 leading-tight">
                Fresh Minds,<br />
                Global Futures
              </h2>
              <RouteBtn link={'/join'}className={"bg-brand-yellow hover:bg-[#e0ab26] flex gap-3 items-center text-brand-blue text-lg px-8 rounded-full font-semibold"}>
                <div className="w-4 aspect-square border-2 border-l-0 border-b-0 rotate-45 gap-3 border-brand-blue"></div>
                Join Us
              </RouteBtn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-brand-blue mb-6">Our Mission</h2>
          <div className="relative">
            <p className="text-lg text-gray-700 leading-relaxed mb-2">
              Global Dream Connect empowers teenagers from underserved communities to dream bigger and act bolder by connecting them with mentors from top universities around the world. At GDC, we don’t prioritize by geography or background, only by opportunity. We give these opportunities a voice, a platform, and a clear path forward.
            </p>
            <div className="w-32 h-1 bg-red-500 mt-4"></div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e8dfd3]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-brand-blue mb-16">How We Work</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-brand-blue" />
                </div>
                <CardTitle className="text-2xl text-brand-blue mb-3">Discover</CardTitle>
                <CardDescription className="text-base text-gray-700">
                  Students sign up to explore mentorship opportunities, reflect projects, and development.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <ArrowLeftRight className="w-12 h-12 text-brand-blue" />
                </div>
                <CardTitle className="text-2xl text-brand-blue mb-3">Connect</CardTitle>
                <CardDescription className="text-base text-gray-700">
                  We match them with mentors from top universities around world.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Sprout className="w-12 h-12 text-brand-blue" />
                </div>
                <CardTitle className="text-2xl text-brand-blue mb-3">Grow</CardTitle>
                <CardDescription className="text-base text-gray-700">
                  Together, they turn dreams into plans — plans into real progress.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

            {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e8dfd3] ">
        <div className="container mx-auto bg-brand-blue">
          <div className="grid md:grid-cols-2 gap-8 mx-auto">
            <div className="text-center p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Become a Mentor</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                Are you a college student passionate about guiding others? Join our mentorship network and help a teen unlock their untapped potential.
              </p>
              <Button 
                size="lg" 
                className="bg-brand-yellow hover:bg-[#e0ab26] text-brand-blue font-semibold px-8 rounded-full"
              >
                <Link href={'/join'}>
                  Apply to mentor
                </Link>
              </Button>
            </div>
            
            <div className="text-center p-8 bg-white text-brand-blue">
              <h2 className="text-3xl font-bold mb-4">Join as Student</h2>
              <p className=" mb-6 leading-relaxed text-brand-blue">
                If you’re a student aged 13–23 with big dreams, we’ll connect you with someone who’s already been where you want to go.
              </p>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-brand-blue border-2 border-white text-white hover:bg-white hover:text-[#1a2b4a] hover:border hover:border-[#1a2b4a] font-semibold px-8 rounded-full"
              ><Link href={'/join'}>
                
                Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    
    </div>  
    

    </>
  );
}

