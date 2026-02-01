import React from 'react';

const NewReleaseSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-8 bg-pink-50/20">
      <div className="max-w-[1600px] mx-auto w-full relative">
        <div className="flex items-center justify-between px-4 pb-4">
          <h2 className="text-[#111318] text-[22px] font-bold leading-tight tracking-[-0.015em]">Pre-order & New Release</h2>
        </div>
        
        <div className="relative group/slider">
          <button className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black shadow-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black shadow-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>

          <div className="flex overflow-x-auto gap-4 px-2 pb-4 no-scrollbar snap-x snap-mandatory">
            
            {/* Feature Card: Lenovo YOGA */}
            <div className="shrink-0 snap-start w-[400px] h-[520px] rounded-[24px] overflow-hidden shadow-lg relative bg-[#dcd0d8] group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-b from-[#e8dee4] to-[#c7b9c2] z-0"></div>
              <div className="relative z-10 flex flex-col h-full p-8 text-[#2d2d2d]">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-2xl font-bold tracking-tight">Lenovo<br /><span className="font-light">YOGA</span></span>
                  <div className="bg-[#e93923] text-white text-xs font-bold px-1 py-4 flex items-center justify-center writing-vertical-rl rotate-180 h-16">Lenovo</div>
                </div>
                <div className="text-center my-4 relative z-10">
                  <h3 className="text-3xl font-bold text-[#4a3b45] leading-tight mb-2">So bright.<br />So beautiful.</h3>
                  <p className="text-sm text-[#4a3b45]/80">Up to 14" 2.8K PureSight Pro OLED display</p>
                </div>
                <div className="relative flex-1 flex items-center justify-center my-4">
                  <span className="absolute text-[80px] font-black text-purple-300/40 rotate-[-15deg] select-none pointer-events-none z-0">YOGA</span>
                  <img
                    alt="Lenovo Yoga Laptop"
                    className="relative z-10 w-[300px] transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKAGRe29d2-dfATxZdEIL9Kj1jty2JYBEtqOk_-FxOzsPF7nmMNaNj4IIhNXXNTFoT-8YTN3Tn4AALbGMh_dOSkQgMWSDYI-VqhIbk5y-Km9_guamR9l779C9P7hnttNlKu-jdyNpKfv6Uhs8nTYBvQWqqNutI3Dl-aIrTMDk3VbViSgjlgNzEp-Z72CrtLOpdMfrnrSiyrNOQ4pi3WzMmVkAadp_j83cHK1hMcWt5AxkyvKRCGCwEc_DcWIDZHZ2g1H4V7Ey9lOM"
                  />
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <h4 className="font-bold text-xl text-[#2d2d2d]">Yoga Slim 7</h4>
                    <p className="text-sm text-[#555]">(14", 10)</p>
                    <div className="mt-2">
                      <span className="text-xs font-bold text-[#555] mr-1">NOW</span>
                      <span className="text-3xl font-black text-[#2d2d2d]">$1,699</span>
                      <div className="text-xs text-[#555] line-through decoration-red-500">SRP $1,799</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <img alt="AMD Ryzen AI" className="h-6 object-contain mb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaSKDxvGt-rxh6NJszuvmeQx9caFblCaw2K-gn8Irh5vHqrwBEpod5JrKeOF343OzDskBwJRkKFWeJM9m43OFIq36InaYNElqFOVtvuQL-XJ9Lv3mnG___REDg9tn0GRE5EIpRWyBXGlWCx5yscOl_CqPvLugrzOIrvj_vgYL62cvueMY5HD3SJkrImf1mtOINJLVQw9Jw1LCui_HVT4pdiYs5BvJE3F8HORyaNXhw6QF9zY5JBWiPgaQ3WiIiRX6y4kIMr8zO-ZA" />
                    <span className="text-[10px] font-bold text-[#555]">Copilot+ PC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 1: Xiaomi */}
            <div className="shrink-0 snap-start w-[260px] h-[520px] bg-white rounded-[24px] border border-gray-100 flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative h-[240px] p-6 bg-gray-50 flex items-center justify-center">
                <span className="absolute top-4 left-4 z-10 bg-[#ffd1dc] text-[#592e36] text-[10px] font-bold px-2 py-1 rounded-md">Only 10 left!</span>
                <button className="absolute top-4 right-4 z-10 text-blue-600 hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined">favorite_border</span>
                </button>
                <div className="w-full h-full bg-center bg-contain bg-no-repeat group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTUvOMed3_er_3M8Bc6O0th1sjKAUKezbvfHBGrwkVj6J8UjiCaJFBm4jmLpl5NcBTUnW0Ml2CVJYqIS5od7Kao-7vTt3LAXBrY6AyiX-ExojUI0OHZDlrrtm876DKbXg9cSSZVvBkNU61b4pQdKf-Al4LsqHgwZMIfigBsptG_nR2bPnniTAIBFzMmD-99nkj-mcamSRpnBTPWt1YAjhU6hoEjI5hMjwtxrjhLDXgut3jKsz5g9CA0_0zTcY2-9jrE2l_7zMl0Pw")' }}></div>
              </div>
              <div className="flex flex-col flex-1 p-4">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">XIAOMI</p>
                <h3 className="text-[#111318] text-[14px] font-bold leading-snug mb-2 line-clamp-2">Xiaomi Redmi Note 15 Pro 12+256GB Black 5G</h3>
                <div className="mb-3">
                  <span className="inline-block w-6 h-4 bg-red-100 rounded"></span>
                </div>
                <div className="mt-auto">
                  <div className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded w-fit mb-2">VC Cashback: $8.98</div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-[#111318] text-xl font-bold">S$449</span>
                    <span className="text-[#111318] text-xs font-bold">.00</span>
                  </div>
                  <button className="w-full py-2.5 rounded-[6px] border border-black text-black text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2: Xiaomi Mist Purple */}
            <div className="shrink-0 snap-start w-[260px] h-[520px] bg-white rounded-[24px] border border-gray-100 flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative h-[240px] p-6 bg-gray-50 flex items-center justify-center">
                <span className="absolute top-4 left-4 z-10 bg-[#ffd1dc] text-[#592e36] text-[10px] font-bold px-2 py-1 rounded-md">Only 6 left!</span>
                <button className="absolute top-4 right-4 z-10 text-blue-600 hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined">favorite_border</span>
                </button>
                <div className="w-full h-full bg-center bg-contain bg-no-repeat group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDN4xmdamghD4U13saHCkNLlAVQKP3L2s9TlcBrN7mvLebP10Eh_VgKqNpnn3d_R4RBbsZsLyOnTv3m9grXPj3I65V53NyYfOQQWrYjzMev_AZ-IwJxrxQJxsxx_9I_fLNhtcZZbEXIsATCcdeKtePn5F87NZrzpT7t4b9Fb1SZNJ9SVCWAX78u6jwB0tey1L3et0LYoocxqKbAJJXRMvZLogrbaFh43P0WNPDTpAgFnbr6aibWJ50qAInprOXtWYwJtYDngZu3JuA")' }}></div>
              </div>
              <div className="flex flex-col flex-1 p-4">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">XIAOMI</p>
                <h3 className="text-[#111318] text-[14px] font-bold leading-snug mb-2 line-clamp-2">Xiaomi Redmi Note 15 8+256GB Mist Purple...</h3>
                <div className="mt-auto">
                  <div className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded w-fit mb-2">VC Cashback: $6.78</div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-[#111318] text-xl font-bold">S$339</span>
                    <span className="text-[#111318] text-xs font-bold">.00</span>
                  </div>
                  <button className="w-full py-2.5 rounded-[6px] border border-black text-black text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3: Lenovo ThinkPad */}
            <div className="shrink-0 snap-start w-[260px] h-[520px] bg-white rounded-[24px] border border-gray-100 flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative h-[240px] p-6 bg-gray-50 flex items-center justify-center">
                <span className="absolute top-4 left-4 z-10 bg-[#ffd1dc] text-[#592e36] text-[10px] font-bold px-2 py-1 rounded-md">Only 7 left!</span>
                <button className="absolute top-4 right-4 z-10 text-blue-600 hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined">favorite_border</span>
                </button>
                <div className="w-full h-full bg-center bg-contain bg-no-repeat group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzWyNdrPgsNl3RzxSvdGdxKLvgzZLpX0mLlPkFqmqf2BJmK5Us6-ff8gl6wzZtJo86iDyURuhaq5WB6VqzRmw3E65MfKPlk2Kkh5w7lpm-12DEs44vtsj4D-a_K7dYjfndNEyQkFhatN5HAzcANY9pZu4D5dpMLTVzYIi1ol60Ug-yg6cabB6PjSJLVaYVCpOmtWHis5R78lLXHIohxahWIGk8dvU10uerLmSxRCtEJEQDoelKpiYhKZ2g_n3JfCpbOonT5aqmi6M")' }}></div>
              </div>
              <div className="flex flex-col flex-1 p-4">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">LENOVO</p>
                <h3 className="text-[#111318] text-[14px] font-bold leading-snug mb-2 line-clamp-2">[Online Exclusive] Lenovo ThinkPad X9...</h3>
                <div className="mt-auto">
                  <div className="flex flex-col mb-4">
                    <div className="flex items-baseline">
                      <span className="text-[#e93923] text-xl font-bold">S$2,399</span>
                      <span className="text-[#e93923] text-xs font-bold">.00</span>
                    </div>
                    <span className="text-gray-400 text-[11px] line-through decoration-gray-400 decoration-1">S$3,399.00</span>
                  </div>
                  <button className="w-full py-2.5 rounded-[6px] border border-black text-black text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 4: Samsung Tab */}
            <div className="shrink-0 snap-start w-[260px] h-[520px] bg-white rounded-[24px] border border-gray-100 flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative h-[240px] p-6 bg-gray-50 flex items-center justify-center">
                <span className="absolute top-4 left-4 z-10 bg-[#ffd1dc] text-[#592e36] text-[10px] font-bold px-2 py-1 rounded-md">Only 8 left!</span>
                <button className="absolute top-4 right-4 z-10 text-blue-600 hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined">favorite_border</span>
                </button>
                <div className="w-full h-full bg-center bg-contain bg-no-repeat group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDN4xmdamghD4U13saHCkNLlAVQKP3L2s9TlcBrN7mvLebP10Eh_VgKqNpnn3d_R4RBbsZsLyOnTv3m9grXPj3I65V53NyYfOQQWrYjzMev_AZ-IwJxrxQJxsxx_9I_fLNhtcZZbEXIsATCcdeKtePn5F87NZrzpT7t4b9Fb1SZNJ9SVCWAX78u6jwB0tey1L3et0LYoocxqKbAJJXRMvZLogrbaFh43P0WNPDTpAgFnbr6aibWJ50qAInprOXtWYwJtYDngZu3JuA")' }}></div>
              </div>
              <div className="flex flex-col flex-1 p-4">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">SAMSUNG</p>
                <h3 className="text-[#111318] text-[14px] font-bold leading-snug mb-2 line-clamp-2">Samsung Galaxy Tab A11+ 6+128GB Wi-Fi...</h3>
                <div className="mt-auto">
                  <div className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded w-fit mb-2">VC Cashback: $5.76</div>
                  <div className="flex flex-col mb-4">
                    <div className="flex items-baseline">
                      <span className="text-[#e93923] text-xl font-bold">S$288</span>
                      <span className="text-[#e93923] text-xs font-bold">.00</span>
                    </div>
                    <span className="text-gray-400 text-[11px] line-through decoration-gray-400 decoration-1">S$398.00</span>
                  </div>
                  <button className="w-full py-2.5 rounded-[6px] border border-black text-black text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewReleaseSection;