import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { animate, stagger } from 'motion';
import AnimateIn from '../components/AnimateIn';
import SectionHeader from '../components/SectionHeader';
import heroAssetVideo from '../assets/7522219-uhd_3840_2160_25fps (1).mp4';

const SERVICES_PREVIEW = [
  {
    title: 'Assistance with ADLs & IADLs',
    desc: 'Support with bathing, dressing, grooming, eating, mobility, meal preparation, housekeeping, and transportation.',
    link: '/services#adl',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    boxClass: 'card-icon-box--brand',
  },
  {
    title: 'Medication Management',
    desc: 'Reminders, administration support, side-effect observation, and coordination with prescribing physicians.',
    link: '/services#medication',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
        <path d="m8.5 8.5 7 7" />
      </svg>
    ),
    boxClass: 'card-icon-box--sage',
  },
  {
    title: '24/7 Care & Supervision',
    desc: 'Around-the-clock trained care team awake and attentive to resident needs every hour of the day and night.',
    link: '/services#supervision',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    boxClass: 'card-icon-box--brand',
  },
  {
    title: 'Diabetic Care',
    desc: 'Blood glucose monitoring, insulin assistance as prescribed, and diabetic-friendly nutrition guidance.',
    link: '/services#diabetic',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    boxClass: 'card-icon-box--amber',
  },
  {
    title: 'Wound Care Support',
    desc: 'Observation, dressing changes, infection prevention, and ongoing liaison with medical specialists.',
    link: '/services#wound',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    boxClass: 'card-icon-box--sage',
  },
  {
    title: 'Respiratory Care Support',
    desc: 'Oxygen therapy oversight, CPAP setup, nebulizer treatment assistance, and breathing health tracking.',
    link: '/services#respiratory',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    boxClass: 'card-icon-box--terracotta',
  },
];

const COMMUNITY_GALLERY = [
  {
    title: 'Comfortable Suites',
    category: 'Private Living',
    desc: 'Bright, accessible residential bedrooms designed for personal privacy and quiet relaxation.',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80',
  },
  {
    title: 'Chef-Prepared Dining',
    category: 'Nutritious Meals',
    desc: 'Wholesome culinary dining accommodating dietary needs, cultural heritage, and social conversation.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
  },
  {
    title: 'Scenic Garden Patio',
    category: 'Outdoor Peace',
    desc: 'Secure outdoor spaces with fresh air, garden seating, and gentle walking paths.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&q=80',
  },
  {
    title: 'Community Lounge',
    category: 'Daily Connection',
    desc: 'Cozy common areas for social games, family visits, music therapy, and community events.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80',
  },
];

const CORE_VALUES = [
  {
    title: 'Compassion',
    desc: 'Every interaction is guided by genuine empathy, patient listening, and heartfelt understanding.',
  },
  {
    title: 'Dignity',
    desc: 'Respecting each resident life story, personal choices, cultural heritage, and self-worth.',
  },
  {
    title: 'Safety',
    desc: 'Maintaining a secure, clean, orderly home environment with 24/7 dedicated caregiver presence.',
  },
  {
    title: 'Independence',
    desc: 'Empowering residents to maintain their daily autonomy, hobbies, self-reliance, and personal pace.',
  },
];

const CARE_PILLARS = [
  {
    tag: 'Community',
    title: 'Licensed Assisted Living',
    text: 'Registered and fully compliant residential setting in Cottage Grove, Minnesota.',
  },
  {
    tag: 'Staffing',
    title: '24/7 Professional Presence',
    text: 'Round-the-clock trained care team awake and attentive to resident needs every hour.',
  },
  {
    tag: 'Customization',
    title: 'Resident-Centered Plans',
    text: 'Individualized care strategies customized with families, physicians, and specialists.',
  },
  {
    tag: 'Hospitality',
    title: 'Nutritious & Social Dining',
    text: 'Fresh dietary accommodations, daily engaging activities, and welcoming family visits.',
  },
];

const FACILITY_SHOWCASE_PHOTOS = [
  {
    id: 'frontyard',
    src: '/photos/lovelead_frontyard.jpeg',
    tag: 'Exterior',
    title: 'Quiet Suburban Residence',
    desc: 'Two-story residential home with a welcoming porch, private driveway, and peaceful Cottage Grove neighborhood surroundings.',
  },
  {
    id: 'living',
    src: '/photos/lovelead_living_area2.jpeg',
    tag: 'Living Lounge',
    title: 'Sunlit Living & Social Spaces',
    desc: 'High ceilings and expansive windows where residents relax, converse with family, and participate in engaging group activities.',
  },
  {
    id: 'kitchen',
    src: '/photos/lovelead_kitchen.jpeg',
    tag: 'Kitchen & Dining',
    title: 'Chef-Equipped Kitchen',
    desc: 'Wholesome home-cooked meals prepared fresh daily, tailored to individual diabetic, low-sodium, and physician meal plans.',
  },
  {
    id: 'bedroom',
    src: '/photos/lovelead_bedroom.jpeg',
    tag: 'Private Suite',
    title: 'Comfortable Private Bedrooms',
    desc: 'Serene personal sanctuaries with generous natural sunlight, closet storage, and accessible walker-friendly clearances.',
  },
  {
    id: 'backyard',
    src: '/photos/lovelead_backyard_staircase.jpeg',
    tag: 'Outdoor Grounds',
    title: 'Private Fenced Backyard & Deck',
    desc: 'Serene outdoor lawn and elevated deck surrounded by mature trees for peaceful fresh air, family visits, and relaxation.',
  },
  {
    id: 'bathroom',
    src: '/photos/lovelead_bathroom.jpeg',
    tag: 'Accessible Bath',
    title: 'Modern Accessible Bathrooms',
    desc: 'Bright, dignified hygiene spaces with non-slip flooring, safety grab bars, and accessible vanities.',
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const currentIndex = selectedPhoto
    ? FACILITY_SHOWCASE_PHOTOS.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    const prevIdx = (currentIndex - 1 + FACILITY_SHOWCASE_PHOTOS.length) % FACILITY_SHOWCASE_PHOTOS.length;
    setSelectedPhoto(FACILITY_SHOWCASE_PHOTOS[prevIdx]);
  }, [currentIndex]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    const nextIdx = (currentIndex + 1) % FACILITY_SHOWCASE_PHOTOS.length;
    setSelectedPhoto(FACILITY_SHOWCASE_PHOTOS[nextIdx]);
  }, [currentIndex]);

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') setSelectedPhoto(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto, handlePrev, handleNext]);

  useEffect(() => {
    if (heroRef.current) {
      const items = heroRef.current.querySelectorAll('.hero-animate-item:not(.hero-title)');
      animate(
        items,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.65, delay: stagger(0.1, { start: 0.15 }), easing: [0.16, 1, 0.3, 1] }
      );
    }
  }, []);

  return (
    <main id="main-content" className="home-page">
      {/* ===== HERO SECTION (USING ASSETS VIDEO) ===== */}
      <section className="hero-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          poster="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80"
          aria-hidden="true"
        >
          <source src="/hero-asset.mp4" type="video/mp4" />
          <source src={heroAssetVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <div ref={heroRef} className="container hero-content">
          <span className="hero-badge hero-animate-item">
            Cottage Grove, Minnesota
          </span>
          <h1 className="hero-title" aria-label="Compassionate Care, Comfort, and Community">
            <span className="apple-reveal-line">
              <span className="apple-reveal-mask">
                <span className="apple-reveal-word" style={{ animationDelay: '0.15s' }}>Compassionate</span>
              </span>
              <span className="apple-reveal-mask">
                <span className="apple-reveal-word" style={{ animationDelay: '0.38s' }}>Care,</span>
              </span>
            </span>
            <span className="apple-reveal-line">
              <span className="apple-reveal-mask">
                <span className="apple-reveal-word" style={{ animationDelay: '0.62s' }}>Comfort,</span>
              </span>
              <span className="apple-reveal-mask">
                <span className="apple-reveal-word" style={{ animationDelay: '0.82s' }}>and</span>
              </span>
              <span className="apple-reveal-mask">
                <span className="apple-reveal-word" style={{ animationDelay: '1.02s' }}>Community</span>
              </span>
            </span>
          </h1>
          <p className="hero-lead hero-animate-item">
            At LoveLead Assisted Living, we believe assisted living is more than just a place. It is a caring community that promotes independence while providing the support and security needed to thrive.
          </p>

          <div className="hero-actions hero-animate-item">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Schedule a Personal Visit
            </Link>
            <Link to="/services" className="btn btn-outline-white btn-lg">
              Explore Our Services
            </Link>
          </div>

          <div className="hero-phone-strip hero-animate-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-brand-soft)' }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Direct Office Phone:</span>
            <a href="tel:+16122603900">(612) 260-3900</a>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION WITH RICH DUAL-IMAGE COMPOSITION ===== */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <AnimateIn direction="left">
              <div style={{ position: 'relative' }}>
                {/* Main Caregiver Photo */}
                <img
                  src="/photos/lovelead_living_area.jpeg"
                  alt="Spacious sunlit living room at LoveLead"
                  style={{
                    width: '100%',
                    height: '380px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                  }}
                  loading="lazy"
                />

                {/* Overlapping Inset Cozy Room Photo */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-1.5rem',
                    right: '-1rem',
                    width: '52%',
                    maxWidth: '240px',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '3px solid var(--bg-canvas)',
                  }}
                >
                  <img
                    src="/photos/lovelead_bedroom.jpeg"
                    alt="Comfortable residential room suite"
                    style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>

                {/* 24/7 Care Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'var(--color-brand)',
                    color: '#ffffff',
                    padding: '0.65rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '700', lineHeight: 1 }}>24/7</p>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.15rem' }}>Care &amp; Support</p>
                </div>
              </div>
            </AnimateIn>

            <div style={{ marginTop: '1.5rem' }}>
              <AnimateIn>
                <span className="section-tag">About LoveLead</span>
                <h2 className="section-title">
                  More Than a Place. A Caring Family.
                </h2>
                <p className="section-subtitle" style={{ marginBottom: '1.25rem' }}>
                  Our Assisted Living Program is designed to create a home-like environment where residents feel valued, respected, and empowered in their daily lives.
                </p>
              </AnimateIn>

              {/* Mission Frame */}
              <AnimateIn delay={0.1}>
                <div className="editorial-frame">
                  <span className="editorial-frame-tag" style={{ color: 'var(--color-brand)' }}>Our Mission</span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                    To enhance and enrich the lives of our residents by providing compassionate, high-quality care tailored to their individual preferences in a safe, peaceful, and nurturing environment filled with love, respect, and dignity.
                  </p>
                </div>
              </AnimateIn>

              {/* Vision Frame */}
              <AnimateIn delay={0.16}>
                <div className="editorial-frame editorial-frame--sage">
                  <span className="editorial-frame-tag" style={{ color: 'var(--color-sage)' }}>Our Vision</span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                    To be the safest and most loved Assisted Living in Cottage Grove by providing resident-centered care and hospitality.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.22} style={{ marginTop: '1.5rem' }}>
                <div className="btn-group">
                  <Link to="/why-choose-us" className="btn btn-primary btn-sm">
                    Why Families Trust Us
                  </Link>
                  <Link to="/contact" className="btn btn-secondary btn-sm">
                    Inquire Online
                  </Link>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW (NOW WITH IMAGES ON CARDS & 2-BY-2 MOBILE) ===== */}
      <section className="section section-warm">
        <div className="container">
          <SectionHeader
            label="What We Provide"
            title="Personalized Care Services"
            subtitle="Our trained caregivers work closely with residents and families to create care plans that meet each person's unique physical, emotional, and social needs."
          />

          <div className="grid-3 services-preview-grid">
            {SERVICES_PREVIEW.map((service, i) => (
              <AnimateIn key={service.title} delay={i * 0.05}>
                <div className="card card-hover" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Photo Header */}
                  <div className="card-media-header">
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                    <div className={`card-icon-box ${service.boxClass}`} style={{ margin: 0, width: '2.4rem', height: '2.4rem' }}>
                      {service.icon}
                    </div>
                    <h3 className="card-title" style={{ margin: 0 }}>{service.title}</h3>
                  </div>

                  <p className="card-text" style={{ flex: 1, marginBottom: '1rem' }}>
                    {service.desc}
                  </p>

                  <Link
                    to={service.link}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: '700',
                      color: 'var(--color-brand)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      marginTop: 'auto',
                    }}
                  >
                    <span>Read Details</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="btn btn-primary">
              View All 7 Specialized Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== NEW ENGAGING SECTION: RESIDENTIAL ENVIRONMENT & COMMUNITY LIFE PHOTO SHOWCASE ===== */}
      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            label="Life at LoveLead"
            title="A Look Inside Our Community"
            subtitle="Designed for comfort, tranquility, and safety. Explore the inviting living spaces our residents call home in Cottage Grove."
          />

          <div className="home-gallery-grid">
            {COMMUNITY_GALLERY.map((item, gIdx) => (
              <AnimateIn key={item.title} delay={gIdx * 0.06}>
                <div className="gallery-card card-hover">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-card-body">
                    <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-brand)', fontWeight: '700', display: 'block', marginBottom: '0.25rem' }}>
                      {item.category}
                    </span>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/benefits" className="btn btn-outline-dark btn-sm">
              Discover All Resident Life Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ===== QUALITY PILLARS (STANDARDS, 2-BY-2 ON MOBILE) ===== */}
      <section className="section section-brand">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-tag section-tag--light">
              Our Care Standard
            </span>
            <h2 className="section-title section-title--light">
              Built Upon Integrity and Dedication
            </h2>
          </div>

          <div className="grid-4 pillars-grid">
            {CARE_PILLARS.map((pillar, i) => (
              <AnimateIn key={pillar.title} delay={i * 0.06}>
                <div className="pillar-card">
                  <span className="pillar-tag">{pillar.tag}</span>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-text">{pillar.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/contact" className="btn btn-outline-white btn-sm">
              Schedule a Guided Community Walkthrough
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES SECTION (2-BY-2 ON MOBILE) ===== */}
      <section className="section section-charcoal">
        <div className="container">
          <SectionHeader
            light
            label="Our Core Values"
            title="A Foundation of Love, Respect, and Dignity"
            subtitle="Every daily interaction and clinical care routine is shaped by four guiding principles."
          />

          <div className="grid-4 values-grid">
            {CORE_VALUES.map((val, i) => (
              <AnimateIn key={val.title} delay={i * 0.06}>
                <div className="value-card">
                  <span className="value-number">0{i + 1}</span>
                  <h3 className="value-title">{val.title}</h3>
                  <p className="value-text">{val.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FACILITY PHOTO SHOWCASE SECTION ===== */}
      <section className="section section-warm">
        <div className="container">
          <SectionHeader
            label="Facility Showcase"
            title="A Real Home Filled with Warmth & Dignity"
            subtitle="Take a look inside our licensed Cottage Grove residence — featuring sunlit common rooms, comfortable private suites, a chef-friendly kitchen, and peaceful outdoor grounds."
          />

          <div className="facility-showcase-grid">
            {FACILITY_SHOWCASE_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                className="facility-card facility-card--clickable"
                onClick={() => setSelectedPhoto(photo)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedPhoto(photo); }}
                aria-label={`View photo: ${photo.title}`}
              >
                <div className="facility-card-img-wrap">
                  <img src={photo.src} alt={photo.title} loading="lazy" />
                  <span className="facility-card-tag">{photo.tag}</span>
                  <div className="facility-card-zoom-badge" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>
                <div className="facility-card-body">
                  <h3 className="facility-card-title">{photo.title}</h3>
                  <p className="facility-card-desc">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.75rem' }}>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/gallery" className="btn btn-primary">
                View Full 15-Photo Facility Tour
              </Link>
              <Link to="/contact" className="btn btn-outline-dark">
                Schedule a Visit in Person
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE LOVELEAD HIGHLIGHT ===== */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <SectionHeader
                align="left"
                label="Why Families Select Us"
                title="A Peaceful Setting for Your Loved One"
                subtitle="Transitioning to assisted living is a meaningful journey. We ensure you feel completely supported, informed, and welcomed from day one."
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {[
                  'Loving, family-like environment with personalized attention',
                  'Individualized care plans customized for physical & emotional health',
                  'Clean, safe, comfortable home setting in Cottage Grove',
                  'Assistance with medical scheduling and specialist transport',
                  'Nutritious meals, structured social activities, and gentle exercise',
                  'Respectful care that honors independence and dignity',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span className="bullet-dash">&bull;</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.45' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="btn-group">
                <Link to="/why-choose-us" className="btn btn-primary">
                  Explore Why Choose Us
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Schedule a Walkthrough
                </Link>
              </div>
            </div>

            <AnimateIn direction="right">
              <div>
                <img
                  src="/photos/lovelead_sofa_area.jpeg"
                  alt="Cozy, spacious family lounge inside our Cottage Grove residence"
                  style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}
                  loading="lazy"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== FINAL CALL TO ACTION ===== */}
      <section className="section section-warm">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <AnimateIn>
            <span className="section-tag section-tag--warm">Next Steps</span>
            <h2 className="section-title">Discover a Place to Call Home</h2>
            <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto 1.75rem auto' }}>
              Whether for yourself or a loved one, our Cottage Grove team is committed to providing exceptional care with heart and professionalism.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Tour
              </Link>
              <a href="tel:+16122603900" className="btn btn-warm btn-lg">
                Call (612) 260-3900
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ===== FACILITY PHOTO LIGHTBOX MODAL (PORTAL TO BODY) ===== */}
      {selectedPhoto && typeof document !== 'undefined' && createPortal(
        <div
          className="gallery-modal-backdrop"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="gallery-modal-top-bar">
              <div className="gallery-modal-top-info">
                <span className="gallery-modal-counter">
                  Photo {currentIndex + 1} of {FACILITY_SHOWCASE_PHOTOS.length}
                </span>
                <span className="gallery-modal-top-tag">
                  {selectedPhoto.tag}
                </span>
              </div>
              <button
                type="button"
                className="gallery-modal-close"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo preview"
                title="Close (Esc)"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal Image Stage with Navigation */}
            <div className="gallery-modal-stage">
              <button
                type="button"
                className="gallery-modal-arrow gallery-modal-arrow--prev"
                onClick={handlePrev}
                aria-label="Previous photo"
                title="Previous photo (Left arrow)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="gallery-modal-img-container">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="gallery-modal-img"
                />
              </div>

              <button
                type="button"
                className="gallery-modal-arrow gallery-modal-arrow--next"
                onClick={handleNext}
                aria-label="Next photo"
                title="Next photo (Right arrow)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Modal Details / Meta Footer */}
            <div className="gallery-modal-meta">
              <div className="gallery-modal-text">
                <h3 className="gallery-modal-title">{selectedPhoto.title}</h3>
                <p className="gallery-modal-caption">{selectedPhoto.desc}</p>
              </div>
              <div className="gallery-modal-actions">
                <Link
                  to="/gallery"
                  className="btn btn-outline-white btn-sm"
                  onClick={() => setSelectedPhoto(null)}
                >
                  Full 15-Photo Tour
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-primary btn-sm"
                  onClick={() => setSelectedPhoto(null)}
                >
                  Book Tour
                </Link>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </main>
  );
}
