import React, { useRef } from 'react';

const offers = [
  {
    id: 1,
    image: "https://placehold.co/600x330/00953B/FFFFFF.png?text=KBank",
    customContent: (
      <div className="flex flex-col justify-center h-full">
         <span className="text-[#111318] font-bold text-[15px] leading-tight">20 Branches all over country</span>
         <span className="text-blue-600 font-bold text-sm mt-1 cursor-pointer hover:underline uppercase tracking-wide">Store Locator →</span>
      </div>
    ),
  },
  {
    id: 2,
    image: "https://placehold.co/600x330/F3F4F6/0050F0.png?text=ttb",
    customContent: (
      <div className="flex flex-col justify-center h-full">
         <span className="text-[#111318] font-bold text-[15px] leading-tight">Aeon/ AYA/ CB Installments</span>
         <span className="text-blue-600 font-bold text-sm mt-1 cursor-pointer hover:underline uppercase tracking-wide">Loan Calculator →</span>
      </div>
    ),
  },
  {
    id: 3,
    image: "https://placehold.co/600x330/F3F4F6/0B2F5E.png?text=UOB",
    customContent: (
      <div className="flex flex-col justify-center h-full">
         <span className="text-[#111318] font-bold text-[15px] leading-tight">Free delivery for orders above 7000 K</span>
         <span className="text-blue-600 font-bold text-sm mt-1 cursor-pointer hover:underline uppercase tracking-wide">Track Order →</span>
      </div>
    ),
  },
  {
    id: 4,
    image: "https://placehold.co/600x330/000000/FFFFFF.png?text=The+1",
    customContent: (
      <div className="flex flex-col justify-center h-full">
         <span className="text-[#111318] font-bold text-[15px] leading-tight">Hotline No: 09751234567</span>
         <span className="text-blue-600 font-bold text-sm mt-1 cursor-pointer hover:underline uppercase tracking-wide">Call Now →</span>
      </div>
    ),
  },
  {
    id: 5,
    image: "https://placehold.co/600x330/003D7C/FFFFFF.png?text=BBL",
    customContent: (
      <div className="flex flex-col justify-center h-full">
         <span className="text-[#111318] font-bold text-[15px] leading-tight">Delivery, Orders and Returns, Payment Information</span>
         <span className="text-blue-600 font-bold text-sm mt-1 cursor-pointer hover:underline uppercase tracking-wide">See All FAQs →</span>
      </div>
    ),
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
                     {/* Top Half - Image */}
                     <div className="h-[55%] w-full relative">
                        <img src={offer.image} alt="Offer" className="w-full h-full object-cover" />
                     </div>
                     {/* Bottom Half - Offer Text */}
                     <div className="h-[45%] w-full p-4 flex flex-col justify-center bg-white relative">
                        {offer.customContent}
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