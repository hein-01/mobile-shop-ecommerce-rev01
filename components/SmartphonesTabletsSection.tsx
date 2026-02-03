import React, { useRef } from 'react';

const products = [
  {
    brand: "XIAOMI",
    name: "Xiaomi Redmi Note 13",
    warranty: "1.0 year",
    specs: ["8/256GB"],
    colors: ["#000000", "#32CD32"],
    priceOld: "K599.00",
    priceNew: "499",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTUvOMed3_er_3M8Bc6O0th1sjKAUKezbvfHBGrwkVj6J8UjiCaJFBm4jmLpl5NcBTUnW0Ml2CVJYqIS5od7Kao-7vTt3LAXBrY6AyiX-ExojUI0OHZDlrrtm876DKbXg9cSSZVvBkNU61b4pQdKf-Al4LsqHgwZMIfigBsptG_nR2bPnniTAIBFzMmD-99nkj-mcamSRpnBTPWt1YAjhU6hoEjI5hMjwtxrjhLDXgut3jKsz5g9CA0_0zTcY2-9jrE2l_7zMl0Pw"
  },
  {
    brand: "SAMSUNG",
    name: "Samsung Galaxy Tab A9+",
    warranty: "1.0 year",
    specs: ["4/64GB"],
    colors: ["#C0C0C0", "#000000"],
    priceOld: "K799.00",
    priceNew: "650",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN4xmdamghD4U13saHCkNLlAVQKP3L2s9TlcBrN7mvLebP10Eh_VgKqNpnn3d_R4RBbsZsLyOnTv3m9grXPj3I65V53NyYfOQQWrYjzMev_AZ-IwJxrxQJxsxx_9I_fLNhtcZZbEXIsATCcdeKtePn5F87NZrzpT7t4b9Fb1SZNJ9SVCWAX78u6jwB0tey1L3et0LYoocxqKbAJJXRMvZLogrbaFh43P0WNPDTpAgFnbr6aibWJ50qAInprOXtWYwJtYDngZu3JuA"
  },
  {
    brand: "APPLE",
    name: "iPad Air 5",
    warranty: "1.0 year",
    specs: ["64GB"],
    colors: ["#E0E5C9", "#282C31"],
    priceOld: "K1,899.00",
    priceNew: "1,750",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyqlsLaqAYmz2FdRqidBNy03GbCF8eGtSHcdoSLhj6J8qaEgX5kvXkVXhy8Iq7xYY-gvp7qVg9LnCzwxhDAIIqbLb02eyoqVULnTvFebAFTjWcWsXlYBSv3SGO_ZJ9RBXEawiNghwyyIAIZHbYWC-NRQrrYtCRSWB8MwQzf9uoP2mgS_K4KeFTjMuw2LQy-mQhw0v5J0K36XxujMaiSSIYuAemnlz50d0IxUtfFV3pCoqK8ZRwQzDoQb1vCidBHKZDa4yFFjqslgM"
  },
  {
    brand: "OPPO",
    name: "OPPO Pad Air",
    warranty: "1.0 year",
    specs: ["4/64GB"],
    colors: ["#C0C0C0"],
    priceOld: "K699.00",
    priceNew: "599",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN4xmdamghD4U13saHCkNLlAVQKP3L2s9TlcBrN7mvLebP10Eh_VgKqNpnn3d_R4RBbsZsLyOnTv3m9grXPj3I65V53NyYfOQQWrYjzMev_AZ-IwJxrxQJxsxx_9I_fLNhtcZZbEXIsATCcdeKtePn5F87NZrzpT7t4b9Fb1SZNJ9SVCWAX78u6jwB0tey1L3et0LYoocxqKbAJJXRMvZLogrbaFh43P0WNPDTpAgFnbr6aibWJ50qAInprOXtWYwJtYDngZu3JuA"
  },
  {
    brand: "VIVO",
    name: "Vivo Y100 5G",
    warranty: "1.0 year",
    specs: ["8/256GB"],
    colors: ["#32CD32", "#87CEEB"],
    priceOld: "K899.00",
    priceNew: "799",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTUvOMed3_er_3M8Bc6O0th1sjKAUKezbvfHBGrwkVj6J8UjiCaJFBm4jmLpl5NcBTUnW0Ml2CVJYqIS5od7Kao-7vTt3LAXBrY6AyiX-ExojUI0OHZDlrrtm876DKbXg9cSSZVvBkNU61b4pQdKf-Al4LsqHgwZMIfigBsptG_nR2bPnniTAIBFzMmD-99nkj-mcamSRpnBTPWt1YAjhU6hoEjI5hMjwtxrjhLDXgut3jKsz5g9CA0_0zTcY2-9jrE2l_7zMl0Pw"
  },
  {
    brand: "SAMSUNG",
    name: "Galaxy S23 FE",
    warranty: "1.0 year",
    specs: ["8/128GB"],
    colors: ["#32CD32", "#000000"],
    priceOld: "K1,299.00",
    priceNew: "1,099",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyqlsLaqAYmz2FdRqidBNy03GbCF8eGtSHcdoSLhj6J8qaEgX5kvXkVXhy8Iq7xYY-gvp7qVg9LnCzwxhDAIIqbLb02eyoqVULnTvFebAFTjWcWsXlYBSv3SGO_ZJ9RBXEawiNghwyyIAIZHbYWC-NRQrrYtCRSWB8MwQzf9uoP2mgS_K4KeFTjMuw2LQy-mQhw0v5J0K36XxujMaiSSIYuAemnlz50d0IxUtfFV3pCoqK8ZRwQzDoQb1vCidBHKZDa4yFFjqslgM"
  }
];

const SmartphonesTabletsSection: React.FC = () => {
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
    <section className="w-full px-4 py-8 bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto w-full relative">
        <div className="flex items-center justify-between px-4 pb-4">
          <h2 className="text-[#111318] text-[22px] font-bold leading-tight tracking-[-0.015em]">Smartphones & Tablets</h2>
          <a className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">
            View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        
        <div className="relative group/slider">
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-700 hover:text-primary transition-colors cursor-pointer hidden md:flex"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-700 hover:text-primary transition-colors cursor-pointer hidden md:flex"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 px-2 pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {products.map((product, index) => (
              <div key={index} className="shrink-0 snap-start w-[260px]">
                <div className="group relative flex flex-col h-[480px] rounded-[20px] p-[2px] bg-gradient-to-b from-[#ff6b6b] to-[#4facfe] shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col h-full w-full bg-white rounded-[18px] overflow-hidden relative">
                    
                    {/* Image Area */}
                    <div className="relative w-full h-[220px] bg-gray-50 flex items-center justify-center p-0">
                      <button className="absolute top-3 right-3 z-10 text-gray-400 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined">favorite_border</span>
                      </button>
                      <div
                        className="w-full h-full bg-center bg-cover bg-no-repeat transform group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url("${product.image}")` }}
                      ></div>
                    </div>

                    {/* Details Area */}
                    <div className="flex flex-col flex-1 p-4 w-full">
                      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">{product.brand}</p>
                      <h3 className="text-[#111318] text-[14px] font-bold leading-snug mb-1 line-clamp-2 min-h-[42px]">{product.name}</h3>
                      <div className="inline-flex self-start bg-blue-50 text-blue-700 text-[8px] font-bold px-1.5 py-0.5 rounded mb-1.5">
                        Warranty: {product.warranty}
                      </div>
                      
                      {/* Specs Pills */}
                      <div className="flex gap-2 mb-1.5">
                        {product.specs.map((spec, i) => (
                          <button key={i} className="px-2 py-0.5 rounded-[6px] border border-gray-200 bg-white text-gray-500 text-[9px] font-bold hover:bg-gray-50 transition-colors">
                            {spec}
                          </button>
                        ))}
                      </div>

                      {/* Color Circles */}
                      <div className="flex gap-2 mb-3">
                        {product.colors.map((color, i) => (
                          <button
                            key={i}
                            className="w-3.5 h-3.5 rounded-full border border-gray-300 ring-1 ring-transparent ring-offset-1 focus:ring-blue-500"
                            style={{ backgroundColor: color }}
                          ></button>
                        ))}
                      </div>

                      {/* Footer Actions */}
                      <div className="mt-auto">
                        <div className="flex items-baseline mb-2">
                           {product.priceOld && (
                              <span className="text-gray-400 text-[11px] font-bold line-through mr-1.5">{product.priceOld}</span>
                           )}
                          <span className="text-red-600 text-xl font-bold">K{product.priceNew}</span>
                          <span className="text-red-600 text-xs font-bold ml-[1px]">.00</span>
                        </div>
                        <div className="flex gap-1.5 mb-2 w-full">
                          <div className="flex-1 flex items-center justify-center bg-stock-blue-bg border border-stock-blue-text/20 rounded-[6px] py-2 px-2 text-center">
                            <span className="text-[9px] font-bold text-stock-blue-text leading-none">Click & Collect</span>
                          </div>
                          <div className="flex-1 flex items-center justify-center bg-stock-green-bg border border-stock-green-text/20 rounded-[6px] py-2 px-2 text-center">
                            <span className="text-[9px] font-bold text-stock-green-text leading-none">Delivery</span>
                          </div>
                        </div>
                        <button className="w-full py-2.5 rounded-[6px] border-2 border-black text-black text-xs font-extrabold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartphonesTabletsSection;