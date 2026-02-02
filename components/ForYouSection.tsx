import React, { useRef } from 'react';

const offers = [
  {
    id: 1,
    bgColor: "bg-[#00953B]", // KBank Green
    logo: (
      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-3xl tracking-tight">KBank</span>
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center p-0.5 border border-white/30">
           <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center relative overflow-hidden">
             <span className="material-symbols-outlined text-[#00953B] text-xl filled">eco</span>
           </div>
        </div>
      </div>
    ),
    customContent: (
      <div className="flex flex-col justify-center h-full">
         <span className="text-[#111318] font-bold text-[15px] leading-tight">20 Branches all over country</span>
         <span className="text-blue-600 font-bold text-sm mt-1 cursor-pointer hover:underline">Store Locator →</span>
      </div>
    ),
    text: "",
    subText: "",
    date: ""
  },
  {
    id: 2,
    bgColor: "bg-[#F3F4F6]", // Light gray for ttb
    logo: (
      <div className="flex items-center gap-0.5">
        <span className="text-[#0050F0] font-bold text-4xl tracking-tighter lowercase leading-none">ttb</span>
        <div className="w-2 h-2 rounded-full bg-[#F05A28] mb-1 ml-0.5"></div>
      </div>
    ),
    customContent: (
      <div className="flex flex-col justify-center h-full">
         <span className="text-[#111318] font-bold text-[15px] leading-tight">Aeon/ AYA/ CB Installments</span>
         <span className="text-blue-600 font-bold text-sm mt-1 cursor-pointer hover:underline">Loan Calculator →</span>
      </div>
    ),
    text: "",
    subText: "",
    date: ""
  },
  {
    id: 3,
    bgColor: "bg-[#F3F4F6]", // Light gray for UOB
    logo: (
      <div className="flex items-center gap-3">
         <div className="flex gap-[3px]">
            <div className="w-[4px] h-6 bg-[#CE1126]"></div>
            <div className="w-[4px] h-6 bg-[#CE1126]"></div>
            <div className="w-[4px] h-6 bg-[#CE1126]"></div>
            <div className="w-[4px] h-6 bg-[#CE1126]"></div>
         </div>
         <span className="text-[#0B2F5E] font-bold text-3xl tracking-tight">UOB</span>
      </div>
    ),
    customContent: (
      <div className="flex flex-col justify-center h-full">
         <span className="text-[#111318] font-bold text-[15px] leading-tight">Free delivery for orders above 7000 K</span>
         <span className="text-blue-600 font-bold text-sm mt-1 cursor-pointer hover:underline">Track Order →</span>
      </div>
    ),
    text: "",
    subText: "",
    date: ""
  },
  {
    id: 4,
    bgColor: "bg-black", // Central The 1
    logo: (
      <div className="flex items-center gap-3">
        <span className="text-white font-bold text-4xl tracking-tighter">T1</span>
        <div className="flex flex-col text-white leading-none border-l border-white/30 pl-3">
          <span className="text-[10px] tracking-[0.2em] font-medium">CENTRAL</span>
          <span className="text-sm font-bold tracking-widest">THE 1</span>
        </div>
      </div>
    ),
    customContent: (
      <div className="flex flex-col justify-center h-full">
         <span className="text-[#111318] font-bold text-[15px] leading-tight">Hotline No: 09751234567</span>
         <span className="text-blue-600 font-bold text-sm mt-1 cursor-pointer hover:underline">Call Now →</span>
      </div>
    ),
    text: "",
    subText: "",
    date: ""
  },
  {
    id: 5,
    bgColor: "bg-[#003D7C]", // BBL Blue
    logo: (
      <span className="text-white font-bold text-3xl">BBL</span>
    ),
    customContent: (
      <div className="flex flex-col justify-center h-full">
         <span className="text-[#111318] font-bold text-[15px] leading-tight">Delivery, Orders and Returns, Payment Information</span>
         <span className="text-blue-600 font-bold text-sm mt-1 cursor-pointer hover:underline">See All FAQs →</span>
      </div>
    ),
    text: "",
    subText: "",
    date: ""
  }
];

const ForYouSection: React.FC = () => {
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
       <div className="max-w-[1600px] mx-auto w-full relative px-2">
          <div className="flex items-center justify-between px-2 pb-4">
            <h2 className="text-[#111318] text-[22px] font-bold leading-tight tracking-[-0.015em]">For You</h2>
          </div>

          <div className="relative group/slider">
             {/* Navigation buttons */}
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
                {offers.map((offer) => (
                  <div key={offer.id} className="shrink-0 snap-start w-[280px] md:w-[320px] rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white flex flex-col h-[180px] group cursor-pointer">
                     {/* Top Half - Brand Logo */}
                     <div className={`h-[55%] w-full ${offer.bgColor} flex items-center justify-center`}>
                        {offer.logo}
                     </div>
                     {/* Bottom Half - Offer Text */}
                     <div className="h-[45%] w-full p-4 flex flex-col justify-center bg-white relative">
                        {offer.customContent ? (
                          offer.customContent
                        ) : (
                          <>
                            <p className="text-[#111318] font-bold text-sm leading-snug line-clamp-2">
                              {offer.text} {offer.subText && <span className="font-bold">{offer.subText}</span>}
                            </p>
                            {offer.date && (
                              <p className="text-gray-500 text-xs mt-1 font-medium">{offer.date}</p>
                            )}
                          </>
                        )}
                     </div>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </section>
  )
}
export default ForYouSection;