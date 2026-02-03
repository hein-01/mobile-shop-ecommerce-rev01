import React, { useRef } from 'react';

const PromotionsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full px-4 pt-12 pb-8 bg-pink-50/50">
      <div className="max-w-[1600px] mx-auto w-full relative">
        <div className="flex items-center justify-between px-4 pb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-[#111318] text-[22px] font-bold leading-tight tracking-[-0.015em]">Promotions</h2>
            <a className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">
              View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="relative group/slider">
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-700 hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-700 hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 px-4 pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            
            {/* Lenovo Card */}
            <div className="shrink-0 snap-start w-[23%] min-w-[280px] h-[280px] rounded-[24px] overflow-hidden shadow-lg relative bg-[#a81c1c] group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d32f2f] to-[#b71c1c] z-0"></div>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/flower-pattern.png')]"></div>
              <div className="relative z-10 flex flex-col h-full p-5 text-white">
                <div className="flex justify-between items-start">
                  <span className="bg-yellow-400 text-[#b71c1c] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Lenovo</span>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-medium opacity-80">Up to</span>
                    <span className="text-3xl font-black text-yellow-300 leading-none">K80</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Voucher</span>
                  </div>
                </div>
                <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden my-2">
                  <img
                    alt="Lenovo Laptop"
                    className="w-full h-full object-contain drop-shadow-xl transform scale-125"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzWyNdrPgsNl3RzxSvdGdxKLvgzZLpX0mLlPkFqmqf2BJmK5Us6-ff8gl6wzZtJo86iDyURuhaq5WB6VqzRmw3E65MfKPlk2Kkh5w7lpm-12DEs44vtsj4D-a_K7dYjfndNEyQkFhatN5HAzcANY9pZu4D5dpMLTVzYIi1ol60Ug-yg6cabB6PjSJLVaYVCpOmtWHis5R78lLXHIohxahWIGk8dvU10uerLmSxRCtEJEQDoelKpiYhKZ2g_n3JfCpbOonT5aqmi6M"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium opacity-90">Smarter technology for all</p>
                  <p className="text-[9px] opacity-60 mt-1">Ends 8 Feb 2026</p>
                </div>
              </div>
            </div>

            {/* JBL Card */}
            <div className="shrink-0 snap-start w-[23%] min-w-[280px] h-[280px] rounded-[24px] overflow-hidden shadow-lg relative bg-[#3e0e0e] group cursor-pointer">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#5e1b1b] via-[#3e0e0e] to-[#1a0505] z-0"></div>
              <div className="relative z-10 flex flex-col h-full p-5 text-white">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-xl italic tracking-tighter">JBL</span>
                    <span className="w-[1px] h-4 bg-white/30"></span>
                    <span className="text-[10px] tracking-wide uppercase">Challenger</span>
                  </div>
                </div>
                <div className="text-center mb-2">
                  <h3 className="text-lg font-bold text-yellow-400 leading-tight">Clip Into the Festivities</h3>
                  <p className="text-[9px] text-gray-300 mt-1">Bring the beat to every reunion.</p>
                </div>
                <div className="flex-1 flex items-center justify-center relative">
                  <div className="absolute w-40 h-40 bg-red-500/10 blur-2xl rounded-full"></div>
                  <img
                    alt="JBL Earbuds"
                    className="w-40 relative z-10 transform group-hover:rotate-6 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnP7Il62zSLrYwzO5B-fwrpMA3o8KckvPSqtgHODL6nB9rnA-KF9jed41wezVR1hlFznCxTUCbVfwNCX80Dq9FwoeWzrsMCv4JoFiQ5ns_zHNcB8rXatuHtFfszuP2PTrtvqI2qnKj_vVRJilqIG2g6xK30uzAvYBfb1j4lSJJds2OCOexgHoyRGozUs0g3y--KOfJ5eNMG_bIJbDASodXE5hBnPxqSxxiblg2S02yvoAfkkXQwThsu4lmEF6yrZ1DMS0ZSYbQbUc"
                  />
                </div>
                <div className="mt-auto">
                  <p className="text-center text-xs font-bold uppercase tracking-widest text-white/90">Soundgear Clip</p>
                </div>
              </div>
            </div>

            {/* Valore Card */}
            <div className="shrink-0 snap-start w-[23%] min-w-[280px] h-[280px] rounded-[24px] overflow-hidden shadow-lg relative bg-[#f5f5f5] group cursor-pointer border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-b from-[#fffbeb] to-[#fff7ed] z-0"></div>
              <div className="relative z-10 flex flex-col h-full p-5 text-gray-800">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-gray-400 font-bold text-xs tracking-widest uppercase">Valore</span>
                  <span className="bg-orange-100 text-orange-600 text-[9px] font-bold px-1.5 py-0.5 rounded">PD20W</span>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-black text-orange-500 leading-none uppercase">Year of<br />The Horse</h3>
                  <p className="text-[9px] text-gray-500 mt-1 font-medium">Built for leaders who never slow down.</p>
                </div>
                <div className="flex items-end justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 line-through">U.P. K74.90</span>
                    <span className="text-2xl font-black text-orange-500">K54.90</span>
                  </div>
                  <img
                    alt="Valore Powerbank"
                    className="w-28 transform group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBsF5vqqY-CVOEP9MYvbJm_y289a3Sr_V9J4Gbe4cRrGx7wOpGHFmL5fb5DLfH2bJlDk0i87gFo0zqZzjTdVFHLTnWHnr2HBUelFQ1zBmF5x_PpbZp0ii-UsRbYUVJDZ7Hx2-yeiVbGcUEl8dbmIgc1Dpjd13Z4-OElVZhH98Ef63vrCsAf7p1KwdMCAQ7b4Vv2EqwOLJGgmO14Zyui-FvCtXlQGm6DtS3aIdQdGESvNS8ZfmKO7s75CkypS7HGHVhHQ-MTsBmLSM"
                  />
                </div>
              </div>
            </div>

            {/* ASUS Card */}
            <div className="shrink-0 snap-start w-[23%] min-w-[280px] h-[280px] rounded-[24px] overflow-hidden shadow-lg relative bg-[#001e3c] group cursor-pointer">
              <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#0a192f] via-[#001e3c] to-[#0d2538] z-0"></div>
              <div className="relative z-10 flex flex-col h-full p-5 text-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg tracking-tight">ASUS</span>
                  <span className="text-[9px] bg-blue-900/50 px-1.5 py-0.5 rounded border border-blue-700/50">TUF GAMING</span>
                </div>
                <div className="text-center relative z-10">
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 drop-shadow-sm">2026</h3>
                  <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-2">Happy New Year</p>
                </div>
                <div className="flex-1 flex items-center justify-center -mt-2">
                  <img
                    alt="Asus Laptop"
                    className="w-48 transform group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzWyNdrPgsNl3RzxSvdGdxKLvgzZLpX0mLlPkFqmqf2BJmK5Us6-ff8gl6wzZtJo86iDyURuhaq5WB6VqzRmw3E65MfKPlk2Kkh5w7lpm-12DEs44vtsj4D-a_K7dYjfndNEyQkFhatN5HAzcANY9pZu4D5dpMLTVzYIi1ol60Ug-yg6cabB6PjSJLVaYVCpOmtWHis5R78lLXHIohxahWIGk8dvU10uerLmSxRCtEJEQDoelKpiYhKZ2g_n3JfCpbOonT5aqmi6M"
                  />
                </div>
                <div className="mt-auto flex justify-between items-end border-t border-blue-800/50 pt-3">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-blue-300">TUF Gaming A16</span>
                    <span className="text-lg font-bold text-white">K1,399</span>
                  </div>
                  <div className="bg-blue-600 p-1.5 rounded-lg">
                    <span className="material-symbols-outlined text-white text-sm">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
              
            {/* Sony Card */}
            <div className="shrink-0 snap-start w-[11.5%] min-w-[140px] h-[280px] rounded-l-[24px] overflow-hidden shadow-lg relative bg-[#2a1b3d] group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-br from-[#44318d] to-[#2a1b3d] z-0"></div>
                <div className="relative z-10 flex flex-col h-full p-5 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-lg tracking-tight">Sony</span>
                    </div>
                    <div className="text-center relative z-10">
                        <h3 className="text-2xl font-black text-white drop-shadow-sm">Pro...</h3>
                    </div>
                    <div className="flex-1 flex items-center justify-center -mt-2">
                        <img
                        alt="Sony Phone"
                        className="w-40 transform group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(138,43,226,0.3)]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyqlsLaqAYmz2FdRqidBNy03GbCF8eGtSHcdoSLhj6J8qaEgX5kvXkVXhy8Iq7xYY-gvp7qVg9LnCzwxhDAIIqbLb02eyoqVULnTvFebAFTjWcWsXlYBSv3SGO_ZJ9RBXEawiNghwyyIAIZHbYWC-NRQrrYtCRSWB8MwQzf9uoP2mgS_K4KeFTjMuw2LQy-mQhw0v5J0K36XxujMaiSSIYuAemnlz50d0IxUtfFV3pCoqK8ZRwQzDoQb1vCidBHKZDa4yFFjqslgM"
                        />
                    </div>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;