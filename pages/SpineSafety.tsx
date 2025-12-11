import React from 'react';
import { useNavigate } from 'react-router-dom';

const SpineSafety: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark overflow-x-hidden shadow-xl text-[#131811] dark:text-gray-100 font-display">
      {/* TopAppBar */}
      <div className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
        <button 
          onClick={() => navigate(-1)}
          className="text-[#131811] dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          aria-label="Go back"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-[#131811] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Spine Safety
        </h2>
        <button 
          onClick={() => navigate('/')}
          className="text-[#131811] dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          aria-label="Go home"
        >
          <span className="material-symbols-outlined">home</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        {/* HeaderImage */}
        <div className="@container px-4 py-3">
          <div 
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white dark:bg-surface-dark rounded-xl min-h-[280px] shadow-sm relative group" 
            data-alt="Illustration of a cute dachshund dog showing its long back structure with a gentle highlight on the spine" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQIhFqlj-tmChR8WfjfieFmR9qsoR9-DNASOuZTcLrlkkgNFiU8NNnK0alfDBqW1ZsEdfm3liZ73-dagXf03Shmr1392nUzWcvswigtxFrwVijgweIa3ko3Nb4U-kt5v-rDIVXRqFetMYVXF1-BisibIpGA3ETD_jD63WO6nIfjJJZkE1YXs97UaV8b4CO7aP0UpphcdeHo5BM3OOVk4OG-Z9Ps1cuiQ8ItwIT2dohvl1STMgS29iBTUCGJu3gJF0DMeiZgEADozo")' }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="relative z-10 p-4">
              <div className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-2 shadow-sm">
                Anatomy Focus
              </div>
            </div>
          </div>
        </div>

        {/* HeadlineText */}
        <div className="px-4 pt-4 pb-2">
          <h1 className="text-[#131811] dark:text-white tracking-tight text-[28px] font-bold leading-tight">
            Why Proper Pickup <br/> <span className="text-primary dark:text-primary">Matters</span>
          </h1>
        </div>

        {/* BodyText */}
        <div className="px-4 pb-6">
          <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
            Dachshunds are famous for their length, but their unique shape makes them prone to back injuries. Their spine is like a suspension bridge—it needs support at both ends.
          </p>
        </div>

        {/* Stats / Info Cards */}
        <div className="flex flex-row gap-3 px-4 pb-6">
          <div className="flex flex-1 flex-col gap-2 rounded-xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-red-500 text-xl">warning</span>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">Risk Factor</p>
            </div>
            <p className="text-[#131811] dark:text-white tracking-tight text-xl font-bold leading-tight">High</p>
            <p className="text-red-500 text-sm font-medium leading-normal flex items-center gap-1">
              IVDD Prone
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-2 rounded-xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-primary text-xl">shield</span>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">Prevention</p>
            </div>
            <p className="text-[#131811] dark:text-white tracking-tight text-xl font-bold leading-tight">Key</p>
            <p className="text-primary text-sm font-medium leading-normal flex items-center gap-1">
              - Injury Risk
            </p>
          </div>
        </div>

        {/* Detailed Benefits List */}
        <div className="px-4 space-y-4">
          <h3 className="text-lg font-bold text-[#131811] dark:text-white mb-2">The Do's &amp; Don'ts</h3>
          {/* Benefit Item 1 */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30">
            <div className="bg-primary/20 dark:bg-primary/30 p-2 rounded-full shrink-0 text-primary-dark">
              <span className="material-symbols-outlined text-green-700 dark:text-green-400">check_circle</span>
            </div>
            <div>
              <h4 className="font-bold text-[#131811] dark:text-white mb-1">Support the Chest &amp; Rear</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-normal">
                Always keep the spine level. Supporting both ends prevents the vertebrae from bowing downwards.
              </p>
            </div>
          </div>
          {/* Benefit Item 2 */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20">
            <div className="bg-red-100 dark:bg-red-900/40 p-2 rounded-full shrink-0">
              <span className="material-symbols-outlined text-red-600 dark:text-red-400">cancel</span>
            </div>
            <div>
              <h4 className="font-bold text-[#131811] dark:text-white mb-1">Never Lift by Front Paws</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-normal">
                Lifting like a human toddler puts immense strain on the lower back and can cause immediate disk rupture.
              </p>
            </div>
          </div>
        </div>
        <div className="h-8"></div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 z-40">
        <button 
          onClick={() => navigate('/pickup-guide')}
          className="w-full bg-primary hover:bg-[#3cd015] active:bg-[#34b512] text-black font-bold text-lg py-4 rounded-xl shadow-lg shadow-green-500/20 transition-all flex items-center justify-center gap-2 group"
        >
          Show Me How
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default SpineSafety;