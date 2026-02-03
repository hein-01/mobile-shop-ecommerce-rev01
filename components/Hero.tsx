import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [placeholder, setPlaceholder] = useState('');
  const texts = [
    "လေးသိန်းနှင့်အောက် ဂိမ်းဆော့လို့ကောင်းတဲ့ဖုန်းလေးပြပေးပါ",
    "ဒီနေ့ဖုန်းဝယ်ရင် ရန်ကုန်မြို့တွင်းဆိုချက်ချင်းလာပို့ပေးမလား?",
    "အမေ့အတွက်သင့်တော်မယ့်ဖုန်းလေးညွှန်းပေးပါ",
    "ဖုန်းစကရင်ပြင်ချင်လို့ရလား",
    "ကျွန်မအခုနေရာနှင့်အနီးဆုံးကဆိုင်လေးတွေပြပေးပါ",
    "အရစ်ကျဝယ်ချင်လို့အစီအစဉ်လေးတွေပြောပြပါ"
  ];

  useEffect(() => {
    let charIndex = 0;
    let textIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const animateText = () => {
      const currentText = texts[textIndex];

      if (charIndex <= currentText.length) {
        setPlaceholder(currentText.slice(0, charIndex));
        charIndex++;
        timeoutId = setTimeout(animateText, 100);
      } else {
        // Finished typing current string. Wait, then start next one from scratch.
        timeoutId = setTimeout(() => {
            textIndex = (textIndex + 1) % texts.length;
            charIndex = 0;
            animateText();
        }, 2000);
      }
    };

    timeoutId = setTimeout(animateText, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="w-full bg-[#D32F2F] relative min-h-[380px] lg:h-[420px] flex items-center justify-center py-6 z-10">
      {/* Background Container with Overflow Hidden */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E53935] via-[#C62828] to-[#B71C1C]"></div>
        
        {/* Dynamic Light Beams */}
        <div className="absolute top-0 left-1/4 w-1 bg-white/10 h-full rotate-[30deg] blur-sm"></div>
        <div className="absolute top-0 right-1/4 w-1 bg-white/10 h-full rotate-[-30deg] blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/30 rounded-full blur-[80px] mix-blend-screen"></div>
      </div>

      <div className="max-w-[1200px] w-full px-4 lg:px-8 z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16">
        
        {/* Left Side: Campaign Text & Graphics */}
        <div className="flex flex-col items-center lg:items-end relative lg:w-1/2 text-center lg:text-right">
            
            {/* 2.2 Text */}
            <div className="absolute -top-16 -left-10 lg:-left-20 text-white/10 font-black text-[180px] leading-none select-none z-0">2.2</div>
            <h2 className="relative z-10 text-white text-6xl lg:text-7xl font-black italic tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] mb-4 transform -rotate-6">
                2.2
            </h2>

            {/* The 1 Group */}
            <div className="relative flex flex-col items-center lg:items-end z-10">
                {/* Logo */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-left-12 w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center shadow-xl z-20 transform -rotate-12 border-4 border-red-100">
                    <span className="text-black text-[10px] font-bold uppercase leading-none mt-1">The</span>
                    <span className="text-black text-4xl font-black leading-none">1</span>
                    <div className="w-6 h-[3px] bg-[#D32F2F] mt-1"></div>
                </div>

                {/* Stacked 3D Text */}
                <div className="flex flex-col items-center lg:items-end transform -rotate-6 mt-6 gap-4">
                    <h1 className="text-2xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-pink-100 drop-shadow-md leading-[0.85] tracking-tight">
                        အထူး
                    </h1>
                    <h1 className="text-2xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-pink-100 drop-shadow-md leading-[0.85] tracking-tight">
                        ပရိုမိုးရှင်း
                    </h1>
                </div>

                {/* CTA */}
                <div className="mt-4 flex flex-col items-center lg:items-end transform -rotate-3">
                    <h3 className="text-yellow-300 text-2xl font-black uppercase tracking-wider drop-shadow-sm">SHOP NOW</h3>
                    <p className="text-white text-sm font-bold tracking-widest uppercase">Save and Get!</p>
                </div>
            </div>
        </div>

        {/* Right Side: Promotion Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl w-full max-w-[450px] transform hover:scale-105 transition-transform duration-300 relative z-20">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-[#FF4081] to-[#F50057] text-white text-center py-2">
                    <span className="font-bold text-xs lg:text-sm tracking-wide">1 Feb 26 - 4 Feb 26 | Limited Offer</span>
                </div>

                {/* Card Content */}
                <div className="flex p-4 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[80%] bg-gray-200"></div>
                    
                    {/* Left: Discount */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center pr-2">
                        <p className="font-bold text-gray-800 text-xs leading-tight">Redeem 800 Points</p>
                        <p className="font-bold text-gray-500 text-[10px] mb-1">Get Discount</p>
                        
                        <div className="text-[#F50057] font-black text-5xl lg:text-6xl leading-none flex items-start tracking-tighter">
                            100
                            <div className="flex flex-col items-start ml-1 mt-1">
                                <span className="text-lg font-bold leading-none">.-</span>
                                <span className="text-base font-bold leading-none">*</span>
                            </div>
                        </div>

                        <p className="text-[8px] text-gray-400 mt-1 leading-tight">
                            Maximum redemption up to<br/>the purchase price<br/>Minimum 800 points required
                        </p>
                    </div>

                    {/* Right: Points */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center pl-2">
                        <div className="flex items-center gap-1 mb-1">
                            <span className="font-bold text-gray-800 text-[10px]">Get Points The</span>
                            <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center text-white text-[8px] font-bold">1</div>
                        </div>
                        
                        <div className="text-[#F50057] font-black text-5xl lg:text-6xl leading-none flex items-start tracking-tighter">
                            x5
                            <span className="text-xl mt-1 ml-1">*</span>
                        </div>

                        <p className="text-[8px] text-gray-400 mt-1 leading-tight">
                            Minimum purchase 18,000.-<br/>Limit points awarded<br/>at 4,000 points
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* Footer Text */}
      <div className="absolute bottom-10 w-full text-center px-4 z-20">
        <p className="text-white text-sm lg:text-base font-extrabold tracking-wide shadow-black drop-shadow-md">
            AI အားမိမိလိုရာမေးနိုင်ပါသည်။ ဖုန်းဆိုင်အတွင်းသို့ဝင်ပြီးအရောင်းဝန်ထမ်းအားမေးမြန်းသကဲ့သို့ ရေးသားမေးမြန်းနိုင်ပါသည်။
        </p>
      </div>

      {/* AI Powered Search Bar - Straddling the edge */}
      <div className="absolute bottom-0 w-full flex justify-center px-4 z-30 translate-y-1/2">
        <div className="w-full max-w-[350px] sm:max-w-[450px]">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300 animate-gradient-x"></div>
                <div className="relative flex items-center bg-white/95 backdrop-blur-sm rounded-full pl-5 pr-2 py-2 shadow-2xl">
                    <input 
                        type="text" 
                        placeholder={placeholder}
                        className="w-full bg-transparent border-none focus:ring-0 text-sm font-semibold text-gray-800 placeholder-gray-400 px-0"
                    />
                    <button className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full px-4 py-2 flex items-center justify-center hover:scale-105 transition-transform shadow-md ml-2 gap-2">
                        <span className="font-bold text-sm">AI</span>
                        <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;