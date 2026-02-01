import React from 'react';

const BrandSection: React.FC = () => {
  return (
    <section className="w-full px-4 lg:px-40 py-8 flex justify-center bg-[#E0E7EB] border-t border-gray-300">
      <div className="flex flex-col max-w-[1200px] flex-1 gap-6 relative">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-[#111318] text-[22px] font-bold leading-tight tracking-[-0.015em]">Shop by Brand</h2>
          <a className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">
            View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        
        <div className="relative px-4 group/slider">
          <button className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 size-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-slate-600 hover:text-primary transition-all">
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 size-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-slate-600 hover:text-primary transition-all">
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>

          <div className="flex overflow-x-auto gap-4 no-scrollbar pb-1 snap-x snap-mandatory">
            <a className="min-w-[160px] h-[80px] bg-white rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 snap-center" href="#">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">Apple</span>
            </a>
            <a className="min-w-[160px] h-[80px] bg-white rounded-lg border border-gray-200 hover:border-[#1428a0] hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 snap-center" href="#">
              <span className="text-2xl font-bold text-[#1428a0] tracking-tighter">Samsung</span>
            </a>
            <a className="min-w-[160px] h-[80px] bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 snap-center" href="#">
              <span className="text-2xl font-bold tracking-tighter">
                <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
              </span>
            </a>
            <a className="min-w-[160px] h-[80px] bg-white rounded-lg border border-gray-200 hover:border-[#FF6900] hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 snap-center" href="#">
              <span className="text-2xl font-bold text-[#FF6900] tracking-tight">Xiaomi</span>
            </a>
            <a className="min-w-[160px] h-[80px] bg-white rounded-lg border border-gray-200 hover:border-[#F50514] hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 snap-center" href="#">
              <span className="text-2xl font-bold text-[#F50514] tracking-tight">OnePlus</span>
            </a>
            <a className="min-w-[160px] h-[80px] bg-white rounded-lg border border-gray-200 hover:border-black hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 snap-center" href="#">
              <span className="text-2xl font-bold text-black tracking-widest serif">SONY</span>
            </a>
            <a className="min-w-[160px] h-[80px] bg-white rounded-lg border border-gray-200 hover:border-[#C7000B] hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 snap-center" href="#">
              <span className="text-2xl font-bold text-[#C7000B] tracking-tight">Huawei</span>
            </a>
            <a className="min-w-[160px] h-[80px] bg-white rounded-lg border border-gray-200 hover:border-[#046A38] hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 snap-center" href="#">
              <span className="text-2xl font-bold text-[#046A38] tracking-tight italic">OPPO</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;