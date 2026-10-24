import React, { useState, useCallback } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Mail,
  Upload,
  Play,
} from 'lucide-react';
import {
  ABOUT_TEAM_MEMBERS,
  ABOUT_TESTIMONIALS,
  ABOUT_LOCATION,
} from '../data/aboutData';
import { Footer } from './Footer';
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
          <div className="s-superhero__kicker">
            <span className="s-superhero__kicker-line"></span>
            <span>About Neominds TechHub</span>
          </div>

          <ScrollReveal as="h1" className="s-superhero__title" blurStrength={8}>
            Engineering <span>what's next</span>
          </ScrollReveal>

          <RevealElement variant="text" delay={0.06}>
            <p className="s-superhero__subtitle">
              Neominds TechHub is a software and AI engineering company delivering web, mobile, cloud and AI solutions for businesses worldwide.
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
              <span>Discuss your challenge</span>
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
            <div
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34, 88, 231, 0.2)',
                border: '2px solid #2258e7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 700,
                color: '#60a5fa',
                marginBottom: '12px',
              }}
            >
              CEO
            </div>
            <h3 className="s-blockquote__name">Executive Leadership</h3>
            <p className="s-blockquote__role">Neominds TechHub</p>
          </div>

          <div className="s-blockquote__content">
            <div className="s-blockquote__quote-mark">&ldquo;</div>
            <blockquote className="s-blockquote__text">
              We don’t just get things done: we <span>think bold</span>. It is our team’s core standard.
            </blockquote>
            <p className="s-blockquote__subtext">
              Every project comes with open sharing of timelines, costs, and risks, backed by weekly demos and full code ownership for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. VIDEO / BRAND SHOWCASE SECTION (.s-video__video)
          ======================================================== */}
      <section className="s-video-section">
        <div className="s-video-section__container">
          <div className="s-video-section__header">
            <h2 className="s-video-section__title">
              Living our <span>values</span>
            </h2>
            <p className="s-video-section__desc">
              From collaborative architecture reviews to deep domain research, our culture is rooted in craftsmanship, curiosity, and shared ambition.
            </p>
          </div>

          <div className="s-video-section__player">
            <video
              poster="/uploads/ESThumbnails/100348/1280.Video.png"
              preload="metadata"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src="/uploads/2025/06/Video-About-us.mp4" type="video/mp4" />
              <source src="/uploads/2025/07/about-neominds.webm" type="video/webm" />
            </video>

            <div
              style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 20px',
                backgroundColor: 'rgba(7, 11, 20, 0.75)',
                backdropFilter: 'blur(8px)',
                borderRadius: '0px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                pointerEvents: 'none',
              }}
            >
              <Play size={16} style={{ color: '#38bdf8', fill: '#38bdf8' }} />
              <span>Neominds Global Culture &amp; Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. CORE VALUES SECTION (.s-values theme-dark2)
          ======================================================== */}
      <section className="s-values" id="values">
        <div className="s-values__container">
          <div className="s-values__header">
            <div className="s-values__badge">
              <span>Living our values</span>
            </div>
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
          6. TEAM GALLERY SECTION (.s-team-gallery js-team-gallery)
          ======================================================== */}
      <section className="s-team-section" id="team">
        <div className="s-team-section__container">
          <div className="s-team-section__header">
            <div className="s-team-section__badge">
              <span>Our People &amp; Practice Leaders</span>
            </div>
            <h2 className="s-team-section__title">Engineering Minds Behind Every Release</h2>
            <p className="s-team-section__desc">
              Meet the principal architects, delivery managers, and domain consultants driving mission-critical projects globally.
            </p>
          </div>

          <div className="s-team-section__grid">
            {ABOUT_TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="s-team-section__card">
                <div className="s-team-section__media">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.position} at Neominds TechHub`}
                    loading="lazy"
                    decoding="async"
                    width="280"
                    height="320"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop';
                    }}
                  />
                </div>
                <div className="s-team-section__info">
                  <h4 className="s-team-section__name">{member.name}</h4>
                  <p className="s-team-section__position">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  borderRadius: '4px',
                  backgroundColor: idx === currentTestimonialIndex ? '#2258e7' : '#334155',
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
                  border: '1px dashed #334155',
                  borderRadius: '4px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  backgroundColor: '#0f172a',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <Upload size={20} style={{ color: '#38bdf8' }} />
                <span style={{ fontSize: '14px', color: '#e2e8f0', fontWeight: 500 }}>
                  {selectedFileName ? selectedFileName : 'Click to upload or drag and drop a file (brief, spec or design)'}
                </span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
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
                  <ShieldCheck size={16} style={{ color: '#38bdf8' }} />
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
                color: '#38bdf8',
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
