import React, { useRef } from 'react';

const brands = [
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png" },
  { name: "Xiaomi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2048px-Xiaomi_logo_%282021-%29.svg.png" },
  { name: "OnePlus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/OnePlus_logo_2020.svg/2560px-OnePlus_logo_2020.svg.png" },
  { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sony_logo.svg/2560px-Sony_logo.svg.png" },
  { name: "Huawei", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Huawei_Logo.svg/2560px-Huawei_Logo.svg.png" },
  { name: "OPPO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/OPPO_Logo_2019.svg/2560px-OPPO_Logo_2019.svg.png" },
];

const BrandSection: React.FC = () => {
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
    <section className="w-full px-4 py-8 bg-[#E0E7EB] border-t border-gray-300">
      <div className="max-w-[1600px] mx-auto w-full relative px-2">
        <div className="flex items-center justify-between px-2 pb-4">
          <h2 className="text-[#111318] text-[22px] font-bold leading-tight tracking-[-0.015em]">Shop by Brand</h2>
          <a className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">
            View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
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
            className="flex overflow-x-auto gap-4 py-2 px-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {brands.map((brand, index) => (
              <a key={index} className="min-w-[160px] h-[80px] bg-white rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 snap-center p-6" href="#">
                 <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;