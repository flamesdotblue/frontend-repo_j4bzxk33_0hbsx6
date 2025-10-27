import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import KeralaHero from './components/KeralaHero';
import ProjectsSection from './components/ProjectsSection';
import AboutContactSection from './components/AboutContactSection';

const translations = {
  en: {
    nav: { home: 'Home', projects: 'Projects', about: 'About', contact: 'Contact', hire: 'Hire Me', language: 'Language' },
    hero: {
      badge: 'Crafted in God\'s Own Country',
      title: 'Web Developer from',
      subtitle:
        'I design and build modern websites and apps that blend Kerala\'s identity with cutting‑edge tech — fast, SEO‑ready, and CMS powered.',
      ctaProjects: 'See Projects',
      ctaContact: 'Let\'s Talk',
      imageAlt: 'Kerala backwaters houseboat',
      keralaBadge: 'Inspired by Theyyam, Kathakali, and backwaters'
    },
    projects: { title: 'Featured Projects', filter: 'Filter', view: 'View' },
    about: {
      title: 'About & Skills',
      story:
        'I\'m Sulaiman, a Kerala‑based developer focused on performance, accessibility and scalable content with Sanity CMS. I work with local brands in tourism, spices and Ayurveda to ship experiences that convert.',
      skillsList: [
        'Next.js + React',
        'Tailwind CSS design systems',
        'Sanity CMS content models',
        'SEO for Kerala businesses',
        'UPI payment demos',
      ],
    },
    contact: {
      title: 'Contact in Kerala',
      upiTitle: 'UPI Payment Demo',
      upiDesc: 'Try the flow with sample UPI IDs or request a QR code demo during our call.',
      upiDemo: 'Open Demo',
      name: 'Full Name',
      namePh: 'Your name',
      email: 'Email',
      phone: 'Phone',
      message: 'Project Details',
      messagePh: 'Tell me about your project, budget, timeline...',
      send: 'Send Message'
    }
  },
  ml: {
    nav: { home: 'ഹോം', projects: 'പ്രോജക്ടുകൾ', about: 'എന്നെക്കുറിച്ച്', contact: 'ബന്ധപ്പെടുക', hire: 'ഹയർ ചെയ്യുക', language: 'ഭാഷ' },
    hero: {
      badge: 'ഗോഡ്‌സ് ഓൺ കൺട്രിയിൽ നിന്നുള്ള',
      title: 'വെബ് ഡെവലപ്പർ —',
      subtitle:
        'കേരളത്തിന്റെ സാംസ്കാരിക ഭാവം ഉൾക്കൊള്ളുന്ന, വേഗതയേറിയതും SEO‑ റെഡിയുമായ സൈറ്റുകളും ആപ്പുകളും ഞാൻ നിർമ്മിക്കുന്നു.',
      ctaProjects: 'പ്രോജക്ടുകൾ കാണുക',
      ctaContact: 'സംസാരിക്കാം',
      imageAlt: 'കേരള ബാക്ക്വാട്ടേഴ്സിലെ ഹൗസ്‌ബോട്ട്',
      keralaBadge: 'തെയ്യം, കഥകളി, ബാക്ക്വാട്ടേഴ്സ് പ്രചോദനം'
    },
    projects: { title: 'പ്രമുഖ പ്രോജക്ടുകൾ', filter: 'ഫിൽറ്റർ', view: 'കാണുക' },
    about: {
      title: 'എന്നെക്കുറിച്ച് & സ്കിൽസ്',
      story:
        'ഞാൻ സുലൈമാൻ. ടൂറിസം, മസാല, ആയുർവേദ മേഖലകളിലെ ബ്രാൻഡുകളുമായി ചേർന്ന് Sanity CMS ഉപയോഗിച്ച് സ്കെയിലബിൾ കണ്ടന്റ് അനുഭവങ്ങൾ നിർമ്മിക്കുന്നു.',
      skillsList: [
        'Next.js + React',
        'Tailwind CSS ഡിസൈൻ',
        'Sanity CMS മോഡലിംഗ്',
        'കേരള ബിസിനസുകൾക്കുള്ള SEO',
        'UPI പേയ്‌മെന്റ് ഡെമോ',
      ],
    },
    contact: {
      title: 'കേരളത്തിൽ ബന്ധപ്പെടുക',
      upiTitle: 'യുപിഐ പേയ്‌മെന്റ് ഡെമോ',
      upiDesc: 'സാമ്പിൾ UPI ഐഡികൾ ഉപയോഗിച്ച് ഫ്‌ളോ പരീക്ഷിക്കാം, അല്ലെങ്കിൽ കോളിൽ QR ഡെമോ അഭ്യർത്ഥിക്കാം.',
      upiDemo: 'ഡെമോ തുറക്കുക',
      name: 'പേര്',
      namePh: 'നിങ്ങളുടെ പേര്',
      email: 'ഇമെയിൽ',
      phone: 'ഫോൺ',
      message: 'പ്രോജക്റ്റ് വിശദാംശങ്ങൾ',
      messagePh: 'നിങ്ങളുടെ പ്രോജക്റ്റ്, ബഡ്ജറ്റ്, ടൈംലൈൻ...',
      send: 'സന്ദേശം അയക്കുക'
    }
  }
};

function useTranslator(lang) {
  const dict = translations[lang] || translations.en;
  const t = (path) => {
    const parts = path.split('.');
    let cur = dict;
    for (const p of parts) {
      cur = cur?.[p];
      if (cur === undefined) return path;
    }
    return cur;
  };
  return t;
}

const App = () => {
  const [lang, setLang] = useState('en');
  const t = useTranslator(lang);

  // Basic SEO for SPA
  useEffect(() => {
    const title = lang === 'en' ? 'Sulaiman | Kerala Web Developer — Next.js, Tailwind, Sanity' : 'സുലൈമാൻ | കേരള വെബ് ഡെവലപ്പർ — Next.js, Tailwind, Sanity';
    document.title = title;

    const ensureMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    ensureMeta('description', lang === 'en'
      ? 'Kerala web developer building modern sites with Next.js, Tailwind and Sanity CMS. Tourism, spices, Ayurveda, and UPI demos.'
      : 'Next.js, Tailwind, Sanity CMS ഉപയോഗിച്ച് ആധുനിക വെബ്‌സൈറ്റുകൾ നിർമ്മിക്കുന്ന കേരള വെബ് ഡെവലപ്പർ. ടൂറിസം, മസാല, ആയുർവേദ, UPI ഡെമോ.');
    ensureMeta('keywords', 'Kerala web developer, Next.js developer Kerala, Sanity CMS, Tailwind CSS, Tourism website Kerala, Ayurveda website, Spices e-commerce, UPI demo');
  }, [lang]);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <KeralaHero t={t} />
      <ProjectsSection t={t} lang={lang} />
      <AboutContactSection t={t} />
      <footer className="py-10 text-center text-sm text-neutral-500">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {year} Sulaiman • {lang === 'en' ? 'Built for Kerala with love' : 'കേരളത്തിന് വേണ്ടി സ്നേഹത്തോടെ'}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
