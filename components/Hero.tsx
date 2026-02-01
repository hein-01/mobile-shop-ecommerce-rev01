import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full hero-gradient overflow-hidden relative min-h-[400px] flex items-center justify-center py-4">
      <div className="max-w-[1200px] w-full px-4 lg:px-10 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Product Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-1 relative z-10">
          <div
            className="w-full h-[220px] lg:h-[360px] bg-contain bg-center bg-no-repeat drop-shadow-2xl"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDN4xmdamghD4U13saHCkNLlAVQKP3L2s9TlcBrN7mvLebP10Eh_VgKqNpnn3d_R4RBbsZsLyOnTv3m9grXPj3I65V53NyYfOQQWrYjzMev_AZ-IwJxrxQJxsxx_9I_fLNhtcZZbEXIsATCcdeKtePn5F87NZrzpT7t4b9Fb1SZNJ9SVCWAX78u6jwB0tey1L3et0LYoocxqKbAJJXRMvZLogrbaFh43P0WNPDTpAgFnbr6aibWJ50qAInprOXtWYwJtYDngZu3JuA")',
              filter: 'drop-shadow(0 15px 20px rgba(0,0,0,0.25))',
            }}
          ></div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-1 items-center lg:items-end text-center lg:text-right order-2 lg:order-2 z-10 mt-6 lg:mt-0">
          <div className="flex items-center gap-2 mb-0">
            <span className="text-[#1B4D3E] font-black text-sm tracking-tight uppercase">iPhone 15</span>
          </div>
          <div className="flex flex-col lg:items-end leading-none">
            <h1 className="text-white text-3xl lg:text-5xl font-black leading-[0.85] tracking-tighter uppercase drop-shadow-md">
              Experience
            </h1>
            <h1 className="text-primary bg-white px-2 py-0.5 rounded-sm text-3xl lg:text-5xl font-black leading-[0.85] tracking-tighter uppercase transform -skew-x-6 shadow-lg inline-block my-1 lg:my-0">
              Maximum
            </h1>
            <h1 className="text-white text-3xl lg:text-5xl font-black leading-[0.85] tracking-tighter uppercase drop-shadow-md">
              Value
            </h1>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-1 mt-2">
            <p className="text-[#1B4D3E] text-sm lg:text-base font-bold tracking-tight">New iPhone starts at</p>
            <div className="flex items-baseline gap-2">
              <p className="text-service-purple text-2xl lg:text-5xl font-black tracking-tighter drop-shadow-sm">$23,200*</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-end w-full">
            <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg border-b-2 border-primary flex flex-col items-center justify-center min-w-[100px]">
              <span className="text-primary text-[9px] font-bold uppercase tracking-wider">Trade-in Offer</span>
              <span className="text-[#1B4D3E] font-black text-sm">Save $5,000</span>
            </div>
            <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg border-b-2 border-primary flex flex-col items-center justify-center min-w-[100px]">
              <span className="text-primary text-[9px] font-bold uppercase tracking-wider">Installment</span>
              <span className="text-[#1B4D3E] font-black text-sm">0% / 36 mo.</span>
            </div>
            <button className="bg-[#1B4D3E] text-white font-bold py-1.5 px-6 rounded-full shadow-lg hover:bg-[#153e32] transition-colors border-2 border-transparent hover:border-white text-xs lg:text-sm self-center">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Blur Blobs */}
      <div className="absolute top-5 right-5 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-5 left-5 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl"></div>

      {/* Carousel Controls */}
      <button className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-[#1B4D3E] shadow-lg hover:bg-white transition-all z-20">
        <span className="material-symbols-outlined !text-xl">chevron_left</span>
      </button>
      <button className="absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-[#1B4D3E] shadow-lg hover:bg-white transition-all z-20">
        <span className="material-symbols-outlined !text-xl">chevron_right</span>
      </button>
    </section>
  );
};

export default Hero;