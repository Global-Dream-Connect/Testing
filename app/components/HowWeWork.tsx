import React from "react";

const HowWeWork: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#f0e7de" }}>
      <h2 className="text-[#070750] text-4xl text-center font-bold pt-20 pb-10">
        How We Wrok
      </h2>
      <div className="flex flex-wrap justify-around gap-8 pb-10">
        {/* Card component */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-100">
          <h3 className="text-2xl font-bold mb-4 text-center text-[#070750]">
            Discover
          </h3>
          <p className="text-gray-700 text-center">
            Student sign up to explore mentorship, academics, projects and
            development
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-100">
          <h3 className="text-2xl font-bold mb-4 text-center text-[#070750]">
            Connect
          </h3>
          <p className="text-gray-700 text-center">
            We match them with mentors from top universities around the world
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-100">
          <h3 className="text-2xl font-bold mb-4 text-center text-[#070750]">
            Grow
          </h3>
          <p className="text-gray-700 text-center">
            Together they turn dreams and plans into real progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
