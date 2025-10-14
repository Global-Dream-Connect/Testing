import React from "react";

const CTASections: React.FC = () => {
  return (
    <div className="flex flex-wrap w-full pb-5 bg-[#f0e7de]">
      {/* Become a Mentor */}
      <section className="py-16 px-6 bg-[#070750] w-1/2">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#f0e7de] mb-6 font-poppins">
            Become a Mentor
          </h2>
          <p className="text-lg text-[#f0e7de] mb-8 max-w-2xl mx-auto font-darker">
            Are you a college student passionate about guiding others? Join our
            mentorship network and help a teen unlock their untapped potential.
          </p>
          <button className="bg-[#ffe953] text-[#070750] px-8 py-3 rounded-full font-medium cursor-pointer transition-colors">
            Apply to Mentor
          </button>
        </div>
      </section>

      {/* Join as Student */}
      <section className="py-16 px-6 bg-[#f0e7de] w-1/2">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#070750] mb-6 font-poppins">
            Join as Student
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-darker">
            If you’re a student aged 13–23 with big dreams, we’ll connect you
            with someone who’s already been where you want to go.
          </p>
          <button className="bg-[#070750] text-[#f0e7de] cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-[#050540] transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default CTASections;
