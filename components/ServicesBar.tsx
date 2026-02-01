import React from 'react';

const ServicesBar: React.FC = () => {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-6">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          
          {/* Truck Icon (Mocked with SVG for exact look) */}
          <div className="h-8 flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer">
            <svg className="h-full w-auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.784 26.832L17.296 4.608h7.2l-4.512 22.224h-7.2zM27.232 4.608L27.696 6.96c0.416-0.128 1.488-0.384 2.752-0.384 2.784 0 4.864 1.456 4.88 4.64v0.064c0 3.024-4.224 3.792-4.224 5.376 0 0.816 0.944 1.232 1.776 1.232 1.056 0 1.952-0.24 2.768-0.592l0.416 2.064c-0.656 0.288-2.224 0.656-3.808 0.656-4.048 0-6.752-2.128-6.768-5.36 0-3.92 5.568-4.32 5.52-6.528-0.032-0.624-0.672-1.072-1.92-1.072-1.632 0-3.088 0.464-4.16 1.056L24.16 4.8c1.072-0.496 2.528-0.848 4.208-0.848 0.384 0 0.704 0.016 0.864 0.048l-2.064 0.608zM12.112 18.064c0.512-2.832 2.496-4.24 4.544-4.24-0.112 0.304-0.384 1.152-0.688 2.064-0.416 1.456-1.28 2.704-2.24 2.704-0.336 0-0.56-0.336-0.56-0.528H13.168zM9.76 26.832H3.92C3.12 26.832 2.784 26.624 2.496 25.04L0 12.016h5.36c1.072 0 2.064 0.72 2.368 2.304l2.032 7.728 1.456-7.248c0.272-1.344 0.528-2.784 0.528-2.784h5.28L9.76 26.832z" fill="#1434CB"></path>
            </svg>
          </div>

          {/* Card Icon */}
          <div className="h-8 flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer">
            <svg className="h-full w-auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <rect fill="#1a1f71" height="32" rx="2" width="32"></rect>
              <path d="M11.5 16C11.5 12.134 14.634 9 18.5 9C20.433 9 22.183 9.783 23.45 11.05C22.183 12.317 20.433 13.1 18.5 13.1C16.899 13.1 15.5 14.299 15.5 16C15.5 17.701 16.899 18.9 18.5 18.9C20.433 18.9 22.183 19.683 23.45 20.95C22.183 22.217 20.433 23 18.5 23C14.634 23 11.5 19.866 11.5 16Z" fill="#ff5f00"></path>
              <path d="M18.5 16C18.5 12.134 21.634 9 25.5 9C27.433 9 29.183 9.783 30.45 11.05C29.183 12.317 27.433 13.1 25.5 13.1C23.899 13.1 22.5 14.299 22.5 16C22.5 17.701 23.899 18.9 25.5 18.9C27.433 18.9 29.183 19.683 30.45 20.95C29.183 22.217 27.433 23 25.5 23C21.634 23 18.5 19.866 18.5 16Z" fill="#eb001b"></path>
              <path d="M18.5 16C18.5 12.134 15.366 9 11.5 9C9.567 9 7.817 9.783 6.55 11.05C7.817 12.317 9.567 13.1 11.5 13.1C13.101 13.1 14.5 14.299 14.5 16C14.5 17.701 13.101 18.9 11.5 18.9C9.567 18.9 7.817 19.683 6.55 20.95C7.817 22.217 9.567 23 11.5 23C15.366 23 18.5 19.866 18.5 16Z" fill="#f79e1b"></path>
            </svg>
          </div>

          <div className="h-8 flex items-center bg-blue-500 rounded px-1 hover:scale-105 transition-transform duration-200 cursor-pointer">
            <span className="text-white font-bold text-xs">AMERICAN EXPRESS</span>
          </div>

          <div className="h-8 flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer">
            <span className="text-[#003087] font-bold italic text-xl">Pay</span><span className="text-[#009cde] font-bold italic text-xl">Pal</span>
          </div>

          <div className="h-8 flex items-center border border-black rounded px-2 bg-black hover:scale-105 transition-transform duration-200 cursor-pointer">
            <span className="text-white font-medium text-sm flex items-center gap-1"><span className="material-symbols-outlined text-sm">ios</span> Pay</span>
          </div>

          <div className="h-8 flex items-center border border-gray-300 rounded px-2 hover:scale-105 transition-transform duration-200 cursor-pointer">
            <span className="text-gray-600 font-medium text-sm flex items-center gap-1"><span className="font-bold text-blue-500">G</span> Pay</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesBar;