import { Outlet } from 'react-router-dom';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import StickyCallButton from '@/sections/StickyCallButton';
import ScrollToHash from '@/components/navigation/ScrollToHash';
import LocalBusinessSchema from '@/components/shared/LocalBusinessSchema';

/**
 * AppLayout — root shell for all public pages.
 * Provides: header, main outlet, footer, mobile CTA, SEO schema, hash scroll.
 */
export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <LocalBusinessSchema />
      <ScrollToHash />
      <Header />
      <main id="main-content" className="flex-1" role="main">
        <Outlet />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
}
