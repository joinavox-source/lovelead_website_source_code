import { Link } from 'react-router-dom';
import AnimateIn from '../components/AnimateIn';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

const BENEFITS = [
  {
    title: 'Holistic Wellness Programs',
    desc: 'Activities like yoga, meditation, music therapy, and gentle exercise classes support physical, mental, and emotional well-being. We believe in nurturing every dimension of health so residents feel energized and uplifted.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    alt: 'Seniors participating in gentle holistic wellness stretching and mindful movement class',
    tag: 'Whole-Person Wellness',
    number: '01',
    points: ['Mindful meditation & yoga', 'Music therapy sessions', 'Gentle mobility classes', 'Cognitive stimulation games'],
  },
  {
    title: 'Personalized Care Plans',
    desc: 'Each resident\'s needs are assessed individually, ensuring they receive tailored support that adapts over time. From physical assistance to emotional encouragement, care plans evolve as life changes.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    alt: 'Caregiver and senior resident reviewing a personalized health assessment and daily routine plan',
    tag: 'Individual Focus',
    number: '02',
    points: ['Individualized baseline intake', 'Regular health check assessments', 'Adaptable care tiers', 'Family input collaboration'],
  },
  {
    title: 'Family Engagement & Support',
    desc: 'Transparency through regular family updates, care conferences, and educational resources strengthens trust and communication. Families are always valued partners in their loved one\'s life journey.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    alt: 'Loving family members visiting and sharing joyful moments together at LoveLead Assisted Living',
    tag: 'Family Partnership',
    number: '03',
    points: ['Scheduled family care reviews', 'Open visiting guidelines', 'Virtual video call assistance', 'Community newsletters & updates'],
  },
  {
    title: 'Technology-Assisted Care',
    desc: 'Smart monitoring, telehealth integrations, and accessible digital devices enhance resident safety and connection. Technology is woven unobtrusively into our daily caregiving to safeguard well-being.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    alt: 'Healthcare provider utilizing digital monitoring and telehealth technologies for resident safety',
    tag: 'Modern Safety',
    number: '04',
    points: ['Direct telehealth consultations', 'Smart safety sensor alerts', 'Digital vitals documentation', 'Family connection portals'],
  },
  {
    title: 'Transportation Services',
    desc: 'Dedicated assistance with scheduling medical appointments, social outings, and local community events ensures residents stay active, engaged, and safely mobile throughout the Cottage Grove area.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    alt: 'Safe, escorted transportation assistance for senior medical visits and local community outings',
    tag: 'Reliable Mobility',
    number: '05',
    points: ['Doctor & specialist escorts', 'Local community shopping trips', 'Scenic park drives & outings', 'Caregiver travel assistance'],
  },
  {
    title: 'Pet-Friendly Environment',
    desc: 'A comforting and emotionally supportive space where pet therapy and approved resident pets bring joy, reduce stress, and foster boundless love and companionship in everyday routines.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
    alt: 'Gentle therapy pet providing emotional comfort, smiles, and companionship to senior residents',
    tag: 'Emotional Comfort',
    number: '06',
    points: ['Certified pet therapy visits', 'Companion animal friendly', 'Stress-reduction focus', 'Comforting domestic setting'],
  },
  {
    title: 'Cultural & Spiritual Enrichment',
    desc: 'Faith-based services, multilingual staff members, and culturally inclusive celebrations help every resident feel completely understood, respected, and truly at home.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
    alt: 'Inclusive community celebration and spiritual enrichment gathering honoring diverse resident backgrounds',
    tag: 'Inclusion & Spirit',
    number: '07',
    points: ['Multifaith gatherings & quiet room', 'Multilingual caregivers', 'Cultural holiday celebrations', 'Individual dietary heritage respect'],
  },
];

const DAILY_SCHEDULE = [
  { time: 'Morning Routine', title: 'Gentle Awakening & Breakfast', desc: 'Personal hygiene support, tailored dressing assistance, and a nutritious chef-prepared breakfast.' },
  { time: 'Mid-Morning', title: 'Wellness & Exercise', desc: 'Light chair yoga, stretching, walking in the garden, and musical stimulation sessions.' },
  { time: 'Midday', title: 'Community Dining & Social', desc: 'Hearty balanced lunch, lively conversations with friends, and quiet post-lunch relaxation.' },
  { time: 'Afternoon', title: 'Enrichment & Hobbies', desc: 'Creative arts, reading groups, baking activities, and scheduled visits from family members.' },
  { time: 'Evening', title: 'Wholesome Supper & Gathering', desc: 'Nutritious dinner, evening strolls, and relaxing television or board game entertainment.' },
  { time: 'Night', title: 'Comfort & Restful Sleep', desc: 'Evening medication assistance, bedtime routine comfort, and peaceful 24/7 night supervision.' },
];

const BENEFITS_BREADCRUMB_SCHEMA = {
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
      name: 'Resident Benefits',
      item: 'https://www.loveleadal.com/benefits',
    },
  ],
};

export default function Benefits() {
  return (
    <main id="main-content" className="benefits-page">
      <SEO
        title="Resident Benefits & Enriching Daily Life"
        description="Explore the advantages of living at LoveLead in Cottage Grove, MN: holistic wellness programs, personalized care plans, family partnership, pet therapy, and engaging community life."
        keywords="assisted living benefits Cottage Grove, senior wellness Minnesota, holistic senior care, pet friendly assisted living MN, elderly care Cottage Grove"
        path="/benefits"
        schema={BENEFITS_BREADCRUMB_SCHEMA}
      />
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <img
          src="/photos/lovelead_backyard2.jpeg"
          alt="Scenic backyard and outdoor green grounds at LoveLead Assisted Living home in Cottage Grove, MN"
          className="page-hero-bg-img"
        />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <AnimateIn>
            <span className="page-hero-tag">
              Enriching Daily Living
            </span>
            <h1 className="page-hero-title">
              Resident Benefits &amp; Life
            </h1>
            <p className="page-hero-desc">
              Beyond exceptional personal assistance, LoveLead offers programs and community life designed to bring joy, purpose, and dignity to each day in our Cottage Grove home.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-sm">
                Schedule a Tour Today
              </Link>
              <Link to="/gallery" className="btn btn-outline-white btn-sm">
                View Facility Photos
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ===== BENEFITS CARDS CONTAINER PRESENTATION ===== */}
      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            label="Holistic Advantages"
            title="Designed for a Fulfilling Life"
            subtitle="We believe in resident-centered care that honors the whole person: mind, body, and spirit."
          />

          {/* Cards Container Grid (2 side-by-side on mobile via .benefits-page) */}
          <div className="benefits-cards-grid" style={{ marginTop: '2.5rem' }}>
            {BENEFITS.map((b, idx) => (
              <AnimateIn key={b.title} delay={(idx % 3) * 0.08}>
                <div className="benefit-card-container card-hover">
                  <div className="benefit-card-media">
                    <img src={b.image} alt={b.alt || b.title} loading="lazy" />
                    <span className="benefit-card-tag">{b.tag}</span>
                    <span className="benefit-card-num">{b.number}</span>
                  </div>

                  <div className="benefit-card-body">
                    <h3 className="benefit-card-title">{b.title}</h3>
                    <p className="benefit-card-desc">{b.desc}</p>

                    <div className="benefit-card-points">
                      {b.points.map((pt, pIdx) => (
                        <div key={pIdx} className="benefit-card-point">
                          <span className="point-bullet">&bull;</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="benefit-card-footer">
                      <Link
                        to={`/contact?benefit=${encodeURIComponent(b.title)}`}
                        className="btn btn-primary btn-sm"
                      >
                        Inquire
                      </Link>
                      <Link to="/services" className="btn btn-outline-dark btn-sm">
                        Services
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FACILITY LIVING SPACES & AMENITIES PHOTO SHOWCASE ===== */}
      <section className="section section-warm">
        <div className="container">
          <SectionHeader
            label="Real Facility Spaces"
            title="Where Our Residents Thrive Every Day"
            subtitle="Take a look at the real home spaces where our wellness programs, meals, and social connections flourish."
          />

          <div className="facility-showcase-grid" style={{ marginTop: '2rem' }}>
            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img
                  src="/photos/lovelead_backyard.jpeg"
                  alt="Private, peaceful fenced backyard with mature trees for walking and relaxation at LoveLead"
                  loading="lazy"
                />
                <span className="facility-card-tag">Outdoor Grounds</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Serene Private Backyard</h3>
                <p className="facility-card-desc">Lush green yard for walking, pet therapy, birdwatching, and enjoying Minnesota fresh air.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img
                  src="/photos/lovelead_kitchen.jpeg"
                  alt="Clean, modern kitchen preparing fresh, dietitian-guided meals for residents daily at LoveLead"
                  loading="lazy"
                />
                <span className="facility-card-tag">Kitchen & Dining</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Home-Cooked Fresh Meals</h3>
                <p className="facility-card-desc">Chef-prepared culinary meals with specialized diabetic and culturally sensitive recipes.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img
                  src="/photos/lovelead_backyard_staircase.jpeg"
                  alt="Elevated wooden viewing deck overlooking private landscaped backyard at LoveLead Assisted Living"
                  loading="lazy"
                />
                <span className="facility-card-tag">Deck & Patio</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Elevated Viewing Deck</h3>
                <p className="facility-card-desc">A peaceful outdoor vantage point overlooking tree-lined grounds for gentle morning contemplation.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img
                  src="/photos/lovelead_living_area2.jpeg"
                  alt="Comfortable open-concept living lounge where seniors gather for daily conversation and fellowship"
                  loading="lazy"
                />
                <span className="facility-card-tag">Living Lounge</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Sunlit Community Gathering</h3>
                <p className="facility-card-desc">Open-concept living room filled with natural daylight, comfortable seating, and camaraderie.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/gallery" className="btn btn-primary">
              View All 15 Residence Photos
            </Link>
          </div>
        </div>
      </section>

      {/* ===== A DAY IN THE LIFE SECTION ===== */}
      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            label="Daily Rhythm"
            title="A Day Filled with Purpose and Warmth"
            subtitle="Residents enjoy a structured yet flexible daily rhythm designed for comfort, engagement, and restful peace."
          />

          <div className="grid-3">
            {DAILY_SCHEDULE.map((item, sIdx) => (
              <AnimateIn key={item.title} delay={sIdx * 0.07}>
                <div className="card card-hover" style={{ height: '100%' }}>
                  <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brand)', fontWeight: '700', display: 'block', marginBottom: '0.4rem' }}>
                    {item.time}
                  </span>
                  <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '0.6rem', color: 'var(--text-headings)' }}>
                    {item.title}
                  </h3>
                  <p className="card-text" style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/contact" className="btn btn-primary">
              Book a Tour to Experience Daily Life
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="section section-charcoal">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <AnimateIn>
            <h2 className="section-title section-title--light" style={{ marginBottom: '1rem' }}>
              Experience the LoveLead Difference
            </h2>
            <p style={{ color: 'var(--text-inverse-muted)', lineHeight: '1.65', marginBottom: '2rem' }}>
              We invite you to tour our home, meet our caregiving staff, and experience the warmth and respect that our residents cherish every single day.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-warm btn-lg">
                Schedule a Visit
              </Link>
              <a href="tel:+16122603900" className="btn btn-outline-white btn-lg">
                Call (612) 260-3900
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
