import React from "react";

export default function Footer1(){
    return(
            <footer className="bg-brand-blue text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Logo and Tagline */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1a2b4a] text-2xl font-bold">G</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold">Global Dream</h3>
                <h3 className="text-xl font-bold">Connect</h3>
              </div>
            </div>
            <p className="text-white/90 text-lg italic">
              "Dreams are global. Opportunity should too."
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <a href="#" className="hover:text-white transition-colors">
              © Home
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Join Us
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Inesgred
            </a>
          </div>
        </div>
      </div>
    </footer>
    )
}