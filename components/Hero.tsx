import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-[#D32F2F] overflow-hidden relative min-h-[450px] lg:h-[500px] flex items-center justify-center py-8 z-10">
      {/* Background Gradients/Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E53935] via-[#C62828] to-[#B71C1C]"></div>
      
      {/* Dynamic Light Beams */}
      <div className="absolute top-0 left-1/4 w-1 bg-white/10 h-full rotate-[30deg] blur-sm"></div>
      <div className="absolute top-0 right-1/4 w-1 bg-white/10 h-full rotate-[-30deg] blur-sm"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/30 rounded-full blur-[80px] mix-blend-screen pointer-events-none"></div>

      <div className="max-w-[1200px] w-full px-4 lg:px-8 z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        
        {/* Left Side: Campaign Text & Graphics */}
        <div className="flex flex-col items-center lg:items-end relative lg:w-1/2 text-center lg:text-right">
            
            {/* 2.2 Text */}
            <div className="absolute -top-16 -left-10 lg:-left-20 text-white/10 font-black text-[180px] leading-none select-none z-0">2.2</div>
            <h2 className="relative z-10 text-white text-6xl lg:text-7xl font-black italic tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] mb-6 transform -rotate-6">
                2.2
            </h2>

            {/* The 1 Group */}
            <div className="relative flex flex-col items-center lg:items-end z-10">
                {/* Logo */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-left-12 w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center shadow-xl z-20 transform -rotate-12 border-4 border-red-100">
                    <span className="text-black text-[10px] font-bold uppercase leading-none mt-1">The</span>
                    <span className="text-black text-4xl font-black leading-none">1</span>
                    <div className="w-6 h-[3px] bg-[#D32F2F] mt-1"></div>
                </div>

                {/* Stacked 3D Text */}
                <div className="flex flex-col items-center lg:items-end transform -rotate-6 mt-8">
                    <h1 className="text-2xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-pink-100 drop-shadow-md leading-[0.85] tracking-tight stroke-white">
                        အမိုက်စား
                    </h1>
                    <h1 className="text-2xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-pink-100 drop-shadow-md leading-[0.85] tracking-tight">
                        အထူး
                    </h1>
                    <h1 className="text-2xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-pink-100 drop-shadow-md leading-[0.85] tracking-tight">
                        ပရိုမိုးရှင်း
                    </h1>
                </div>

                {/* CTA */}
                <div className="mt-6 flex flex-col items-center lg:items-end transform -rotate-3">
                    <h3 className="text-yellow-300 text-2xl font-black uppercase tracking-wider drop-shadow-sm">SHOP NOW</h3>
                    <p className="text-white text-sm font-bold tracking-widest uppercase">Save and Get!</p>
                </div>
            </div>
        </div>

        {/* Right Side: Promotion Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl w-full max-w-[500px] transform hover:scale-105 transition-transform duration-300 relative z-20">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-[#FF4081] to-[#F50057] text-white text-center py-2.5">
                    <span className="font-bold text-sm lg:text-base tracking-wide">1 Feb 26 - 4 Feb 26 | Limited Offer</span>
                </div>

                {/* Card Content */}
                <div className="flex p-6 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[80%] bg-gray-200"></div>
                    
                    {/* Left: Discount */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center pr-2">
                        <p className="font-bold text-gray-800 text-sm leading-tight">Redeem 800 Points</p>
                        <p className="font-bold text-gray-500 text-xs mb-2">Get Discount</p>
                        
                        <div className="text-[#F50057] font-black text-6xl lg:text-7xl leading-none flex items-start tracking-tighter">
                            100
                            <div className="flex flex-col items-start ml-1 mt-1">
                                <span className="text-xl font-bold leading-none">.-</span>
                                <span className="text-lg font-bold leading-none">*</span>
                            </div>
                        </div>

                        <p className="text-[9px] text-gray-400 mt-2 leading-tight">
                            Maximum redemption up to<br/>the purchase price<br/>Minimum 800 points required
                        </p>
                    </div>

                    {/* Right: Points */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center pl-2">
                        <div className="flex items-center gap-1 mb-2">
                            <span className="font-bold text-gray-800 text-xs">Get Points The</span>
                            <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-[10px] font-bold">1</div>
                        </div>
                        
                        <div className="text-[#F50057] font-black text-6xl lg:text-7xl leading-none flex items-start tracking-tighter">
                            x5
                            <span className="text-2xl mt-1 ml-1">*</span>
                        </div>

                        <p className="text-[9px] text-gray-400 mt-2 leading-tight">
                            Minimum purchase 18,000.-<br/>Limit points awarded<br/>at 4,000 points
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* Footer Text */}
      <div className="absolute bottom-3 w-full text-center px-4 z-20">
        <p className="text-white/60 text-[10px] font-medium mb-1.5 tracking-wide">
            *Exclusively for Power Buy online only / T&C applied / The Company reserves the right to change the conditions without prior notice.
        </p>
        <div className="flex items-center justify-center gap-2 text-white font-bold tracking-[0.2em] text-sm uppercase opacity-90">
            <span>Central</span>
            <span className="font-light">Retail</span>
            <span className="mx-2">|</span>
            <span className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-yellow-300 transition-colors tracking-normal capitalize">Shop Now</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;