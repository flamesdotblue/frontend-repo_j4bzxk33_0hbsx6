import React, { useMemo, useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Kerala Tourism Portal',
    title_ml: 'കേരള ടൂറിസം പോർട്ടൽ',
    description: 'Modern destination guides, backwaters booking, responsive maps.',
    description_ml: 'ആധുനിക ഗൈഡുകൾ, ബാക്ക്‌വാട്ടേഴ്സ് ബുക്കിംഗ്, റെസ്പോൺസീവ് മാപ്സ്.',
    tags: ['Tourism', 'Next.js', 'Maps'],
    client: 'Kerala Tourism Partner',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop',
    link: '#',
    category: 'tourism'
  },
  {
    id: 2,
    title: 'Spice E‑commerce',
    title_ml: 'മസാല ഇ-കൊമേഴ്‌സ്',
    description: 'Headless storefront with Sanity, Razorpay/UPI demo checkout.',
    description_ml: 'സാനിറ്റി ഹെഡ്‌ലെസ് സ്റ്റോർ, റേസർപേ/യുപിഐ ഡെമോ ചെക്കൗട്ട്.',
    tags: ['Spices', 'Sanity', 'Commerce'],
    client: 'Kochi Spice Collective',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop',
    link: '#',
    category: 'spices'
  },
  {
    id: 3,
    title: 'Ayurveda Clinic Site',
    title_ml: 'ആയുർവേദ ക്ലിനിക് സൈറ്റ്',
    description: 'Service pages, doctor profiles, appointment booking.',
    description_ml: 'സേവന പേജുകൾ, ഡോക്ടർ പ്രൊഫൈലുകൾ, അപോയിൻറ്റ്‌മെന്റ് ബുക്കിംഗ്.',
    tags: ['Ayurveda', 'Booking'],
    client: 'Calicut Ayurveda Care',
    image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTZXJ2aWNlJTIwcGFnZXMlMkMlMjBkb2N0b3IlMjBwcm9maWxlcyUyQ3xlbnwwfDB8fHwxNzYxNTQ4MjcwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#',
    category: 'ayurveda'
  },
  {
    id: 4,
    title: 'UPI Payment Demo',
    title_ml: 'യുപിഐ പേയ്‌മെന്റ് ഡെമോ',
    description: 'Showcase of UPI intent and QR flow with mock orders.',
    description_ml: 'യുപിഐ ഇന്റെന്റ്, QR ഫ്‌ളോ, മോക്ക് ഓർഡേഴ്‌സ്.',
    tags: ['UPI', 'Demo'],
    client: 'Demo',
    image: 'https://images.unsplash.com/photo-1634315775834-3e1ac73de6b6?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjE1NDgyNzF8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#',
    category: 'upi'
  }
];

const categories = [
  { key: 'all', label: { en: 'All', ml: 'എല്ലാം' } },
  { key: 'tourism', label: { en: 'Tourism', ml: 'ടൂറിസം' } },
  { key: 'spices', label: { en: 'Spices', ml: 'മസാല' } },
  { key: 'ayurveda', label: { en: 'Ayurveda', ml: 'ആയുർവേദ' } },
  { key: 'upi', label: { en: 'UPI', ml: 'യുപിഐ' } },
];

const ProjectsSection = ({ t, lang }) => {
  const [active, setActive] = useState('all');

  const filtered = useMemo(() => {
    if (active === 'all') return projectsData;
    return projectsData.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-white to-teal-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
            {t('projects.title')}
          </h2>
          <div className="flex items-center gap-2 text-sm text-neutral-600"><Filter className="w-4 h-4" /> {t('projects.filter')}</div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-3 py-1.5 rounded-full border text-sm transition ${
                active === c.key
                  ? 'bg-teal-600 text-white border-teal-600'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {c.label[lang]}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article key={p.id} className="group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={lang === 'en' ? p.title : p.title_ml} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-900 dark:text-white">
                  {lang === 'en' ? p.title : p.title_ml}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                  {lang === 'en' ? p.description : p.description_ml}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-neutral-500">{p.client}</span>
                  <a href={p.link} className="inline-flex items-center gap-1 text-teal-700 hover:underline">
                    {t('projects.view')} <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
