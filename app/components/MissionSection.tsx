const MissionSection: React.FC = () => {
  return (
    <section className="bg-white pt-10 px-4 lg:px-8">
      <div>
        {/* Section Header */}
        <div className="text-left mb-5">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#070750] mb-6">
            Our Mission
          </h2>
        </div>

        {/* Mission Statement */}
        <div>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-glacial">
            Global Dream Connect empowers teenagers from underserved communities
            to dream bigger and act bolder by connecting them with mentors from
            top universities around the world. At GDC, we don’t prioritize by
            geography or background, only by opportunity. We give these
            opportunities a voice, a platform, and a clear path forward.
          </p>
          <div className="w-[300] border-3 border-red-950 rounded-full"></div>
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default MissionSection;
