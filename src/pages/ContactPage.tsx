import { PageShell } from '@/components/pages';
import { SkeletonContactPage } from '@/components/skeletons';
import ContactExperience from '@/sections/contact/ContactExperience';
import { contactPage } from '@/data/websiteContent';
import { ROUTES } from '@/constants/routes';
import { seoTitle } from '@/utils/pageMeta';

export default function ContactPage() {
  return (
    <PageShell
      skeleton={<SkeletonContactPage />}
      seo={{
        title: seoTitle("Contact — Demande d'intervention"),
        description: contactPage.firstDescription,
        path: ROUTES.CONTACT,
      }}
      breadcrumb={[{ label: 'Contact', path: ROUTES.CONTACT }]}
    >
      <ContactExperience />
    </PageShell>
  );
}
