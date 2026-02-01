import React from 'react';

const AppDownloadSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F3E5F5] py-4 lg:py-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
          <div className="relative w-full max-w-[400px] h-[130px] md:h-[170px] flex items-center justify-center">
            
            {/* Floating Icons */}
            <div className="absolute left-0 top-8 animate-bounce delay-700">
              <span className="material-symbols-outlined text-3xl text-gray-700 bg-white p-1.5 rounded-lg shadow-md rotate-12">laptop_mac</span>
            </div>
            <div className="absolute left-8 bottom-6 animate-bounce delay-1000">
              <span className="material-symbols-outlined text-3xl text-gray-700 bg-white p-1.5 rounded-lg shadow-md -rotate-12">tv</span>
            </div>
            <div className="absolute right-1/4 top-0 animate-bounce delay-500">
              <span className="material-symbols-outlined text-3xl text-gray-700 bg-white p-1.5 rounded-lg shadow-md rotate-6">local_laundry_service</span>
            </div>

            {/* Phone Mockup */}
            <div
              className="relative z-10 w-[140px] md:w-[180px] h-full bg-contain bg-center bg-no-repeat drop-shadow-xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNvyg6R_VTWWgGtR4fwMFYJ72CZ6E8aMlMHueZX_MHdED35CVswN3qaQpNymHrnLAqi9BQEBj2PcbMrsiDKUERd_TumV9uJ8qG8OqWn_D1nvhx8LOSuFIpaxQ0B5OD9jYeG6r9VBLhAQznC-qN5rUMJdFdkFRsYXQFeAPIZAzYkIO3GLO7qWi-mSLbTy0ZnofIaxpObddgRg7EcHo3hnrjeSpxPMUFxGcwuecZnd5ywZBlSn5NieZ6mzYMS7zDk1-11ftJLT1_y1E")',
                maskImage: 'url("data:image/svg+xml;utf8,<svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 100 200\\" preserveAspectRatio=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect x=\\"10\\" y=\\"10\\" width=\\"80\\" height=\\"180\\" rx=\\"10\\" ry=\\"10\\" /></svg>")',
                WebkitMaskImage: 'url("data:image/svg+xml;utf8,<svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 100 200\\" preserveAspectRatio=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect x=\\"10\\" y=\\"10\\" width=\\"80\\" height=\\"180\\" rx=\\"10\\" ry=\\"10\\" /></svg>")',
                backgroundSize: 'cover'
              }}
            >
              <div className="absolute inset-0 bg-purple-900/80 flex items-center justify-center">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shadow-md transform rotate-12">
                  <span className="text-white font-black text-3xl">P</span>
                </div>
              </div>
              <div className="absolute inset-0 border-[6px] border-gray-800 rounded-[2rem] pointer-events-none"></div>
            </div>
          </div>
          
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