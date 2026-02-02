import React, { useRef } from 'react';

const categories = [
  {
    name: "MatePad Mini",
    tag: "Ultra-slim",
    price: "$299",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN4xmdamghD4U13saHCkNLlAVQKP3L2s9TlcBrN7mvLebP10Eh_VgKqNpnn3d_R4RBbsZsLyOnTv3m9grXPj3I65V53NyYfOQQWrYjzMev_AZ-IwJxrxQJxsxx_9I_fLNhtcZZbEXIsATCcdeKtePn5F87NZrzpT7t4b9Fb1SZNJ9SVCWAX78u6jwB0tey1L3et0LYoocxqKbAJJXRMvZLogrbaFh43P0WNPDTpAgFnbr6aibWJ50qAInprOXtWYwJtYDngZu3JuA",
    bgColor: "bg-white",
    borderColor: "border-transparent",
  },
  {
    name: "Vision Smart",
    tag: "HarmonyOS",
    price: "$564",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5iUeUQ0qYJ9jz3MsggR39ekHCKww5hS2qWzcCdl3tN-g47In1ueAyc6pF2Mrt0XjgEDMxXtETgeyrxwBipUtvnlv4SsxKh6ag4VTWNP6FCVq5LtoGw45FvYQ4FyF5KEy7ttjcDFq9bZGOEynd0loitj-i6IOvS1OJ2JYdeTY_-TICXxxfZ9QlPZ3QoN-z44xWPn0X2t04oySKoka21_rU9g04yT9e_3EX75T5AlzCPnRmOk3Lt_gf2on3PG9a4CJ5pWkCyWI0YpE",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    borderColor: "border-blue-100/50",
  },
  {
    name: "Super Bank",
    tag: "100W Fast",
    price: "$49",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjSEOlL-150naiGeoD0910o2M0VbL74oA4LnRfdIO8Dsm-JlE3IVgd5utEwyM-Z0NxtGyqe0szz6AE_hciVi5ZX2WislVuTIloRGK-j0eBXtcuC2FcIfjgNuAMembt1AlOsMQVnZ9IoZ-PDCommGQKnKzuc-fNW_e-ffptESVELcWNViVGnQOUPhQe2PpW3Q_pDxHf03aR9hsC6mhJ-zOAUPfzw5FpG-tFU2y_xuwHXt5dIOFjw7f8_LVPI99q8MlBnKHTdfNLZwI",
    bgColor: "bg-white",
    borderColor: "border-transparent",
  },
  {
    name: "Router X3",
    tag: "Transparent",
    price: "$199",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1Lt5-dNpllp0Dl-dc_pCr4LJwVdx_4sHhnGQuWChPK1rsKbQmWjWS1h2bkBFadrAmpC8qtAEH_tv90rZ4ZEytOyssJRYD7ZCTy2xg0ghZQaMM7QHQl40NFIAuX2wEpyhyF_RDLWe5SoFb6Xs_P1FiwO1mROBBhfEbz51SEVhoGgr6q_3GcWKGaKs4llRfObNSJJOZNaa-R5OzULVIqspkpLK5TIKMRHjlFBSv2IVXjDfYLyID8Dw_Iob4a5liTLN_lpwFYw969hI",
    bgColor: "bg-white",
    borderColor: "border-transparent",
  },
  {
    name: "Watch GT 4",
    tag: "Fitness",
    price: "$249",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTUvOMed3_er_3M8Bc6O0th1sjKAUKezbvfHBGrwkVj6J8UjiCaJFBm4jmLpl5NcBTUnW0Ml2CVJYqIS5od7Kao-7vTt3LAXBrY6AyiX-ExojUI0OHZDlrrtm876DKbXg9cSSZVvBkNU61b4pQdKf-Al4LsqHgwZMIfigBsptG_nR2bPnniTAIBFzMmD-99nkj-mcamSRpnBTPWt1YAjhU6hoEjI5hMjwtxrjhLDXgut3jKsz5g9CA0_0zTcY2-9jrE2l_7zMl0Pw",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    borderColor: "border-purple-100/50",
  },
  {
    name: "MatePad Air",
    tag: "Lightweight",
    price: "$349",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN4xmdamghD4U13saHCkNLlAVQKP3L2s9TlcBrN7mvLebP10Eh_VgKqNpnn3d_R4RBbsZsLyOnTv3m9grXPj3I65V53NyYfOQQWrYjzMev_AZ-IwJxrxQJxsxx_9I_fLNhtcZZbEXIsATCcdeKtePn5F87NZrzpT7t4b9Fb1SZNJ9SVCWAX78u6jwB0tey1L3et0LYoocxqKbAJJXRMvZLogrbaFh43P0WNPDTpAgFnbr6aibWJ50qAInprOXtWYwJtYDngZu3JuA",
    bgColor: "bg-white",
    borderColor: "border-transparent",
  },
  {
    name: "Smart Speaker",
    tag: "Voice Control",
    price: "$89",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1Lt5-dNpllp0Dl-dc_pCr4LJwVdx_4sHhnGQuWChPK1rsKbQmWjWS1h2bkBFadrAmpC8qtAEH_tv90rZ4ZEytOyssJRYD7ZCTy2xg0ghZQaMM7QHQl40NFIAuX2wEpyhyF_RDLWe5SoFb6Xs_P1FiwO1mROBBhfEbz51SEVhoGgr6q_3GcWKGaKs4llRfObNSJJOZNaa-R5OzULVIqspkpLK5TIKMRHjlFBSv2IVXjDfYLyID8Dw_Iob4a5liTLN_lpwFYw969hI",
    bgColor: "bg-white",
    borderColor: "border-transparent",
  },
  {
    name: "Gaming Mouse",
    tag: "RGB Light",
    price: "$59",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjSEOlL-150naiGeoD0910o2M0VbL74oA4LnRfdIO8Dsm-JlE3IVgd5utEwyM-Z0NxtGyqe0szz6AE_hciVi5ZX2WislVuTIloRGK-j0eBXtcuC2FcIfjgNuAMembt1AlOsMQVnZ9IoZ-PDCommGQKnKzuc-fNW_e-ffptESVELcWNViVGnQOUPhQe2PpW3Q_pDxHf03aR9hsC6mhJ-zOAUPfzw5FpG-tFU2y_xuwHXt5dIOFjw7f8_LVPI99q8MlBnKHTdfNLZwI",
    bgColor: "bg-white",
    borderColor: "border-transparent",
  }
];

const CategoryCarousel: React.FC = () => {
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
    <section className="w-full bg-[#E0E7EB] pt-8 pb-4 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto relative px-4 lg:px-10">
        
        <h2 className="text-[#111318] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Shop by products</h2>

        {/* Nav Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 lg:-left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-primary transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">chevron_left</span>
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 lg:-right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-primary transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-3 no-scrollbar pb-1 snap-x snap-mandatory scroll-smooth"
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className={`min-w-[180px] h-[55px] ${item.bgColor} border ${item.borderColor || 'border-transparent'} rounded-xl p-2 pl-3 flex items-center justify-between shrink-0 snap-start shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group cursor-pointer`}
            >
              <div className="z-10 flex flex-col justify-center w-[60%]">
                <h3 className="text-xs font-black text-gray-900 leading-tight mb-0 group-hover:text-primary transition-colors truncate">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-[8px] mb-0 leading-tight truncate">{item.tag}</p>
                <p className="text-xs font-bold text-gray-900 leading-tight mt-0.5">{item.price}</p>
              </div>
              <div className="w-[40%] h-full relative flex items-center justify-center">
                <div
                  className="absolute right-[-10px] h-full w-full bg-contain bg-right bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url("${item.image}")` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;