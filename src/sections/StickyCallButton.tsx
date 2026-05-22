import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { site } from '../data/site';
import { getPhoneHref } from '../utils/phone';

export default function StickyCallButton() {
  return (
    <motion.a
      href={getPhoneHref(site.phone)}
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 280, damping: 18 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 left-4 right-4 z-50 mx-auto flex max-w-sm items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-emergency-600 to-emergency-700 px-6 py-4 text-base font-bold text-white shadow-2xl shadow-emergency-600/45 ring-2 ring-white/30 sm:hidden"
      aria-label={`Appeler ${site.phoneDisplay} — Urgence 24/7`}
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
        <Phone className="h-5 w-5" aria-hidden />
        <span className="absolute inset-0 animate-ping rounded-full bg-white/30 opacity-75" aria-hidden />
      </span>
      <span>
        Urgence 24/7
        <span className="block text-xs font-medium text-white/85">{site.phoneDisplay}</span>
      </span>
    </motion.a>
  );
}
