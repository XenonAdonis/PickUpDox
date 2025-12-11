import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col justify-between group/design-root bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white antialiased overflow-hidden">
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md mx-auto px-6 py-6 pb-0">
        {/* Header Image / Hero Illustration */}
        <div className="w-full flex-1 min-h-[300px] max-h-[50vh] flex flex-col justify-center items-center mb-6 relative">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-sm relative bg-white dark:bg-white/5">
            <div 
              className="absolute inset-0 bg-center bg-cover bg-no-repeat" 
              data-alt="Illustration of a happy dachshund dog standing comfortably in a friendly pose" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzoLWBNxQ3xs5aAI_BklCqzzKZkaKFQo2U1hpojayYY6Wrs8M2jBvMgH3qz6eBYO3rEA2u4n4EZLRonMYDivE-T6NVPwTK9D7lGzvnvWU182YUQPOOP2RvHiv2MaIaWgUzgc6Ng8MvJk-fNKxepcnTo8dPK6Xf3H9Vue3ybfdfgPLdkZ4fkxBt_tP0ni0knNf08iUUjHg0-H6-g3mLPg5d13-LW3HGGf0dBlul92_0nM9TMHQe13nW_kzPmqNrj9JTWyqm6MPWklY")' }}
            >
            </div>
            {/* Subtle overlay gradient for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-black/30"></div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col items-center text-center space-y-3 mb-6">
          <h1 className="text-gray-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight">
            Welcome to Dachshund Pickup
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed max-w-[320px]">
            Dachshunds have special spines. Learn the veterinarian-approved way to pick them up safely and prevent injury.
          </p>
        </div>
      </div>
      
      {/* Bottom Action Area */}
      <div className="w-full bg-background-light dark:bg-background-dark px-6 pb-10 pt-2 flex flex-col items-center gap-6">
        {/* Page Indicators */}
        <div className="flex flex-row items-center justify-center gap-3">
          <div className="h-2 w-2 rounded-full bg-primary ring-2 ring-primary/30"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        </div>
        
        {/* Single Button */}
        <button 
          onClick={() => navigate('/spine-safety')}
          className="flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 bg-primary hover:bg-[#42cf16] active:bg-[#3bb814] text-[#131811] text-lg font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-primary/20"
        >
          <span className="truncate">Get Started</span>
          <span className="material-symbols-outlined ml-2 text-[20px] font-bold">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;