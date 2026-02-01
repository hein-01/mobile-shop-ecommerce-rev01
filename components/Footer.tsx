import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 px-4 lg:px-40 flex justify-center">
      <div className="flex flex-col max-w-[1200px] w-full gap-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#111318] mb-2">
              <span className="material-symbols-outlined text-primary">smartphone</span>
              <span className="font-bold text-lg">Mobile Store</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">Your one-stop destination for the latest smartphones and accessories.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[#111318]">Shop</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-500">
              <a className="hover:text-primary transition-colors" href="#">All Phones</a>
              <a className="hover:text-primary transition-colors" href="#">Accessories</a>
              <a className="hover:text-primary transition-colors" href="#">Wearables</a>
              <a className="hover:text-primary transition-colors" href="#">Sale</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[#111318]">Support</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-500">
              <a className="hover:text-primary transition-colors" href="#">Contact Us</a>
              <a className="hover:text-primary transition-colors" href="#">FAQs</a>
              <a className="hover:text-primary transition-colors" href="#">Shipping & Returns</a>
              <a className="hover:text-primary transition-colors" href="#">Warranty</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[#111318]">Company</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-500">
              <a className="hover:text-primary transition-colors" href="#">About Us</a>
              <a className="hover:text-primary transition-colors" href="#">Careers</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8 gap-4">
          <p className="text-slate-400 text-sm">© 2024 Mobile Store Inc. All rights reserved.</p>
          <div className="flex gap-4 text-slate-400">
            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;