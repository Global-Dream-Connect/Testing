import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070750] text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4 font-poppins">
            Global Dream Connect
          </h3>
          <blockquote className="text-lg italic text-[#ddceed] mb-6 font-glacial">
            "Fresh Minds, Global Futures"
          </blockquote>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {[
            { name: "Home", url: "#" },
            { name: "Join Us", url: "#" },
            { name: "Contact", url: "#" },
            { name: "Instagram", url: "#" },
            { name: "LinkedIn", url: "#" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.url}
              className="text-[#f0e7de] hover:text-white transition-colors font-darker"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="text-center text-[#ddceed] text-sm font-darker">
          © {new Date().getFullYear()} Global Dream Connect. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
