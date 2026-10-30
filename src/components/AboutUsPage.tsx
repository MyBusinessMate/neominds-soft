import React, { useState, useCallback } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Mail,
  Upload,
} from 'lucide-react';
import {
  ABOUT_TESTIMONIALS,
  ABOUT_LOCATION,
} from '../data/aboutData';
import { Footer } from './Footer';
import { TeamSection } from './team/TeamSection';
import { ScrollReveal, RevealElement } from './scroll-reveal';
import './AboutUsPage.css';

interface AboutUsPageProps {
  onNavigateHome?: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast?: (msg: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onNavigatePage,
  onSuccessToast,
  onOpenLegal,
}) => {
  // Testimonial Carousel state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Contact Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    ndaFirst: false,
    consent: false,
  });
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % ABOUT_TESTIMONIALS.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? ABOUT_TESTIMONIALS.length - 1 : prev - 1
    );
  }, []);

  const handleFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (onSuccessToast) {
      onSuccessToast(
        `Thank you ${formState.name || 'there'}! We have received your challenge and our solutions team will respond within 1–2 business days.`
      );
    }
    setFormState({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      ndaFirst: false,
      consent: false,
    });
    setSelectedFileName(null);
  }, [formState.name, onSuccessToast]);

  const currentTestimonial = ABOUT_TESTIMONIALS[currentTestimonialIndex];

  return (
    <div className="p-about-page">
      {/* ========================================================
          1. SUPERHERO SECTION (.s-superhero theme-dark)
          ======================================================== */}
      <section className="s-superhero" data-block-name="about-first-window">
        <div className="s-superhero__glow"></div>
        <div className="s-superhero__container">
          <ScrollReveal as="h1" className="s-superhero__title" blurStrength={8}>
            Software engineered <span>to scale</span>
          </ScrollReveal>

          <RevealElement variant="text" delay={0.06}>
            <p className="s-superhero__subtitle">
              We design, build, and run resilient cloud systems and practical AI applications. Working software in your hands every sprint, zero consulting fluff.
            </p>
          </RevealElement>

          <RevealElement variant="card" delay={0.12}>
            <button
              type="button"
              className="s-cta-section__btn"
              onClick={() => {
                const el = document.getElementById('contact-video');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onNavigatePage('contacts');
              }}
            >
              <span>Talk with our team</span>
              <ArrowRight size={16} />
            </button>
          </RevealElement>
        </div>
      </section>

      {/* ========================================================
          2. FOUNDER / CEO MESSAGE (.s-blockquote theme-dark2)
          ======================================================== */}
      <section className="s-blockquote">
        <div className="s-blockquote__container">
          <div className="s-blockquote__author-card">
            <h3 className="s-blockquote__name">Leadership &amp; Architecture</h3>
            <p className="s-blockquote__role">Neominds TechHub</p>
          </div>

          <div className="s-blockquote__content">
            <div className="s-blockquote__quote-mark">&ldquo;</div>
            <blockquote className="s-blockquote__text">
              Real engineering isn’t about hype. It’s about building software you can rely on when traffic surges and downtime is not an option.
            </blockquote>
            <p className="s-blockquote__subtext">
              Every partnership comes with direct access to your engineering leads, weekly demonstrable releases, and full code ownership from day one.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. CORE VALUES SECTION (.s-values theme-dark2)
          ======================================================== */}
      <section className="s-values" id="values">
        <div className="s-values__container">
          <div className="s-values__header">
            <h2 className="s-values__title">What we stand for?</h2>
          </div>

          <div className="s-values__grid">
            {/* Value 1: Respect */}
            <div className="s-values__card">
              <span className="s-values__card-number">01</span>
              <h3 className="s-values__card-name">Respect</h3>
              <p className="s-values__card-text">
                We build enduring partnerships by <span>valuing each person in every interaction</span>, whether collaborating with a client or teammate.
              </p>
            </div>

            {/* Value 2: Common sense */}
            <div className="s-values__card">
              <span className="s-values__card-number">02</span>
              <h3 className="s-values__card-name">Common sense</h3>
              <p className="s-values__card-text">
                We always ask ourselves <span>if our actions are reasonable</span> and what value they bring before proceeding.
              </p>
            </div>

            {/* Value 3: Curiosity */}
            <div className="s-values__card">
              <span className="s-values__card-number">03</span>
              <h3 className="s-values__card-name">Curiosity</h3>
              <p className="s-values__card-text">
                We seek answers to <span>deep-rooted questions</span> and <span>uncover the real business needs</span> behind client requests.
              </p>
            </div>

            {/* Value 4: Courage */}
            <div className="s-values__card">
              <span className="s-values__card-number">04</span>
              <h3 className="s-values__card-name">Courage</h3>
              <p className="s-values__card-text">
                We tackle every challenge with bravery and determination, always <span>ready to face the unknown</span>. Sounds tough? We’re in!
              </p>
            </div>

            {/* Value 5: Commitment */}
            <div className="s-values__card">
              <span className="s-values__card-number">05</span>
              <h3 className="s-values__card-name">Commitment</h3>
              <p className="s-values__card-text">
                We stay true to our promises, acting with <span>transparency and responsibility</span> in all our dealings. We said it, we’ll do it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. VALUES CTA SECTION (.s-cta js-cta)
          ======================================================== */}
      <section className="s-cta-section">
        <div className="s-cta-section__container">
          <h2 className="s-cta-section__title">
            Do our values match yours?
          </h2>
          <button
            type="button"
            className="s-cta-section__btn"
            onClick={() => onNavigatePage('careers')}
          >
            <span>Join us</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ========================================================
          6. TEAM SECTION (Desktop Carousel & Mobile Two-Stage Flow)
          ======================================================== */}
      <TeamSection />

      {/* ========================================================
          7. CLIENT TESTIMONIALS CAROUSEL (.s-carousel theme-dark2)
          ======================================================== */}
      <section className="s-testimonials" id="testimonials">
        <div className="s-testimonials__container">
          <div className="s-testimonials__header">
            <div>
              <h2 className="s-testimonials__title">
                Work that <span>moves things</span>
              </h2>
            </div>

            <div className="s-testimonials__controls">
              <button
                type="button"
                className="s-testimonials__ctrl-btn"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="s-testimonials__ctrl-btn"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="s-testimonials__card">
            <p className="s-testimonials__quote">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </p>

            <div className="s-testimonials__meta">
              <div className="s-testimonials__author-wrap">
                {currentTestimonial.avatar && (
                  <img
                    src={currentTestimonial.avatar}
                    alt={`${currentTestimonial.author} - Client Testimonial, Neominds TechHub`}
                    className="s-testimonials__avatar"
                    loading="lazy"
                    decoding="async"
                    width="56"
                    height="56"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
                <div>
                  <h4 className="s-testimonials__author-name">{currentTestimonial.author}</h4>
                  {currentTestimonial.role && (
                    <p className="s-testimonials__author-role">{currentTestimonial.role}</p>
                  )}
                </div>
              </div>

              {currentTestimonial.logo && (
                <img
                  src={currentTestimonial.logo}
                  alt={`${currentTestimonial.author} Enterprise Client Organization Logo`}
                  className="s-testimonials__logo"
                  loading="lazy"
                  decoding="async"
                  width="120"
                  height="36"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {ABOUT_TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setCurrentTestimonialIndex(idx)}
                style={{
                  width: idx === currentTestimonialIndex ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '8px',
                  backgroundColor: idx === currentTestimonialIndex ? '#fe6200' : '#66615c',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  padding: 0,
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. CONTACT FORM SECTION (.s-contact-video theme-dark2)
          ======================================================== */}
      <section className="s-contact-form-section" id="contact-video">
        <div className="s-contact-form-section__container">
          <h2 className="s-contact-form-section__title">
            Got a challenge? <span>Let's talk it through</span>
          </h2>
          <p className="s-contact-form-section__desc">
            Share your idea, goals and timeline. We reply within one business day and set up a call at a time that suits your time zone.
          </p>

          <form onSubmit={handleFormSubmit} className="s-contact-form">
            <div className="s-contact-form__field">
              <label htmlFor="c-name" className="s-contact-form__label">Name*</label>
              <input
                id="c-name"
                type="text"
                className="s-contact-form__input"
                placeholder="Your full name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>

            <div className="s-contact-form__field">
              <label htmlFor="c-email" className="s-contact-form__label">Work email*</label>
              <input
                id="c-email"
                type="email"
                className="s-contact-form__input"
                placeholder="name@company.com"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>

            <div className="s-contact-form__field">
              <label htmlFor="c-phone" className="s-contact-form__label">Phone number (with country code)</label>
              <input
                id="c-phone"
                type="tel"
                className="s-contact-form__input"
                placeholder="+1 (555) 000-0000 / +91 00000 00000"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              />
            </div>

            <div className="s-contact-form__field">
              <label htmlFor="c-company" className="s-contact-form__label">Company</label>
              <input
                id="c-company"
                type="text"
                className="s-contact-form__input"
                placeholder="Company name"
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
              />
            </div>

            <div className="s-contact-form__field s-contact-form__full">
              <label htmlFor="c-message" className="s-contact-form__label">Message*</label>
              <textarea
                id="c-message"
                className="s-contact-form__textarea"
                placeholder="Share your idea, goals and timeline..."
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              ></textarea>
            </div>

            <div className="s-contact-form__field s-contact-form__full">
              <label
                htmlFor="c-file-upload"
                style={{
                  border: '1px dashed #66615c',
                  borderRadius: '8px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  backgroundColor: '#fbf9f5',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <Upload size={20} style={{ color: '#fe6200' }} />
                <span style={{ fontSize: '14px', color: '#000000', fontWeight: 500 }}>
                  {selectedFileName ? selectedFileName : 'Click to upload or drag and drop a file (brief, spec or design)'}
                </span>
                <span style={{ fontSize: '12px', color: '#4b5563' }}>
                  SVG, PNG, JPG, PDF or DOC (max. 33 MB)
                </span>
                <input
                  id="c-file-upload"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) setSelectedFileName(f.name);
                  }}
                />
              </label>
            </div>

            <div className="s-contact-form__field s-contact-form__full">
              <label className="s-contact-form__checkbox">
                <input
                  type="checkbox"
                  checked={formState.ndaFirst}
                  onChange={(e) => setFormState({ ...formState, ndaFirst: e.target.checked })}
                />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} style={{ color: '#fe6200' }} />
                  Need an NDA first? We'll sign one before you share any details.
                </span>
              </label>
            </div>

            <div className="s-contact-form__field s-contact-form__full">
              <label className="s-contact-form__checkbox">
                <input
                  type="checkbox"
                  required
                  checked={formState.consent}
                  onChange={(e) => setFormState({ ...formState, consent: e.target.checked })}
                />
                <span>
                  I agree to the processing of my personal data as described in the Privacy Policy and Cookie Policy, and understand it may be processed outside my country.
                </span>
              </label>
            </div>

            <div className="s-contact-form__field s-contact-form__full">
              <button type="submit" className="s-contact-form__submit-btn">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ========================================================
          8. LOCATIONS SECTION (.s-contacts theme-dark2)
          ======================================================== */}
      <section className="s-about-locations" id="our-locations">
        <div className="s-about-locations__container">
          <div className="s-about-locations__header">
            <h2 className="s-about-locations__title">Our headquarters</h2>
            <p className="s-about-locations__desc">
              Visit or reach out to our engineering leadership team.
            </p>
            <a
              href="mailto:contact@neomindstechhub.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#fe6200',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <Mail size={16} />
              <span>contact@neomindstechhub.com</span>
            </a>
          </div>

          <div className="s-about-locations__grid" style={{ maxWidth: '640px' }}>
            <div className="s-about-locations__card">
              <h4 className="s-about-locations__city">{ABOUT_LOCATION.city}</h4>
              <p className="s-about-locations__address" style={{ marginBottom: '16px' }}>
                {ABOUT_LOCATION.address}
                <br />
                {ABOUT_LOCATION.postalCode}
              </p>
              <a
                href="mailto:contact@neomindstechhub.com"
                className="s-about-locations__phone"
              >
                <Mail size={13} />
                <span>{ABOUT_LOCATION.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer
        onNavigate={(target) => onNavigatePage(target.replace('#', ''))}
        onOpenLegal={onOpenLegal}
      />
    </div>
  );
};
