import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="text-[#070750]" style={{ backgroundColor: "#f0e7de" }}>
      <div className="flex flex-col lg:flex-row items-stretch w-full min-h-screen">
        {/* Text Content - 2/5 width */}
        <div className="lg:w-2/5 w-full py-20 px-4 lg:px-12 xl:px-20 flex flex-col justify-center">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
            <div className="w-12 h-12 bg-[#070750] rounded-full flex items-center justify-center">
              <span className="text-white font-poppins font-bold text-lg">
                G
              </span>
            </div>
            <span className="text-[#070750] font-glacial text-xl">
              Global Dream Connect
            </span>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins text-center lg:text-left leading-tight">
            Fresh Minds,
            <br />
            <span className="text-[#070750]">Global Futures</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#ffe953] text-[#070750] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#050540] hover:text-white transition-colors font-poppins">
              Join Us
            </button>
          </div>
        </div>

        {/* Visual Element - Seamlessly embedded into background */}
        <div className="lg:w-3/5 w-full flex items-center justify-center p-8 lg:p-12">
          <div className="relative w-full h-[500] max-h-[70vh] aspect-[5/3]">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, transparent 85%, #f0e7de 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
