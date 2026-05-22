import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import Button from '../buttons/Button';

const initialState = {
  name: '',
  email: '',
  phone: '',
  city: '',
  service: '',
  message: '',
};

const inputClass =
  'w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3.5 text-slate-900 shadow-sm transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/25 focus:shadow-md focus:shadow-brand-500/5 dark:border-slate-600/80 dark:bg-slate-800/90 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-slate-500 dark:focus:border-brand-400 dark:focus:ring-brand-400/25';

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800/50 dark:bg-green-950/40"
      >
        <CheckCircle className="h-12 w-12 text-green-600" aria-hidden />
        <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-slate-100">Message envoyé</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Merci pour votre demande. Nous vous recontactons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className={compact ? 'space-y-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Nom complet *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Téléphone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="0470 00 00 00"
          />
        </div>
        {!compact && (
          <>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="vous@email.be"
              />
            </div>
            <div>
              <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Commune
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
                className={inputClass}
                placeholder="Olne, Hamoir..."
              />
            </div>
          </>
        )}
      </div>
      {!compact && (
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Service souhaité
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Sélectionnez un service</option>
            <option value="debouchage">Débouchage</option>
            <option value="urgence">Plomberie d&apos;urgence</option>
            <option value="inspection">Inspection caméra</option>
            <option value="canalisation">Canalisation</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      )}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Décrivez votre problème *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 3 : 5}
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="WC bouché, fuite sous évier, odeurs..."
        />
      </div>
      <Button type="submit" variant="secondary" size="lg" icon={Send} className="w-full sm:w-auto">
        Envoyer ma demande
      </Button>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        * Champs obligatoires. Vos données restent confidentielles.
      </p>
    </form>
  );
}
