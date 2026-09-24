import { Link } from 'react-router-dom';
import AnimateIn from '../components/AnimateIn';
import SectionHeader from '../components/SectionHeader';

const BENEFITS = [
  {
    title: 'Holistic Wellness Programs',
    desc: 'Activities like yoga, meditation, music therapy, and gentle exercise classes support physical, mental, and emotional well-being. We believe in nurturing every dimension of health so residents feel energized and uplifted.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    tag: 'Whole-Person Wellness',
    number: '01',
    points: ['Mindful meditation & yoga', 'Music therapy sessions', 'Gentle mobility classes', 'Cognitive stimulation games'],
  },
  {
    title: 'Personalized Care Plans',
    desc: 'Each resident\'s needs are assessed individually, ensuring they receive tailored support that adapts over time. From physical assistance to emotional encouragement, care plans evolve as life changes.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    tag: 'Individual Focus',
    number: '02',
    points: ['Individualized baseline intake', 'Regular health check assessments', 'Adaptable care tiers', 'Family input collaboration'],
  },
  {
    title: 'Family Engagement & Support',
    desc: 'Transparency through regular family updates, care conferences, and educational resources strengthens trust and communication. Families are always valued partners in their loved one\'s life journey.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    tag: 'Family Partnership',
    number: '03',
    points: ['Scheduled family care reviews', 'Open visiting guidelines', 'Virtual video call assistance', 'Community newsletters & updates'],
  },
  {
    title: 'Technology-Assisted Care',
    desc: 'Smart monitoring, telehealth integrations, and accessible digital devices enhance resident safety and connection. Technology is woven unobtrusively into our daily caregiving to safeguard well-being.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tag: 'Modern Safety',
    number: '04',
    points: ['Direct telehealth consultations', 'Smart safety sensor alerts', 'Digital vitals documentation', 'Family connection portals'],
  },
  {
    title: 'Transportation Services',
    desc: 'Dedicated assistance with scheduling medical appointments, social outings, and local community events ensures residents stay active, engaged, and safely mobile throughout the Cottage Grove area.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    tag: 'Reliable Mobility',
    number: '05',
    points: ['Doctor & specialist escorts', 'Local community shopping trips', 'Scenic park drives & outings', 'Caregiver travel assistance'],
  },
  {
    title: 'Pet-Friendly Environment',
    desc: 'A comforting and emotionally supportive space where pet therapy and approved resident pets bring joy, reduce stress, and foster boundless love and companionship in everyday routines.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
    tag: 'Emotional Comfort',
    number: '06',
    points: ['Certified pet therapy visits', 'Companion animal friendly', 'Stress-reduction focus', 'Comforting domestic setting'],
  },
  {
    title: 'Cultural & Spiritual Enrichment',
    desc: 'Faith-based services, multilingual staff members, and culturally inclusive celebrations help every resident feel completely understood, respected, and truly at home.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
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

export default function Benefits() {
  return (
    <main id="main-content">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=60"
          alt=""
          className="page-hero-bg-img"
          aria-hidden="true"
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
              Beyond exceptional personal assistance, LoveLead offers programs and community life designed to bring joy, purpose, and dignity to each day.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-sm">
                Schedule a Tour Today
              </Link>
              <Link to="/why-choose-us" className="btn btn-outline-white btn-sm">
                Explore Why Choose Us
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ===== ASYMMETRICAL BENEFITS PRESENTATION ===== */}
      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            label="Holistic Advantages"
            title="Designed for a Fulfilling Life"
            subtitle="We believe in resident-centered care that honors the whole person: mind, body, and spirit."
          />

          <div style={{ marginTop: '3.5rem' }}>
            {BENEFITS.map((b, idx) => {
              const isFlipped = idx % 2 === 1;
              return (
                <div
                  key={b.title}
                  className={`benefit-row ${isFlipped ? 'benefit-row--flip' : ''}`}
                >
                  <AnimateIn direction={isFlipped ? 'right' : 'left'} className="benefit-media">
                    <img src={b.image} alt={b.title} loading="lazy" />
                    <span className="benefit-badge">{b.tag}</span>
                  </AnimateIn>

                  <AnimateIn direction={isFlipped ? 'left' : 'right'} className="benefit-info">
                    <span className="benefit-number">{b.number}</span>
                    <h2 className="benefit-title">
                      {b.title}
                    </h2>
                    <p className="benefit-desc">
                      {b.desc}
                    </p>

                    <div className="benefit-points-grid">
                      {b.points.map((pt, pIdx) => (
                        <div key={pIdx} className="benefit-point-item">
                          <span className="bullet-dash">&bull;</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="btn-group">
                      <Link
                        to={`/contact?benefit=${encodeURIComponent(b.title)}`}
                        className="btn btn-primary btn-sm"
                      >
                        Ask About This
                      </Link>
                      <Link to="/services" className="btn btn-outline-dark btn-sm">
                        View Care Services
                      </Link>
                    </div>
                  </AnimateIn>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== A DAY IN THE LIFE SECTION ===== */}
      <section className="section section-warm">
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
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
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
