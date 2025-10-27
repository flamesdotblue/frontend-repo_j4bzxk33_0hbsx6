import React from 'react';
import { MapPin, Phone, Mail, CheckCircle, User, Wallet, QrCode } from 'lucide-react';

const AboutContactSection = ({ t }) => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-3">{t('about.title')}</h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{t('about.story')}</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {t('about.skillsList').map((s) => (
              <div key={s} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5" />
                <span className="text-sm text-neutral-700 dark:text-neutral-200">{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="contact" className="rounded-2xl p-6 bg-gradient-to-br from-teal-600 to-orange-500 text-white shadow">
          <h3 className="text-xl font-semibold mb-4">{t('contact.title')}</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Kochi, Kerala</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <a href="tel:+919999999999" className="underline underline-offset-2">+91 99999 99999</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <a href="mailto:hello@sulaiman.dev" className="underline underline-offset-2">hello@sulaiman.dev</a>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-white/15 p-4">
            <h4 className="font-medium mb-2 flex items-center gap-2"><Wallet className="w-4 h-4" /> {t('contact.upiTitle')}</h4>
            <p className="text-sm text-white/90">{t('contact.upiDesc')}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
              <span className="px-2 py-1 rounded bg-white/20">sulaiman@upi</span>
              <span className="px-2 py-1 rounded bg-white/20">sulaiman@ybl</span>
              <span className="px-2 py-1 rounded bg-white/20">9037xxxxxx@paytm</span>
              <button className="inline-flex items-center gap-2 bg-white text-teal-700 font-medium px-3 py-1.5 rounded shadow">
                <QrCode className="w-4 h-4" /> {t('contact.upiDemo')}
              </button>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid sm:grid-cols-2 gap-3">
            <div className="sm:col-span-2">
              <label className="text-sm mb-1 block">{t('contact.name')}</label>
              <div className="flex items-center gap-2 bg-white rounded px-3 py-2 text-neutral-800">
                <User className="w-4 h-4 text-neutral-400" />
                <input className="w-full outline-none" placeholder={t('contact.namePh')} />
              </div>
            </div>
            <div>
              <label className="text-sm mb-1 block">{t('contact.email')}</label>
              <input className="w-full bg-white rounded px-3 py-2 text-neutral-800 outline-none" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm mb-1 block">{t('contact.phone')}</label>
              <input className="w-full bg-white rounded px-3 py-2 text-neutral-800 outline-none" placeholder="+91" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm mb-1 block">{t('contact.message')}</label>
              <textarea rows={3} className="w-full bg-white rounded px-3 py-2 text-neutral-800 outline-none" placeholder={t('contact.messagePh')} />
            </div>
            <div className="sm:col-span-2">
              <button className="w-full bg-black/90 hover:bg-black text-white font-medium rounded px-4 py-2">{t('contact.send')}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AboutContactSection;
