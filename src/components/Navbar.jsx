import React from 'react';
import { Languages, Globe } from 'lucide-react';

const Navbar = ({ lang, setLang, t }) => {
  const changeLang = (e) => setLang(e.target.value);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-teal-700 dark:text-teal-300">
          <Globe className="w-5 h-5" />
          <span>Sulaiman.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-teal-600 transition-colors">{t('nav.home')}</a>
          <a href="#projects" className="hover:text-teal-600 transition-colors">{t('nav.projects')}</a>
          <a href="#about" className="hover:text-teal-600 transition-colors">{t('nav.about')}</a>
          <a href="#contact" className="hover:text-teal-600 transition-colors">{t('nav.contact')}</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Languages className="w-4 h-4" />
            <select
              aria-label={t('nav.language')}
              value={lang}
              onChange={changeLang}
              className="bg-transparent border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="en">English</option>
              <option value="ml">മലയാളം</option>
            </select>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md bg-gradient-to-r from-teal-600 to-orange-500 text-white px-3 py-1.5 text-sm font-medium shadow hover:opacity-95">
            {t('nav.hire')}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
