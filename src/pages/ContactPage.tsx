import { Phone } from 'lucide-react';
import { PageShell, ContactPageBody } from '@/components/pages';
import { SkeletonContactPage } from '@/components/skeletons';
import Button from '@/components/buttons/Button';
import { site } from '@/data/site';
import { contactPage } from '@/data/websiteContent';
import { getPhoneHref } from '@/utils/phone';
import { ROUTES } from '@/constants/routes';

export default function ContactPage() {
  const phoneHref = getPhoneHref(site.phone);

  return (
    <PageShell
      skeleton={<SkeletonContactPage />}
      seo={{
        title: "Contact — Demande d'intervention",
        description: contactPage.firstDescription,
        path: ROUTES.CONTACT,
      }}
      breadcrumb={[{ label: 'Contact', path: ROUTES.CONTACT }]}
      hero={{
        title: contactPage.sections[0]?.title ?? 'Contactez-nous',
        description: contactPage.firstDescription,
        actions: (
          <Button href={phoneHref} variant="emergency" size="md" icon={Phone}>
            {site.phoneDisplay}
          </Button>
        ),
      }}
    >
      <ContactPageBody infoSections={contactPage.sections.slice(1)} />
    </PageShell>
  );
}
