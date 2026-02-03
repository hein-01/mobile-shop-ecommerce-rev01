import React from 'react';

const ServicesBar: React.FC = () => {
  return (
    <section className="w-full bg-white border-b border-gray-200 pt-20 pb-6">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center gap-4">
        
        <div className="flex flex-col items-center gap-0">
          <h2 className="text-base md:text-xl font-medium text-center text-gray-800 tracking-tight">
            Price and inventory being updated in <span className="bg-gradient-to-r from-primary via-pink-500 to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent font-extrabold">real time</span>. We accept these payments.
          </h2>
          <p className="text-sm md:text-base text-gray-600 text-center font-medium opacity-100">
            စျေးနှုန်းနှင့်လက်ကျန်အရေအတွက်များသည် အပြင်ဆိုင်ခွဲများအားလုံးအတိုင်း အချိန်ကိုက်တူညီစွာပြောင်းလဲနေပြီးဖြစ်၍ စိတ်ချစွာဝယ်ယူနိုင်ပါသည်
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          
          {/* KBZ Bank */}
          <div className="h-8 md:h-10 w-8 md:w-10 flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer overflow-hidden rounded-xl">
            <img src="https://raw.githubusercontent.com/hein-01/mysvgs/main/Screen%20Shot%202026-02-02%20at%2012.47.27%20AM.png" alt="KBZ Bank" className="h-full w-full object-cover scale-[1.2]" />
          </div>

          {/* AYA Bank */}
          <div className="h-8 md:h-10 w-8 md:w-10 flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer overflow-hidden rounded-xl">
            <img src="https://raw.githubusercontent.com/hein-01/mysvgs/main/Screen%20Shot%202026-02-02%20at%2012.47.37%20AM.png" alt="AYA Bank" className="h-full w-full object-cover scale-[1.2]" />
          </div>

          {/* UAB Bank */}
          <div className="h-8 md:h-10 w-8 md:w-10 flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer overflow-hidden rounded-xl">
            <img src="https://raw.githubusercontent.com/hein-01/mysvgs/main/Screen%20Shot%202026-02-02%20at%2012.47.45%20AM.png" alt="UAB Bank" className="h-full w-full object-cover scale-[1.2]" />
          </div>

          {/* CB Bank */}
          <div className="h-8 md:h-10 w-8 md:w-10 flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer overflow-hidden rounded-xl">
            <img src="https://raw.githubusercontent.com/hein-01/mysvgs/main/Screen%20Shot%202026-02-02%20at%2012.47.58%20AM.png" alt="CB Bank" className="h-full w-full object-cover scale-[1.2]" />
          </div>

          {/* KBZPay */}
          <div className="h-8 md:h-10 w-8 md:w-10 flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer overflow-hidden rounded-xl">
            <img src="https://raw.githubusercontent.com/hein-01/mysvgs/main/Screen%20Shot%202026-02-02%20at%2012.48.05%20AM.png" alt="KBZPay" className="h-full w-full object-cover scale-[1.2]" />
          </div>

          {/* SCB */}
          <div className="h-8 md:h-10 w-8 md:w-10 flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer overflow-hidden rounded-xl">
            <img src="https://raw.githubusercontent.com/hein-01/mysvgs/main/Screen%20Shot%202026-02-02%20at%2012.48.12%20AM.png" alt="SCB" className="h-full w-full object-cover scale-[1.2]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesBar;