import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useFashionStudio } from './FashionStudioContext';

export const Screen6About: React.FC = () => {
  const { setActiveScreen, themeVariant } = useFashionStudio();
  const isDark = themeVariant === 'atelier-dark';

  return (
    <div className={`space-y-16 pb-16 ${isDark ? 'bg-[#0E0F12] text-[#F3F1EC]' : 'bg-[#FFFFFF] text-[#191A1E]'}`}>
      {/* Hero Banner */}
      <section className="px-4 sm:px-8 pt-10 max-w-6xl mx-auto space-y-6">
        <div className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B27338]">
            About The Studio
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
            {isDark ? 'A Brand Built On Perspective.' : 'Our Story'}
          </h1>
          <p className="text-sm sm:text-base opacity-75 font-light max-w-2xl">
            {isDark
              ? 'We started ATELIER with a simple idea — clothing that feels real. Pieces designed with intention, inspired by everyday life and the people who see things differently.'
              : 'More than just clothing, it’s a community. Every piece is designed with purpose, inspired by everyday life and the people around us.'}
          </p>
        </div>

        {/* Hero Visual */}
        <div className="aspect-21/9 rounded-sm overflow-hidden border border-current/10 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1400&q=80"
            alt="Studio Portrait"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="px-4 sm:px-8 max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-1">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-[#B27338]">
            Core Fundamentals
          </h2>
          <p className="text-2xl font-bold uppercase tracking-tight">
            The Principles Behind Every Stitch
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              title: 'DESIGN',
              desc: 'Led by ideas. Structured boxy silhouettes crafted for enduring form.',
            },
            {
              title: 'PEOPLE',
              desc: 'Built by a community of graphic creators, riders, and dreamers.',
            },
            {
              title: 'PROCESS',
              desc: 'Made with care in Jaipur. 240+ GSM heavyweight loopback fabrics.',
            },
            {
              title: 'PLANET',
              desc: 'A more mindful future with compostable packaging & zero deadstock.',
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className={`p-6 border rounded-sm space-y-2 text-center sm:text-left ${
                isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
              }`}
            >
              <h3 className="text-sm font-bold tracking-widest uppercase text-[#B27338]">
                {pillar.title}
              </h3>
              <p className="text-xs opacity-75 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Grid & Quote */}
      <section className="px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-square rounded-sm overflow-hidden border border-current/10">
            <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`p-8 rounded-sm border flex flex-col justify-center text-center space-y-3 ${
              isDark ? 'bg-[#15171E] border-[#282B37]' : 'bg-[#191A1E] text-white border-[#2A2B33]'
            }`}
          >
            <span className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              “Built by dreamers, for dreamers.”
            </span>
            <p className="text-xs text-white/70">Jaipur Atelier • Est. 2024</p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveScreen('shop')}
                className="px-4 py-2 text-xs uppercase tracking-wider font-bold bg-white text-black rounded-xs inline-flex items-center gap-1.5"
              >
                <span>Explore The Pieces</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="aspect-square rounded-sm overflow-hidden border border-current/10">
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
