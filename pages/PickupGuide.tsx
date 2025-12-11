import React from 'react';
import { useNavigate } from 'react-router-dom';

const PickupGuide: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden pb-24">
        {/* TopAppBar */}
        <header className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-200/50 dark:border-white/5">
          <button 
            onClick={() => navigate(-1)}
            className="text-gray-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Go back"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Safe Pickup Guide
          </h2>
          <button 
            onClick={() => navigate('/')}
            className="text-gray-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Go home"
          >
            <span className="material-symbols-outlined text-2xl">home</span>
          </button>
        </header>

        {/* Video Section */}
        <div className="w-full px-6 pt-6 pb-2">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg shadow-gray-200/50 dark:shadow-none group cursor-pointer">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              poster="https://images.unsplash.com/photo-1619842795808-01258674d84f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-small-dog-playing-in-the-park-32865-large.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex items-center justify-center size-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white shadow-xl">
                <span className="material-symbols-outlined text-3xl filled">play_arrow</span>
              </div>
            </div>
            <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end pointer-events-none">
              <span className="text-white text-sm font-semibold tracking-wide drop-shadow-md">Video Demonstration</span>
              <span className="text-white/80 text-xs bg-black/40 px-2 py-1 rounded-md backdrop-blur-md">0:45</span>
            </div>
          </div>
        </div>

        {/* HeadlineText & BodyText Combo */}
        <div className="flex flex-col px-6 pt-4 pb-2">
          <h2 className="text-gray-900 dark:text-white tracking-tight text-[28px] font-extrabold leading-tight text-left mb-2">
            Protect their back!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed">
            Dachshunds are prone to IVDD. Watch the video above or follow these exact steps to lift them safely without straining their spine.
          </p>
        </div>

        {/* PageIndicators */}
        <div className="flex w-full flex-row items-center justify-start px-6 gap-2 py-4">
          <div className="h-1.5 flex-1 rounded-full bg-primary transition-all"></div>
          <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-white/10 transition-all"></div>
          <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-white/10 transition-all"></div>
          <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-white/10 transition-all"></div>
        </div>

        {/* Carousel */}
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 py-2 gap-4 pb-8">
          {/* Step 1 Card */}
          <div className="snap-center shrink-0 w-full max-w-[320px] flex flex-col">
            <div className="relative flex h-full flex-col gap-4 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none p-5">
              <div className="absolute top-4 left-4 z-10 flex items-center justify-center size-10 rounded-full bg-primary text-background-dark font-extrabold text-lg shadow-lg">1</div>
              <div className="w-full aspect-[4/5] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden relative group">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  data-alt="Person sliding hand under a dachshund's chest" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA112YIwABsZhXb1alECmpjEyIHfJxw4eA5NLicEKCyjzKs1D2s4nbZC_o7ZWaTUlAroZxbtur3-3Ex17R4AwAYcweBG5lI2ujZcksDpBwzWtLoVs3fGUVbWEAdwYx3QiFLcgohG9aWhNHtNgYLk-9jWCdAK2rbRWlUKlorXwhJ5lEKdLOOreq62-X7TAMuT0EZc3ASRpNEiyqBoBmKhRADXn3fLkGtFgHbzuhIUnbYhCJ9K6HgycApaIuHRW4785HTOf7Kb0qyNCk")' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight">Support the Chest</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Slide one hand gently under the chest, supporting the rib cage firmly but comfortably. Ensure your palm is flat.
                </p>
              </div>
              <div className="mt-2 flex gap-3">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span className="text-xs font-semibold text-primary/80">Flat Palm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 Card */}
          <div className="snap-center shrink-0 w-full max-w-[320px] flex flex-col">
            <div className="relative flex h-full flex-col gap-4 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none p-5">
              <div className="absolute top-4 left-4 z-10 flex items-center justify-center size-10 rounded-full bg-primary text-background-dark font-extrabold text-lg shadow-lg">2</div>
              <div className="w-full aspect-[4/5] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden relative group">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  data-alt="Hand scooping the hindquarters of a dachshund" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxij8nkiEa0gva_jQivixUocLozY-lyloIAIV9c3hwz1Uf-ieLWgkvsTIHmyGVc7JrjO64PJL_LPOsOR3QPvUgoLqgwIwMNkSu-_316mLLU4ppVuaFRrv2lkdyzf4j-CQMWNKgo6EfLzcTOchnT66VGg2mFvZdT-w876vaF07BDZwjwDbL_KwGW7ah7w0DUQ_iWCvlMIzfaNes0hp2oOXlPKFWq4rp3ogkArM3WqvHyHQwq7LPCkpx-PCm2YXdBeSEjuvMfRh6R5U")' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight">Scoop the Rear</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Simultaneously scoop the hindquarters with your other hand. Never lift by front legs alone.
                </p>
              </div>
              <div className="mt-2 flex gap-3">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-900/30">
                  <span className="material-symbols-outlined text-red-500 text-base">cancel</span>
                  <span className="text-xs font-semibold text-red-500 dark:text-red-400">No Dangling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 Card */}
          <div className="snap-center shrink-0 w-full max-w-[320px] flex flex-col">
            <div className="relative flex h-full flex-col gap-4 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none p-5">
              <div className="absolute top-4 left-4 z-10 flex items-center justify-center size-10 rounded-full bg-primary text-background-dark font-extrabold text-lg shadow-lg">3</div>
              <div className="w-full aspect-[4/5] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden relative group">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  data-alt="Lifting dog keeping spine horizontal" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeSWAE9ufc24OKe61vbgzaUFVMAsfweIPdSaUhb2xPcHbgNQ7NzXPoVabkpNzPNd2TwVJmJZgatpXJZN_x5CuhM5kTUOt_uwxERVI3VAHoG7FlxzGCH47W0Tyb9FCuYX4yQMNha0uJ2OOqN2uUzG11IeApmB1IA1_bXMi5SUDPYneepengq8xveiN_BKOCIiVngo8FT24cFZyx-mDPi3j1ybnCH2P3i6t85LpNsZuW8f87RG6y8KaASZGvOHRlPQvdgKDSbx48eBk")' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight">Lift Evenly</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Lift slowly, keeping their spine parallel to the floor. Imagine you are lifting a fragile log.
                </p>
              </div>
              <div className="mt-2 flex gap-3">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span className="text-xs font-semibold text-primary/80">Keep Level</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 Card */}
          <div className="snap-center shrink-0 w-full max-w-[320px] flex flex-col">
            <div className="relative flex h-full flex-col gap-4 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none p-5">
              <div className="absolute top-4 left-4 z-10 flex items-center justify-center size-10 rounded-full bg-primary text-background-dark font-extrabold text-lg shadow-lg">4</div>
              <div className="w-full aspect-[4/5] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden relative group">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  data-alt="Person hugging dog securely to chest" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDhaj0mBhXOZIs7rMb1LOUznR0pY05z_qzt49OXTYaSTEzlGZKs7Pf83nVazn3v88GFnRCala4659yxj4ZltgZaTsGzpdgoMEABO0y8TIZMtHYs9j8ruMXLrb6mwz-jONVoIZzWtXBX9-B2-6Oialspmidm0GvbC7bZhnY1BdSISnFcUZq43r1Dzcq8omc4wxXOgx6V2-Fe7GxAyGIAfCyEcqB5EfKRfJQCYnvfV_pzoX54A1AtZRAglPTWDBizdTiVHODrZ4NbrQ")' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight">Secure Against Body</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  Bring the dog close to your chest to prevent them from wiggling or jumping out of your arms.
                </p>
              </div>
              <div className="mt-2 flex gap-3">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span className="text-xs font-semibold text-primary/80">Hold Tight</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-10 w-full"></div>
        {/* Fixed Bottom Action */}
        <div className="fixed bottom-0 left-0 z-40 w-full p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-gray-100 dark:border-white/5">
          <button 
            onClick={() => navigate('/common-mistakes')}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 transition-transform active:scale-[0.98]"
          >
            <span className="text-background-dark font-bold text-lg tracking-wide">I Understand, Let's Practice</span>
            <span className="material-symbols-outlined text-background-dark font-bold">thumb_up</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PickupGuide;