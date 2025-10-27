import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

const KeralaHero = ({ t }) => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-orange-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-700 px-3 py-1 text-xs font-medium mb-4">
              <Leaf className="w-3.5 h-3.5" /> {t('hero.badge')}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              {t('hero.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600">Kerala</span>
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-teal-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-teal-700">
                {t('hero.ctaProjects')} <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-teal-600 text-teal-700 px-4 py-2 text-sm font-medium hover:bg-teal-50">
                {t('hero.ctaContact')}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-neutral-500">
              <span className="px-2 py-1 rounded-full bg-teal-50 text-teal-700">Next.js</span>
              <span className="px-2 py-1 rounded-full bg-orange-50 text-orange-700">Tailwind</span>
              <span className="px-2 py-1 rounded-full bg-teal-50 text-teal-700">Sanity CMS</span>
              <span className="px-2 py-1 rounded-full bg-orange-50 text-orange-700">UPI Demo</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-600 to-orange-500 opacity-10 absolute inset-0" />
            <img
              src="https://images.unsplash.com/photo-1608976379881-3b3e2faac0b0?q=80&w=1600&auto=format&fit=crop"
              alt={t('hero.imageAlt')}
              className="relative rounded-2xl shadow-lg ring-1 ring-black/5"
            />
            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur rounded-xl shadow p-3 border">
              <p className="text-xs font-medium text-neutral-700">{t('hero.keralaBadge')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeralaHero;
