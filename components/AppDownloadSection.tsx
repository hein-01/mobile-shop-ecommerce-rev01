import React from 'react';

const AppDownloadSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F3E5F5] py-4 lg:py-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative min-h-[130px] md:min-h-[170px]">
          
          {/* QR Code */}
          <div className="bg-white p-2 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 absolute right-10 md:right-auto md:left-[300px] bottom-2">
            <img
              alt="Download App QR Code"
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUmdMiwn9UI8cfaDZrw1EQcXzqdbccqZMEHDAoxTunFvhVnOGaA9TxN0Ugf3yBQwgAUdO01J0Pcud3vnk8-zj-jc_uAJcXybfqOOHPyyfqF0pI0DMwPLmjoYyNJhZJHZZ5iEwGbbHsFb8SfqzYVZ-sIwLmlgftVx79bjV61j2EmhKAF_JFhBfitGd5DphTrIIqDjz2D91OprcALnnXCTdUxug-AWwfJj-h-11Cvr9rHEBbsaq3WuUpc8llzvubxAVd1ihVOPy6tDI"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col text-center md:text-left">
          <h2 className="text-[#5a248f] text-xl md:text-2xl lg:text-3xl font-bold mb-2 tracking-tight">Hassle-Free Shopping</h2>
          <p className="text-[#5a248f] text-sm md:text-base font-medium opacity-90">Scan to download the Power Buy application</p>
          <p className="text-[#5a248f] text-xs md:text-sm opacity-80 mt-1">Get exclusive deals before anyone else</p>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;