import { contactPage } from '@/data/websiteContent';
import { site } from '@/data/site';
import { getPhoneHref } from '@/utils/phone';
import ContactPageHeader from './ContactPageHeader';
import ContactIntroStrip from './ContactIntroStrip';
import ContactMainPanel from './ContactMainPanel';
import ContactDetailsGrid from './ContactDetailsGrid';
import ContactMediaBand from './ContactMediaBand';
import './contact.css';

export default function ContactExperience() {
  const phoneHref = getPhoneHref(site.phone);
  const infoSections = contactPage.sections.slice(1);

  return (
    <div className="contact-page-bg">
      <ContactPageHeader
        bannerImage={contactPage.bannerImage}
        bannerAlt={contactPage.bannerImageAlt}
        title={contactPage.sections[0]?.title ?? 'Contactez-nous'}
        description={contactPage.firstDescription}
        phoneHref={phoneHref}
        phoneDisplay={site.phoneDisplay}
      />
      <ContactIntroStrip text={contactPage.secondDescription} />
      <ContactMainPanel />
      <ContactMediaBand />
      <ContactDetailsGrid sections={infoSections} />
    </div>
  );
}
