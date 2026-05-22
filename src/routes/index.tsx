import { Routes, Route } from 'react-router-dom';
import { AppLayout } from '@/layouts';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import CityPage from '@/pages/CityPage';
import ContactPage from '@/pages/ContactPage';
import DrainCleaningPage from '@/pages/DrainCleaningPage';
import UnlockingPage from '@/pages/UnlockingPage';
import GalleryPage from '@/pages/GalleryPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import NotFoundPage from '@/pages/NotFoundPage';

/**
 * Application routes — wired to AppLayout shell.
 * See routes/config.js for the full route registry.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="villes/:slug" element={<CityPage />} />
        <Route path="nettoyage-drains" element={<DrainCleaningPage />} />
        <Route path="debouchage" element={<UnlockingPage />} />
        <Route path="galerie" element={<GalleryPage />} />
        <Route path="temoignages" element={<TestimonialsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="404" element={<NotFoundPage />} />
        {/* Legacy paths from bkdebouchage.ca */}
        <Route path="cleaning-of-drains-and-sewers" element={<DrainCleaningPage />} />
        <Route path="unlocking" element={<UnlockingPage />} />
        <Route path="photo-gallery" element={<GalleryPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
