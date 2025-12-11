import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommonMistakes: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display text-gray-900 dark:text-gray-100">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800">
        <button 
          onClick={() => navigate(-1)}
          className="text-gray-900 dark:text-white flex size-12 shrink-0 items-center justify-center cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Go back"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Common Mistakes
        </h2>
        <button 
          onClick={() => navigate('/')}
          className="text-gray-900 dark:text-white flex size-12 shrink-0 items-center justify-center cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Go home"
        >
          <span className="material-symbols-outlined">home</span>
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-24 flex flex-col gap-6 max-w-md mx-auto w-full">
        {/* Warning Banner */}
        <div className="@container">
          <div className="flex flex-col items-start gap-4 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-900/50 p-5 shadow-sm">
            <div className="flex items-start gap-4 w-full">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-100">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-900 dark:text-white text-base font-bold leading-tight">Fragile Spines Warning</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-normal">
                  Dachshunds are prone to IVDD (Intervertebral Disc Disease). Avoid these specific handling errors to prevent severe back injury.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mistake Card 1 */}
        <div className="@container">
          <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-700">
              <div 
                className="absolute inset-0 bg-center bg-no-repeat bg-cover" 
                data-alt="Illustration showing a dachshund being lifted by front legs only, appearing uncomfortable" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-IJW2MbRxaFacJqIsIdSYg4W6nfX0j5XHqq--Xl2De82MVEhFiXH2TMhzSMOriYx7y_L-xHvVWJhP_h_804b1s2esWZCOUSSX9gJGsKmLx825HBNcU5sksg_pjHm48GTkcjnXBJ6n6dQem8R-SBdn_JirkEzy5Jwdulqupu1a5_YHUu8jyWczviQ5XGRJ_tHC-bulymEcUsTrIwioCQMzzcAF7z4zpTWPCUBHH86CE5TkygbUFhxpqRWkjm1DCkfKZdwrB30ey1M")' }}
              >
              </div>
              {/* Bad overlay */}
              <div className="absolute inset-0 bg-red-500/10 mix-blend-multiply pointer-events-none"></div>
              <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 shadow-md">
                <span className="material-symbols-outlined text-white text-xl">close</span>
              </div>
            </div>
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-5">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-red-600 text-xl">error</span>
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider">Critical Error</p>
              </div>
              <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">1. The Armpit Dangle</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
                Never lift solely by the front legs. This puts immense strain on the shoulders and leaves the entire lower spine unsupported and hanging.
              </p>
            </div>
          </div>
        </div>

        {/* Mistake Card 2 */}
        <div className="@container">
          <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-700">
              <div 
                className="absolute inset-0 bg-center bg-no-repeat bg-cover" 
                data-alt="Illustration of a dachshund being squeezed around the ribs with no rear support" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtiQ-zwEou5xRAGH0aDBLKilkUXr_hZnbpM-HDL1Hr21KrfiAzfqir2yKXDd3KfmgTwgPCErmsRxCZ1776TXlU5XTIE93TzoLrTFMsnkQqo1pyxLbpby3Mb7mUa5RaiZnQY_YREfwcehHCH7CKCWyVYccxUt20EhC-j2lQFhFU6dwXmyTemb_jA3Yt5zp38kN8QSVpPw1zhWOSsugo0VN3DIEfJGaS0L1wt9V6My6J7hu1jbuXEPTKo7jYlcjELpg7GAmqOxBm1n4")' }}
              >
              </div>
              {/* Bad overlay */}
              <div className="absolute inset-0 bg-red-500/10 mix-blend-multiply pointer-events-none"></div>
              <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 shadow-md">
                <span className="material-symbols-outlined text-white text-xl">close</span>
              </div>
            </div>
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-5">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-red-600 text-xl">error</span>
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider">Avoid</p>
              </div>
              <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">2. The Ribcage Squeeze</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
                Lifting by squeezing the ribs without supporting the rear allows the back half of the dog to hang, causing the spine to twist dangerously.
              </p>
            </div>
          </div>
        </div>

        {/* Mistake Card 3 */}
        <div className="@container">
          <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-700">
              <div 
                className="absolute inset-0 bg-center bg-no-repeat bg-cover" 
                data-alt="Abstract representation of a vertical lift stressing the spinal column" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBA_GIPlwXxLLURTAUrk7nyOfHNtkBiJqHjs69KlFIhZLF801WQUWtdFi-NsYPPIJCg1WV1Kq3oRRkscB7v5UKW6CX2Bp2hmwGrhAUMINq1mc0TKHfVoi0v6fw8ajyKrjczt2k_AZ9yYofbnJ8VLjJkfNRV8Ns9w_35jiuI7k07pibSD41__dHpU1f2cWhKQf5mie7L2Ty8-XaapCPfPpDsEO9ugorpKyd1uw0jHoi3bjBou_8XzQlGXVC7K4QT_xff21tS3Gkyzb8")' }}
              >
              </div>
              {/* Bad overlay */}
              <div className="absolute inset-0 bg-red-500/10 mix-blend-multiply pointer-events-none"></div>
              <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 shadow-md">
                <span className="material-symbols-outlined text-white text-xl">close</span>
              </div>
            </div>
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-5">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-red-600 text-xl">error</span>
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider">Do Not Do This</p>
              </div>
              <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">3. The Vertical Scoop</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
                Holding the dog upright like a human baby forces the spine into an unnatural vertical position, compressing the sensitive spinal disks.
              </p>
            </div>
          </div>
        </div>
        <div className="h-4"></div>
      </main>

      {/* Floating Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 z-40">
        <div className="max-w-md mx-auto">
          <button 
            onClick={() => navigate('/pickup-guide')}
            className="w-full bg-primary hover:bg-[#3ec415] text-[#131811] text-base font-bold h-12 rounded-full shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
          >
            <span>See Correct Method</span>
            <span className="material-symbols-outlined">check_circle</span>
          </button>
          
          <div className="mt-3 text-center">
            <button 
                onClick={() => navigate('/handling-tips')}
                className="text-gray-500 text-sm hover:text-primary underline"
            >
                View General Handling Tips
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonMistakes;