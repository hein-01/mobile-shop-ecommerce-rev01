import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800 h-[72px] flex items-center shadow-md">
      <div className="w-full px-4 lg:px-8 flex justify-center h-full">
        <div className="flex items-center justify-between w-full max-w-[1400px] h-full">
          {/* Logo Section */}
          <div className="flex items-center gap-2 shrink-0 cursor-pointer">
            <div className="leaf-logo"></div>
            <span className="text-white text-3xl font-bold tracking-wide">AnyCall Mobile</span>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden xl:flex items-center gap-6 text-white text-[15px] font-bold tracking-wide h-full">
            <div className="h-full flex items-center relative group">
              <a
                className="h-full flex items-center hover:text-ais-green transition-colors border-b-4 border-transparent hover:border-ais-green px-1 cursor-pointer"
                href="#"
              >
                Phone
              </a>
              {/* Mega Menu Dropdown */}
              <div className="hidden group-hover:block absolute top-[72px] -left-20 w-[800px] bg-white shadow-2xl rounded-b-xl overflow-hidden z-[100] border-t-4 border-ais-green transform transition-all duration-200">
                <div className="flex">
                  <div className="w-1/3 bg-gray-50 p-4 border-r border-gray-100 flex flex-col gap-1">
                    <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-black text-white shadow-md text-left transition-all">
                      <span className="font-bold">Smartphones</span>
                      <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                    </button>
                    <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-200 text-left transition-all group/btn">
                      <span className="font-medium">Tablets</span>
                      <span className="material-symbols-outlined text-[20px] opacity-0 group-hover/btn:opacity-100">chevron_right</span>
                    </button>
                    <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-200 text-left transition-all group/btn">
                      <span className="font-medium">Wearables</span>
                      <span className="material-symbols-outlined text-[20px] opacity-0 group-hover/btn:opacity-100">chevron_right</span>
                    </button>
                    <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-200 text-left transition-all group/btn">
                      <span className="font-medium">Accessories</span>
                      <span className="material-symbols-outlined text-[20px] opacity-0 group-hover/btn:opacity-100">chevron_right</span>
                    </button>
                  </div>
                  <div className="w-2/3 p-6 flex flex-col">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 group/item transition-colors" href="#">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-ais-green group-hover/item:text-white transition-colors">
                          <span className="material-symbols-outlined">phone_iphone</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-900 font-bold text-sm">iPhones</span>
                          <span className="text-gray-500 text-xs">Latest Series</span>
                        </div>
                      </a>
                      <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 group/item transition-colors" href="#">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-ais-green group-hover/item:text-white transition-colors">
                          <span className="material-symbols-outlined">android</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-900 font-bold text-sm">Samsung Galaxy</span>
                          <span className="text-gray-500 text-xs">S Series & Foldables</span>
                        </div>
                      </a>
                      <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 group/item transition-colors" href="#">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-ais-green group-hover/item:text-white transition-colors">
                          <span className="material-symbols-outlined">smartphone</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-900 font-bold text-sm">Google Pixel</span>
                          <span className="text-gray-500 text-xs">AI Powered</span>
                        </div>
                      </a>
                      <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 group/item transition-colors" href="#">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-ais-green group-hover/item:text-white transition-colors">
                          <span className="material-symbols-outlined">grid_view</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-900 font-bold text-sm">Other Brands</span>
                          <span className="text-gray-500 text-xs">Xiaomi, OPPO, etc.</span>
                        </div>
                      </a>
                    </div>
                    {/* Promo Box within Menu */}
                    <div className="mt-auto relative rounded-lg overflow-hidden h-[120px] bg-[#1A3D36]">
                      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800"></div>
                      <div className="relative z-10 flex items-center justify-between p-5 h-full">
                        <div className="flex flex-col">
                          <span className="text-ais-green text-xs font-bold uppercase tracking-wider mb-1">New Arrivals</span>
                          <h3 className="text-white text-lg font-black leading-tight">Latest Flagships</h3>
                          <button className="mt-2 text-white text-xs font-bold border-b border-ais-green pb-0.5 w-fit hover:text-ais-green transition-colors">Shop Now</button>
                        </div>
                        <div className="w-24 h-24 bg-white/10 rounded-full blur-xl absolute -right-4 -bottom-4"></div>
                        <span className="material-symbols-outlined text-white/20 text-[80px] absolute -right-2 top-1/2 -translate-y-1/2 rotate-12">shopping_bag</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Nav Links */}
            {["Audio", "Tablet", "Wearables", "Home Appliances", "Laptops", "TV/Entertainment", "Support"].map((item) => (
              <a
                key={item}
                className="h-full flex items-center hover:text-ais-green transition-colors border-b-4 border-transparent hover:border-ais-green px-1"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4 shrink-0">
            <button className="text-white hover:text-ais-green transition-colors">
              <span className="material-symbols-outlined !text-[28px]">search</span>
            </button>
            <button className="relative text-white hover:text-ais-green transition-colors">
              <span className="material-symbols-outlined !text-[28px]">shopping_bag</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-600 text-[10px] font-bold flex items-center justify-center rounded-full text-white border border-black">0</span>
            </button>
            <button className="xl:hidden text-white ml-2">
              <span className="material-symbols-outlined !text-[32px]">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;