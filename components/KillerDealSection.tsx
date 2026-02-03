import React from 'react';

const KillerDealSection: React.FC = () => {
  return (
    <section className="w-full px-4 pt-6 pb-2 bg-[#E0E7EB]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 bg-white h-auto md:h-[300px] relative group">
          
          {/* Left Side (Purple) */}
          <div className="w-full md:w-[32%] bg-[#8B5CF6] p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden shrink-0">
             {/* Gradient overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#9333ea] to-[#7e22ce]"></div>
             
             <div className="relative z-10 text-white">
                <div className="flex items-baseline gap-2 mb-0">
                    <span className="text-6xl lg:text-7xl font-black tracking-tighter leading-none">2.2</span>
                    {/* Placeholder for small unicorn icon */}
                    <span className="material-symbols-outlined text-3xl animate-pulse">pets</span>
                </div>
                <div className="text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-1">KILLER</div>
                <div className="text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-6">DEAL</div>
                
                <p className="text-sm font-medium opacity-80 mt-auto">1 Feb 26 - 4 Feb 26</p>
             </div>

             {/* Navigation Left */}
             <button className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg cursor-pointer z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-xl">chevron_left</span>
             </button>
          </div>

          {/* Right Side (White + Product) */}
          <div className="w-full md:w-[68%] bg-white p-4 lg:p-6 relative flex flex-col md:flex-row items-center">
             
             {/* Installment Badge */}
             <div className="absolute bottom-4 left-4 z-10 bg-gray-100 px-3 py-1.5 rounded-lg flex items-center gap-1 border border-gray-200">
                <span className="text-xs text-gray-600 font-bold">0% Installment*</span>
             </div>

             {/* Image */}
             <div className="w-full md:w-[45%] flex items-center justify-center p-2 mb-4 md:mb-0">
                <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN4xmdamghD4U13saHCkNLlAVQKP3L2s9TlcBrN7mvLebP10Eh_VgKqNpnn3d_R4RBbsZsLyOnTv3m9grXPj3I65V53NyYfOQQWrYjzMev_AZ-IwJxrxQJxsxx_9I_fLNhtcZZbEXIsATCcdeKtePn5F87NZrzpT7t4b9Fb1SZNJ9SVCWAX78u6jwB0tey1L3et0LYoocxqKbAJJXRMvZLogrbaFh43P0WNPDTpAgFnbr6aibWJ50qAInprOXtWYwJtYDngZu3JuA" 
                    alt="iPad" 
                    className="max-h-[200px] lg:max-h-[240px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                />
             </div>

             {/* Details */}
             <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left pt-2 md:pt-0 pl-0 md:pl-4">
                <div className="flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-xl font-bold">apple</span>
                    <span className="font-bold text-xl tracking-tight">iPad</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">Special deals that do more</h3>
                <p className="text-sm text-gray-500 mb-6 font-medium">iPad 10.9-inch (Wi-Fi)</p>

                <div className="flex gap-6 w-full justify-center md:justify-start">
                    {/* Option 1 */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="border border-gray-300 rounded px-2 py-0.5 text-[10px] text-gray-500 w-fit mb-1 bg-white">64 GB</div>
                        <div className="text-[#D32F2F] font-bold text-3xl tracking-tight">K 1,100,000</div>
                        <div className="text-gray-400 text-xs line-through">K 1,290,000</div>
                    </div>
                    
                    {/* Divider */}
                    <div className="hidden md:block w-[1px] bg-gray-200 h-12 self-center"></div>

                    {/* Option 2 */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="border border-gray-300 rounded px-2 py-0.5 text-[10px] text-gray-500 w-fit mb-1 bg-white">256 GB</div>
                        <div className="text-[#D32F2F] font-bold text-3xl tracking-tight">K 1,500,000</div>
                        <div className="text-gray-400 text-xs line-through">K 1,690,000</div>
                    </div>
                </div>

                <a href="#" className="mt-6 md:self-end text-black font-bold border-b-2 border-black text-sm hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-colors pb-0.5">Shop Now</a>
             </div>

             {/* Navigation Right */}
             <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg cursor-pointer z-20 border border-gray-100 hover:bg-gray-50">
                <span className="material-symbols-outlined text-xl">chevron_right</span>
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KillerDealSection;