import React from 'react';
import { useNavigate } from 'react-router-dom';

const HandlingTips: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-xl bg-background-light dark:bg-background-dark text-[#131811] dark:text-[#f0f2f0] font-display antialiased">
      {/* TopAppBar */}
      <div className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
        <button 
          onClick={() => navigate(-1)}
          className="text-[#131811] dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          aria-label="Go back"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-[#131811] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Safe Handling Tips
        </h2>
        <button 
          onClick={() => navigate('/')}
          className="text-[#131811] dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          aria-label="Go home"
        >
          <span className="material-symbols-outlined">home</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 pb-24">
        {/* Hero Card: IVDD Awareness */}
        <div className="px-4 mt-4">
          <div className="flex flex-col items-stretch justify-start rounded-2xl shadow-sm bg-white dark:bg-surface-dark overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
            <div 
              className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover relative" 
              data-alt="Illustration of a happy dachshund with a straight back highlighted" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4IR66ltvvyOb12n4KDGh6-7KISEH4L3Pg6QLI-sDQ1jIWzVu-gVRiTV2xdtyMbN3SKfaIiTYmJXgkJ8rsHRj7OE5yfj6BOgRejF-WI9PEUhT8l48kBq25zOJBg9szzGexDoMhXux8OBZUAUBj5TGHichkdQ7LaGrNeADRhK7Pnb_X5S63agSSB382x-N3fkLdZ29DTtNbfDFLcX8K3G9O9NF9VSmt__3JuSnOsdhyjEGAaafUov5_sIrkBjPB_XiPJLHeWgENALQ")' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="bg-primary text-background-dark text-xs font-bold px-2 py-1 rounded mb-1">IVDD AWARENESS</span>
              </div>
            </div>
            <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-5">
              <h3 className="text-[#131811] dark:text-white text-xl font-bold leading-tight">Protecting the Spine</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-relaxed">
                The Golden Rule: Keep the back flat at all times. Supporting the spine prevents stress on intervertebral discs.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel: Key Environment Tips */}
        <div>
          <div className="flex items-center justify-between px-4 pb-3">
            <h2 className="text-[#131811] dark:text-white tracking-tight text-[22px] font-bold leading-tight">Key Environment Tips</h2>
            <span className="text-primary text-sm font-medium cursor-pointer">View All</span>
          </div>
          <div className="flex overflow-x-auto no-scrollbar pl-4 pr-4 gap-4 pb-2 snap-x snap-mandatory">
            {/* Card 1 */}
            <div className="flex flex-col gap-3 rounded-xl min-w-[200px] w-[200px] snap-center group cursor-pointer">
              <div 
                className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl overflow-hidden relative shadow-sm" 
                data-alt="Wooden ramp placed next to a high sofa" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCts8GHlNtxdp0qzRHpjbTqdfpC_RVyP2JEw-oaBxTDwd0ZQyoxcrab5EmyWrd6ToGBFvVZMsMka7T1HVgETaNcaT_bg03Xt1D9-z9G9CEVutG0w96ryqkE2O8VtL6nmfVohlxQukbBYqt4J3tkezRr9axSCmCKgDKHIn5daUMn85rVCwkYe-QvA0btuppXcfCUqYYaSEmwXSAejDpn3mO0KIHX52sh_hm21JVjqvJ0o_ktap53P1fPPwc3FRhKkJXeNzHdCQrDYs0")' }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div>
                <p className="text-[#131811] dark:text-white text-base font-bold leading-tight">Use Ramps</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Avoid stairs &amp; couches</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col gap-3 rounded-xl min-w-[200px] w-[200px] snap-center group cursor-pointer">
              <div 
                className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl overflow-hidden relative shadow-sm" 
                data-alt="Hands supporting a small dog under the chest and rear" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqJJzA8oM3RQL1wAZHE8gMWtXAs_MC3lFxVOAi72ewsD4k1o2kMjyhWwyq-33TCcv0vO9UuL0EnbnksKAZj0ooCXrCBktg47ZxXZuTE_3C4bTS5RszfFbSIJH80tebhIhMWNq_n1KT-YujGrx4H50OMfAhIpkXp0avB7qy3fuRzWA7FLZMJVqp778La3I0fzOtlt1wP1XROotFCfINJgaMvk-vvtzMbG-m_6YB3clygbEKZxIcPO24KrxkT5CgX14XWTlSDI-BP3E")' }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div>
                <p className="text-[#131811] dark:text-white text-base font-bold leading-tight">Two-Hand Support</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Support chest &amp; rump</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col gap-3 rounded-xl min-w-[200px] w-[200px] snap-center group cursor-pointer">
              <div 
                className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl overflow-hidden relative shadow-sm" 
                data-alt="Dog waiting patiently on the floor looking up" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZ77p9zx8DZyOfUX23tQ0URNcHraZl_mGxOt17Hb7Ru1NqCzaJCA98ZEF1T-4dJgOcvGCV1aK4lJcQb-YSrcbp0BcY0GTmvHohy_BveGp0DT2X8C8szTw2gXA1_8ayuMVHQcL2NOzdf_BrAn0K6jRt7c5PSxJijNVFlqXujuuayJDowHf16qQbfG5wFoXuMsNoTR5goGsXkkP5OzCIK00zzSVEi_bH8SQlzJG6WNkBIIQFMBVLT2gTfHne4h_yvqRwbgdQ0ioEfiA")' }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div>
                <p className="text-[#131811] dark:text-white text-base font-bold leading-tight">No Jumping</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Wait for a lift</p>
              </div>
            </div>
          </div>
        </div>

        {/* Do's and Don'ts Section */}
        <div className="px-4">
          <h2 className="text-[#131811] dark:text-white tracking-tight text-[22px] font-bold leading-tight pb-4">Do's &amp; Don'ts</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Do Card */}
            <div className="bg-[#f0fdf4] dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex flex-col gap-3">
              <div className="size-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                <span className="material-symbols-outlined text-xl">check</span>
              </div>
              <div>
                <p className="text-green-800 dark:text-green-200 font-bold text-sm mb-1">DO</p>
                <p className="text-[#131811] dark:text-white text-sm leading-tight">Lift with two hands, supporting both ends.</p>
              </div>
            </div>
            {/* Don't Card */}
            <div className="bg-[#fef2f2] dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 flex flex-col gap-3">
              <div className="size-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-400">
                <span className="material-symbols-outlined text-xl">close</span>
              </div>
              <div>
                <p className="text-red-800 dark:text-red-200 font-bold text-sm mb-1">DON'T</p>
                <p className="text-[#131811] dark:text-white text-sm leading-tight">Pick up by armpits like a human baby.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Guides (Accordion Style) */}
        <div className="px-4">
          <h2 className="text-[#131811] dark:text-white tracking-tight text-[22px] font-bold leading-tight pb-4">Playtime Rules</h2>
          <div className="flex flex-col gap-3">
            {/* Item 1 */}
            <div className="flex flex-col bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg text-green-700 dark:text-green-400">
                    <span className="material-symbols-outlined">sports_baseball</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#131811] dark:text-white">Gentle Fetch</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Keep toys low to the ground</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-gray-400">expand_more</span>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
                    <span className="material-symbols-outlined">block</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#131811] dark:text-white">No Tug-of-War</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Prevents dangerous neck strain</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-gray-400">expand_more</span>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg text-green-700 dark:text-green-400">
                    <span className="material-symbols-outlined">pets</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#131811] dark:text-white">Proper Walking Gear</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Use a harness, not a collar</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-gray-400">expand_more</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button / Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light dark:via-background-dark to-transparent pt-8 flex justify-center z-40">
        <button 
          onClick={() => alert("Safety Quiz coming soon!")}
          className="w-full max-w-md bg-primary hover:bg-[#3cd610] text-[#131811] font-bold text-lg py-4 rounded-xl shadow-[0_8px_16px_rgba(76,230,25,0.3)] transition-all transform active:scale-95 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">quiz</span>
          Take Safety Quiz
        </button>
      </div>
    </div>
  );
};

export default HandlingTips;