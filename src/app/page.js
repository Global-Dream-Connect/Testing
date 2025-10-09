import { Reveal, SlideIn } from "@/components/motion/div-reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ArrowUpRight, FlagTriangleRight, Search, Star, UserCheck2Icon, VideoIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 md:px-8 md:pt-12 lg:px-16 overflow-x-hidden">
        <section id="home" className="py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-6 items-center place-items-center">
                <div className="w-full max-w-xl text-center md:text-left animate-on-scroll fade-in-up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight font-sans">
                        Your path to the <span className="text-brand-blue">Ivy League</span> Starts Here
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        We help students like you get into the world's top universities. Our expert mentors and proven strategies pave the way for your success.
                    </p>
                    <button data-modal-trigger className="mt-8 bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-brand-blue/90 transition-colors">
                        Get Started
                    </button>
                    <div className="mt-8 flex items-center justify-center md:justify-start space-x-4">
                        <div className="flex -space-x-2">
                            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" alt="User A" width={50} height={50} />
                            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="User B" width={50} height={50} />
                            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" alt="User C" width={50} height={50} />
                        </div>
                        <p className="text-sm text-gray-500">Trusted by <span className="font-bold text-gray-700">50,000+ students</span><br/> on their journey to success</p>
                    </div>
                </div>
                <Reveal>
                    <div className="relative w-full m-auto h-full bg-brand-purple p-6 pb-0 rounded-3xl animate-on-scroll fade-in-up delay-150" >
                     <Image className="w-full h-full object-cover" src="/asset/image/girl smiling.png" alt="smiling-young-girl" width={500} height={500}/>
                    </div>
                </Reveal>
            </div>
        </section>
        {/* Partners Section */}
        <section className="py-12 text-center animate-on-scroll fade-in-up">
            <h3 className="text-lg font-semibold text-gray-700">Let's help you get into your dream school</h3>
            <div className="mt-8 grid grid-cols-2 place-items-center md:grid-cols-4 lg:grid-cols-5 gap-8 h-20 grayscale opacity-80 bg-gray-100">
                <div className="w-28 aspect-video flex justify-center items-center">
                    <img src="/asset/image/harvard.svg" alt="Harvard University Logo" className="w-full h-full object-cover object-center " />
                </div>
                <div className="w-28 aspect-video flex justify-center items-center">
                    <img src="/asset/image/purdue.svg" alt="Purdue University Logo" className="w-full h-full object-cover " />
                </div>
                <div className="w-28 aspect-video flex justify-center items-center">                
                    <img src="/asset/image/berkley.svg" alt="Berkley University Logo" className="w-full h-full  object-cover" />
                </div>
                <div className="w-28 aspect-video flex justify-center items-center">
                    <img src="/asset/image/oxford.svg" alt="Oxford University Logo" className="w-full h-full object-cover" />                    
                </div>
                <div className="w-28 aspect-video flex justify-center items-center ">
                <img src="/asset/image/mit.svg" alt="MIT Logo" className="h-8 hidden lg:block" />
                    
                </div>
            </div>
        </section>

        {/* Combined Features Section  */}
        <section id="features" className="py-16 md:py-24 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-on-scroll fade-in-up">Why you will love Global Dreams Connect</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto animate-on-scroll fade-in-up delay-150">We provide a comprehensive support system designed for your success.</p>
            <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-brand-blue/90 transition-colors animate-on-scroll fade-in-up delay-200">Start Free Trial</button>
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
                <SlideIn delay={0}>
                    <div className="bg-brand-purple p-8 rounded-2xl animate-on-scroll fade-in-up delay-300">
                        <h4 className="font-bold text-xl mb-2">One-on-One Mentorship</h4>
                        <p className="text-gray-600">Connect with experienced mentors from top universities who provide personalized guidance and an objective perspective.</p>
                    </div>
                </SlideIn>
                <SlideIn delay={0.1}>
                    <div className="bg-brand-green p-8 rounded-2xl animate-on-scroll fade-in-up delay-400">
                        <h4 className="font-bold text-xl mb-2">Real-World Experience</h4>
                        <p className="text-gray-600">Gain practical skills and insights that go beyond textbooks, preparing you for a successful career.</p>
                    </div>
                </SlideIn>
                <SlideIn delay={0.2}>
                    <div className="bg-brand-yellow p-8 rounded-2xl animate-on-scroll fade-in-up delay-500">
                        <h4 className="font-bold text-xl mb-2">Portfolio of Evidence</h4>
                        <p className="text-gray-600">Build a strong portfolio to showcase your skills, goals and overall development for applications.</p>
                    </div>
                </SlideIn>
            </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-on-scroll fade-in-up">What our members are saying about us</h2>
            <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="text-center animate-on-scroll fade-in-up">
                    <div className="relative inline-block">
                        <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop" alt="Testimonial author 1" width={300} height={300}  className="w-24 h-24 rounded-full mx-auto object-cover"/>
                        <div className="absolute -top-2 -left-2 w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 20 20"><path d="M10.75 3.996c0-1.096-.9-1.996-2-1.996S6.75 2.9 6.75 3.996v3.008c0 1.096.9 1.996 2 1.996s2-.9 2-1.996V3.996zm3.5 0c0-1.096-.9-1.996-2-1.996s-2 .9-2 1.996v3.008c0 1.096.9 1.996 2 1.996s2-.9 2-1.996V3.996zM4 9.404C4 8.629 4.629 8 5.404 8h9.192c.775 0 1.404.629 1.404 1.404v3.192c0 .775-.629 1.404-1.404 1.404H5.404A1.404 1.404 0 014 12.596V9.404z"></path></svg>
                        </div>
                    </div>
                    <div className="mt-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <p className="text-gray-600 italic">"Global Dreams was a game-changer for me. The mentorship I received was invaluable in my application process."</p>
                        <h5 className="font-bold mt-4">Jane Doe</h5>
                    </div>
                </div>
                <div className="text-center animate-on-scroll fade-in-up delay-200">
                    <div className="relative inline-block">
                        <Image src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop" alt="Testimonial author 2" width={300} height={300} className="w-24 h-24 rounded-full mx-auto object-cover"/>
                         <div className="absolute -top-2 -left-2 w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 20 20"><path d="M10.75 3.996c0-1.096-.9-1.996-2-1.996S6.75 2.9 6.75 3.996v3.008c0 1.096.9 1.996 2 1.996s2-.9 2-1.996V3.996zm3.5 0c0-1.096-.9-1.996-2-1.996s-2 .9-2 1.996v3.008c0 1.096.9 1.996 2 1.996s2-.9 2-1.996V3.996zM4 9.404C4 8.629 4.629 8 5.404 8h9.192c.775 0 1.404.629 1.404 1.404v3.192c0 .775-.629 1.404-1.404 1.404H5.404A1.404 1.404 0 014 12.596V9.404z"></path></svg>
                        </div>
                    </div>
                     <div className="mt-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <p className="text-gray-600 italic">"The real-world projects helped me build a portfolio that truly stood out. I can't recommend them enough!"</p>
                        <h5 className="font-bold mt-4">John Eyre</h5>
                    </div>
                </div>
                <div className="text-center animate-on-scroll fade-in-up delay-300">
                    <div className="relative inline-block">
                        <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop" alt="Testimonial author 3" width={300} height={300} className="w-24 h-24 rounded-full mx-auto object-cover"/>
                         <div className="absolute -top-2 -left-2 w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 20 20"><path d="M10.75 3.996c0-1.096-.9-1.996-2-1.996S6.75 2.9 6.75 3.996v3.008c0 1.096.9 1.996 2 1.996s2-.9 2-1.996V3.996zm3.5 0c0-1.096-.9-1.996-2-1.996s-2 .9-2 1.996v3.008c0 1.096.9 1.996 2 1.996s2-.9 2-1.996V3.996zM4 9.404C4 8.629 4.629 8 5.404 8h9.192c.775 0 1.404.629 1.404 1.404v3.192c0 .775-.629 1.404-1.404 1.404H5.404A1.404 1.404 0 014 12.596V9.404z"></path></svg>
                        </div>
                    </div>
                     <div className="mt-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <p className="text-gray-600 italic">"The community is so supportive, and the resources are top-notch. It made the stressful process feel manageable."</p>
                        <h5 className="font-bold mt-4">Sam Smith</h5>
                    </div>
                </div>
            </div>
        </section>
        {/* Blog Section */}
        <section id="blog" className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4 animate-on-scroll fade-in-up">Stay updated with various tips on how to enroll into Ivy League Schools</h2>
          <p className="text-center text-gray-600 mb-12 animate-on-scroll fade-in-up delay-100">Insights and advice from our team of experts.</p>
          <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-200 rounded-xl overflow-hidden flex flex-col animate-on-scroll fade-in-up delay-150">
                  <Image src="https://images.unsplash.com/photo-1670528148572-9270351b95bd?q=80&w=1074&auto=format&fit=crop" alt="University campus" width={400} height={400} className="w-full h-48 object-cover"/>
                  <div className="p-6 flex flex-col flex-grow">
                      <h5 className="font-bold text-lg mb-2">Top 5 questions to ask in your University Interview</h5>
                      <p className="text-gray-600 text-sm mb-4">Make a lasting impression by asking thoughtful questions.</p>
                      <a href="#" className="font-semibold text-brand-blue mt-auto">Read More →</a>
                  </div>
              </div>
              <div className="border border-gray-200 rounded-xl overflow-hidden flex flex-col animate-on-scroll fade-in-up delay-300" >
                  <Image src="https://images.unsplash.com/photo-1570929057588-6952f7dd2305?q=80&w=1331&auto=format&fit=crop" alt="A person writing an essay" width={400} height={400} className="w-full h-48 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                      <h5 className="font-bold text-lg mb-2">The Secret to Writing a Winning College Essay</h5>
                      <p className="text-gray-600 text-sm mb-4">Discover how to tell your unique story effectively.</p>
                      <a href="#" className="font-semibold text-brand-blue mt-auto">Read More →</a>
                  </div>
              </div>
              <div className="border border-gray-200 rounded-xl overflow-hidden flex flex-col animate-on-scroll fade-in-up delay-400">
                  <Image src="https://images.unsplash.com/photo-1708578200684-3aa944b73237?q=80&w=1332&auto=format&fit=crop" alt="Students in an activity" width={400} height={400} className="w-full h-48 object-cover"/>
                  <div className="p-6 flex flex-col flex-grow">
                      <h5 className="font-bold text-lg mb-2">Do you have to be president of 10 clubs to get into Yale?</h5>
                      <p className="text-gray-600 text-sm mb-4">Let's talk about quality over quantity in extracurriculars.</p>
                      <a href="#" className="font-semibold text-brand-blue mt-auto">Read More →</a>
                  </div>
              </div>
          </div>
        </section>
      
      </main>
      <section id="contact" className="mt-16 bg-[#1E1B4B] relative">
        {/* <!-- Wavy Top Divider SVG --> */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px]">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-17,148.63-10.09,224.23,2.49,75.6,12.57,141.67,34.21,217.38,50.14,24.32,5.2,50.23,10.05,76.66,13.79,25.43,3.61,51.81,5.2,78.23,4.19,26.41-1,52.34-4.23,78.1-9.19,25.76-4.96,51-12.06,76.19-20.76l1.09-.34L1200,0V120H0V56.44Z" className="fill-white"></path>
            </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-24 text-center text-white relative z-10">
            <h2 className="text-4xl font-bold animate-on-scroll fade-in-up">From dreaming to achieving</h2>
            <p className="mt-4 max-w-2xl mx-auto animate-on-scroll fade-in-up delay-150">
                Ready to take the next step? Our team is here to guide you through every part of the application process. Let's make your dream university a reality.
            </p>
            <button data-modal-trigger className="mt-8 bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors animate-on-scroll fade-in-up delay-300">
                Start your application
            </button>
        </div>
    </section>

    </>
  );
}

