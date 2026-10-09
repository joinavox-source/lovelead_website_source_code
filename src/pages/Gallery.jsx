import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import AnimateIn from '../components/AnimateIn';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

const PHOTOS = [
  {
    id: 'frontyard-1',
    src: '/photos/lovelead_frontyard.jpeg',
    category: 'exterior',
    title: 'Front Exterior & Pristine Grounds',
    subtitle: 'Exterior & Grounds',
    desc: 'Spacious two-story residential home in a quiet, peaceful Cottage Grove neighborhood with private driveway and manicured lawn.',
    alt: 'Front exterior view of LoveLead Assisted Living two-story residential home with driveway in Cottage Grove, MN',
  },
  {
    id: 'frontyard-2',
    src: '/photos/lovelead_frontyard2.jpeg',
    category: 'exterior',
    title: 'Welcoming Front Entrance & Porch',
    subtitle: 'Exterior & Grounds',
    desc: 'Accessible front entrance and covered porch warmly welcoming families, visitors, and loved ones into our home.',
    alt: 'Welcoming front entrance and covered porch at LoveLead Assisted Living home in Cottage Grove',
  },
  {
    id: 'living-1',
    src: '/photos/lovelead_living_area.jpeg',
    category: 'living',
    title: 'Main Sunlit Living Room',
    subtitle: 'Living & Lounges',
    desc: 'Expansive central living room with soaring ceilings, large picture windows, and warm natural sunlight throughout the day.',
    alt: 'Spacious central living room with soaring ceilings, large picture windows, and natural daylight at LoveLead',
  },
  {
    id: 'living-2',
    src: '/photos/lovelead_living_area2.jpeg',
    category: 'living',
    title: 'Open-Concept Common Spaces',
    subtitle: 'Living & Lounges',
    desc: 'Flowing open layout connecting living, dining, and social areas so residents never feel isolated or confined.',
    alt: 'Open-concept living and social common area connecting to dining and kitchen spaces at LoveLead',
  },
  {
    id: 'living-sofa',
    src: '/photos/lovelead_sofa_area.jpeg',
    category: 'living',
    title: 'Comfortable Fireside Sofa Lounge',
    subtitle: 'Living & Lounges',
    desc: 'Plush couches and warm gathering space designed for family visits, reading, board games, and group conversations.',
    alt: 'Cozy fireside sofa lounge with comfortable seating for family visits and conversations at LoveLead',
  },
  {
    id: 'living-upper',
    src: '/photos/lovelead_upper_living.jpeg',
    category: 'living',
    title: 'Upper-Level Quiet Retreat',
    subtitle: 'Living & Lounges',
    desc: 'A tranquil second-floor living lounge offering a peaceful setting for personal reflection, reading, or private family moments.',
    alt: 'Tranquil upper-level retreat lounge for reading, reflection, and quiet family moments at LoveLead',
  },
  {
    id: 'dining-1',
    src: '/photos/lovelead_dining_area.jpeg',
    category: 'dining',
    title: 'Family-Style Dining Room',
    subtitle: 'Kitchen & Dining',
    desc: 'Spacious dining table where residents gather daily for nutritious, home-cooked meals and uplifting camaraderie.',
    alt: 'Family-style dining room table where residents enjoy home-cooked meals together at LoveLead',
  },
  {
    id: 'kitchen-1',
    src: '/photos/lovelead_kitchen.jpeg',
    category: 'dining',
    title: 'Modern Chef-Equipped Kitchen',
    subtitle: 'Kitchen & Dining',
    desc: 'Fully equipped residential kitchen where freshly prepared, wholesome meals and personalized dietary menus are crafted.',
    alt: 'Modern residential kitchen equipped for fresh daily meal and dietary preparation at LoveLead',
  },
  {
    id: 'kitchen-2',
    src: '/photos/lovelead_kitchen2.jpeg',
    category: 'dining',
    title: 'Kitchen Cooking & Preparation Station',
    subtitle: 'Kitchen & Dining',
    desc: 'Sparkling clean prep areas allowing our culinary team to accommodate specialized diabetic, low-sodium, and soft diets.',
    alt: 'Spotless kitchen preparation counter tailored for diabetic, low-sodium, and special senior diets',
  },
  {
    id: 'kitchen-3',
    src: '/photos/lovelead_kitchen3.jpeg',
    category: 'dining',
    title: 'Breakfast Bar & Social Island',
    subtitle: 'Kitchen & Dining',
    desc: 'Open-concept breakfast island where residents can chat with caregivers and enjoy morning coffee or fresh afternoon snacks.',
    alt: 'Open breakfast island bar where residents socialize with caregivers over coffee and snacks at LoveLead',
  },
  {
    id: 'bedroom-1',
    src: '/photos/lovelead_bedroom.jpeg',
    category: 'suites',
    title: 'Private Resident Bedroom Suite',
    subtitle: 'Suites & Bathrooms',
    desc: 'Comfortable private bedroom featuring generous natural daylight, closet storage, and accessible walker-friendly spacing.',
    alt: 'Comfortable private resident bedroom suite with natural lighting and walker-accessible space at LoveLead',
  },
  {
    id: 'bathroom-1',
    src: '/photos/lovelead_bathroom.jpeg',
    category: 'suites',
    title: 'Bright Accessible Bathroom',
    subtitle: 'Suites & Bathrooms',
    desc: 'Modern bathroom equipped with safety fixtures, wide vanity, slip-resistant flooring, and dignified personal hygiene space.',
    alt: 'Bright, modern senior-accessible bathroom with safety grab bars and slip-resistant floor at LoveLead',
  },
  {
    id: 'backyard-1',
    src: '/photos/lovelead_backyard.jpeg',
    category: 'exterior',
    title: 'Expansive Private Fenced Backyard',
    subtitle: 'Exterior & Grounds',
    desc: 'Lush outdoor green space surrounded by mature trees, offering a private, peaceful retreat for fresh air and sunshine.',
    alt: 'Expansive private fenced backyard lawn surrounded by mature trees at LoveLead Assisted Living',
  },
  {
    id: 'backyard-2',
    src: '/photos/lovelead_backyard2.jpeg',
    category: 'exterior',
    title: 'Backyard Lawn & Walking Grounds',
    subtitle: 'Exterior & Grounds',
    desc: 'Secure grounds perfect for gentle outdoor walks, pet therapy visits, bird watching, and peaceful summertime gatherings.',
    alt: 'Secure green backyard walking grounds ideal for fresh air, gardening, and peaceful outdoor leisure',
  },
  {
    id: 'backyard-deck',
    src: '/photos/lovelead_backyard_staircase.jpeg',
    category: 'exterior',
    title: 'Elevated Deck & Scenic Yard View',
    subtitle: 'Exterior & Grounds',
    desc: 'Sturdy back deck and stairway overlooking the tree-lined backyard grounds, providing beautiful views through all seasons.',
    alt: 'Elevated wooden deck and staircase overlooking peaceful tree-lined grounds at LoveLead Assisted Living',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Photos (15)' },
  { id: 'exterior', label: 'Exterior & Grounds (5)' },
  { id: 'living', label: 'Living & Lounges (4)' },
  { id: 'dining', label: 'Kitchen & Dining (4)' },
  { id: 'suites', label: 'Suites & Bathrooms (2)' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = activeCategory === 'all'
    ? PHOTOS
    : PHOTOS.filter((p) => p.category === activeCategory);

  const currentIndex = selectedPhoto
    ? filteredPhotos.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    if (filteredPhotos.length === 0) return;
    const prevIdx = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIdx]);
  }, [currentIndex, filteredPhotos]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (filteredPhotos.length === 0) return;
    const nextIdx = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIdx]);
  }, [currentIndex, filteredPhotos]);

  // Keyboard navigation & body scroll lock
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

const GALLERY_BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.loveleadal.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Facility Tour & Gallery',
      item: 'https://www.loveleadal.com/gallery',
    },
  ],
};

  return (
    <main id="main-content" className="gallery-page">
      <SEO
        title="Residence Photo Tour & Private Suites"
        description="Explore 15 high-definition photos of LoveLead Assisted Living in Cottage Grove, MN: private resident suites, sunlit living lounges, chef-equipped kitchen, and fenced backyard grounds."
        keywords="assisted living photo tour Cottage Grove, senior housing photos Minnesota, private assisted living bedrooms Cottage Grove MN, senior living community tour"
        path="/gallery"
        schema={GALLERY_BREADCRUMB_SCHEMA}
      />
      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <img
          src="/photos/lovelead_frontyard.jpeg"
          alt="Exterior view of LoveLead Assisted Living residential home in Cottage Grove, Minnesota"
          className="page-hero-bg-img"
        />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <AnimateIn>
            <span className="page-hero-tag">
              Cottage Grove, Minnesota
            </span>
            <h1 className="page-hero-title">
              Our Home &amp; Facility Tour
            </h1>
            <p className="page-hero-desc">
              Experience LoveLead Assisted Living — a genuine, warm residential home designed with spacious living areas, private bedroom suites, a full chef&apos;s kitchen, and serene outdoor grounds.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-sm">
                Schedule an In-Person Tour
              </Link>
              <a href="tel:+16122603900" className="btn btn-outline-white btn-sm">
                Call (612) 260-3900
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ===== PHOTO GALLERY SECTION ===== */}
      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            label="Visual Tour"
            title="Explore Every Corner of Our Residence"
            subtitle="Browse authentic photos of our Cottage Grove facility. Click any photo to enlarge and read full details."
          />

          {/* Category Filter Pills */}
          <div className="gallery-filters" role="tablist" aria-label="Photo categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`gallery-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="gallery-grid">
            {filteredPhotos.map((photo, idx) => (
              <AnimateIn key={photo.id} delay={(idx % 6) * 0.06}>
                <div
                  className="gallery-item"
                  onClick={() => setSelectedPhoto(photo)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedPhoto(photo); }}
                  aria-label={`View photo: ${photo.title}`}
                >
                  <img src={photo.src} alt={photo.alt || photo.title} loading="lazy" />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-category">{photo.subtitle}</span>
                    <h3 className="gallery-item-title">{photo.title}</h3>
                  </div>
                  <div className="gallery-item-zoom" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOME HIGHLIGHTS SUMMARY ===== */}
      <section className="section section-warm">
        <div className="container">
          <SectionHeader
            label="Comfort & Quality"
            title="Why Our Residential Home Sets Us Apart"
            subtitle="Unlike large, impersonal multi-story commercial facilities, LoveLead provides an authentic family home setting with 24/7 professional care."
          />

          <div className="grid-4" style={{ marginTop: '2.5rem' }}>
            <div className="card card-hover">
              <div className="card-icon-box card-icon-box--brand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="card-title" style={{ fontSize: '1.12rem', marginBottom: '0.45rem', color: 'var(--text-headings)' }}>
                True Residential Home
              </h3>
              <p className="card-text" style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                A cozy, dignified house in a quiet suburban neighborhood that feels like family, not an institution.
              </p>
            </div>

            <div className="card card-hover">
              <div className="card-icon-box card-icon-box--brand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="card-title" style={{ fontSize: '1.12rem', marginBottom: '0.45rem', color: 'var(--text-headings)' }}>
                24/7 On-Site Supervision
              </h3>
              <p className="card-text" style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                Professional caregivers and RN oversight on-site around the clock for safety, vitals monitoring, and emergencies.
              </p>
            </div>

            <div className="card card-hover">
              <div className="card-icon-box card-icon-box--brand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>
              <h3 className="card-title" style={{ fontSize: '1.12rem', marginBottom: '0.45rem', color: 'var(--text-headings)' }}>
                Home-Cooked Nutrition
              </h3>
              <p className="card-text" style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                Wholesome meals prepared fresh in our kitchen, customized to individual diabetic, renal, and dietary preferences.
              </p>
            </div>

            <div className="card card-hover">
              <div className="card-icon-box card-icon-box--brand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="card-title" style={{ fontSize: '1.12rem', marginBottom: '0.45rem', color: 'var(--text-headings)' }}>
                Serene Fenced Yard
              </h3>
              <p className="card-text" style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                Secure, tree-lined green backyard for walking, safe outdoor activities, birdwatching, and sunny relaxation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IN-PERSON TOUR BOOKING CTA ===== */}
      <section className="section section-charcoal">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <AnimateIn>
            <span className="section-tag section-tag--light" style={{ marginBottom: '1rem' }}>
              Personal Walkthrough
            </span>
            <h2 className="section-title section-title--light" style={{ marginBottom: '1rem' }}>
              See LoveLead in Person
            </h2>
            <p style={{ color: 'var(--text-inverse-muted)', lineHeight: '1.65', marginBottom: '2rem', maxWidth: '620px', margin: '0 auto 2rem auto' }}>
              We invite prospective residents and their families to tour our residence, walk the grounds, and experience our peaceful, compassionate community firsthand.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-warm btn-lg">
                Book a Private Tour
              </Link>
              <a href="tel:+16122603900" className="btn btn-outline-white btn-lg">
                Call (612) 260-3900
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ===== LIGHTBOX MODAL (PORTAL TO BODY) ===== */}
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
                  Photo {currentIndex + 1} of {filteredPhotos.length}
                </span>
                <span className="gallery-modal-top-tag">
                  {selectedPhoto.subtitle}
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

            {/* Modal Image Stage with Arrows */}
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
                  alt={selectedPhoto.alt || selectedPhoto.title}
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
                  to="/contact"
                  className="btn btn-primary btn-sm"
                  onClick={() => setSelectedPhoto(null)}
                >
                  Schedule Tour
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
