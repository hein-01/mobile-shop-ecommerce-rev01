import React from 'react';

const AppDownloadSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f3e8ff] py-4 lg:py-6 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative z-10">
        
        {/* Light Card - Left Side */}
        <div className="flex-shrink-0 relative group perspective-1000">
            {/* Subtle shadow/glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-[28px] opacity-30 group-hover:opacity-50 blur-lg transition duration-500"></div>
            
            <div className="relative bg-white text-[#1a1a1a] p-4 rounded-[24px] border border-white/60 shadow-xl w-full max-w-[420px] md:w-[420px]">
                
                {/* Top Content: Two QR Codes */}
                <div className="flex gap-6 sm:gap-8 mb-4 items-center justify-center">
                    {/* QR Code 1 */}
                    <div className="w-[90px] h-[90px] bg-gray-50 p-2 rounded-2xl shrink-0 flex items-center justify-center relative overflow-hidden shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                        <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PowerBuyAppDownload" 
                            alt="Scan QR" 
                            className="w-full h-full object-cover mix-blend-multiply"
                        />
                        {/* Center Logo Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-[#ff6900] w-6 h-6 rounded-[5px] flex items-center justify-center shadow-md border-[1.5px] border-white">
                                <span className="text-white font-bold text-[8px] pb-0.5">mi</span>
                            </div>
                        </div>
                    </div>

                    {/* QR Code 2 */}
                    <div className="w-[90px] h-[90px] bg-gray-50 p-2 rounded-2xl shrink-0 flex items-center justify-center relative overflow-hidden shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                        <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PowerBuyAppDownload" 
                            alt="Scan QR" 
                            className="w-full h-full object-cover mix-blend-multiply"
                        />
                        {/* Center Logo Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-[#ff6900] w-6 h-6 rounded-[5px] flex items-center justify-center shadow-md border-[1.5px] border-white">
                                <span className="text-white font-bold text-[8px] pb-0.5">mi</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-gray-100 mb-3"></div>

                {/* Buttons Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                    {/* Google Play */}
                    <button className="bg-black hover:bg-gray-800 border border-transparent rounded-xl flex items-center justify-center py-1.5 px-3 gap-2 transition-all duration-300 cursor-pointer group/btn shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Google_Play_2022_icon.svg" alt="Google Play" className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        <div className="flex flex-col items-start">
                            <span className="text-[6px] text-gray-300 font-bold uppercase tracking-wider leading-none mb-0.5">Get it on</span>
                            <span className="text-[10px] text-white font-bold leading-none font-display">Google Play</span>
                        </div>
                    </button>

                    {/* App Store */}
                    <button className="bg-black hover:bg-gray-800 border border-transparent rounded-xl flex items-center justify-center py-1.5 px-3 gap-2 transition-all duration-300 cursor-pointer group/btn shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="App Store" className="w-4 h-4 group-hover/btn:scale-110 transition-transform object-contain pb-0.5" />
                        <div className="flex flex-col items-start">
                            <span className="text-[6px] text-gray-300 font-bold tracking-wide leading-none mb-0.5">Download on the</span>
                            <span className="text-[10px] text-white font-bold leading-none font-display">App Store</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        {/* Right Side Container */}
        <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Content */}
            <div className="flex flex-col text-center md:text-left max-w-lg">
              <h2 className="text-[#5a248f] text-2xl md:text-3xl font-extrabold mb-3 tracking-tight leading-tight">
                Hassle-Free Shopping
              </h2>
              <p className="text-[#5a248f] text-base md:text-lg font-bold opacity-90 mb-1.5">
                Scan to download the Power Buy application
              </p>
              <p className="text-[#6d4c8f] text-xs md:text-sm font-medium">
                Get exclusive deals before anyone else
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;