const Header: React.FC = () => {
  return (
    <header className="bg-[#070750] text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#070750] font-poppins font-bold text-xl">
              G
            </span>
          </div>
          <span className="font-glacial text-white text-lg hidden sm:block">
            Global Dream Connect
          </span>
        </div>

        {/* Navigation */}
        <nav>
          <button className="bg-[#ffe953] text-[#070750] px-6 py-2 rounded-full font-medium hover:bg-[#f3e24a] transition-colors">
            Join Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
