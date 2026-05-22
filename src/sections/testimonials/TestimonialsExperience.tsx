import { testimonials } from '@/data/testimonials';
import { testimonialsPage } from '@/data/websiteContent';
import TestimonialPageHeader from './TestimonialPageHeader';
import TestimonialTrustBar from './TestimonialTrustBar';
import TestimonialSpotlight from './TestimonialSpotlight';
import TestimonialGrid from './TestimonialGrid';
import TestimonialMediaStrip from './TestimonialMediaStrip';
import TestimonialCtaBand from './TestimonialCtaBand';
import './testimonial.css';

export default function TestimonialsExperience() {
  const [featured, ...rest] = testimonials;

  return (
    <div className="testimonial-page-bg">
      <TestimonialPageHeader
        bannerImage={testimonialsPage.bannerImage}
        bannerAlt={testimonialsPage.bannerImageAlt}
        title="Témoignages"
        description="Ce que disent nos clients à Montréal et environs — la satisfaction est notre priorité."
      />
      <TestimonialTrustBar count={testimonials.length} />
      <TestimonialMediaStrip />
      {featured && <TestimonialSpotlight testimonial={featured} />}
      <TestimonialGrid testimonials={rest} />
      <TestimonialCtaBand />
    </div>
  );
}
