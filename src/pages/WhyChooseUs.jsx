import { Link } from 'react-router-dom';
import AnimateIn from '../components/AnimateIn';
import SectionHeader from '../components/SectionHeader';

const REASONS = [
  {
    number: '01',
    title: 'Loving, Family-Like Environment',
    desc: 'Our home is designed to feel exactly like home. Residents are welcomed into a warm, caring atmosphere where they are treated as cherished family members rather than clinical patients.',
  },
  {
    number: '02',
    title: 'Personalized Care Plans',
    desc: 'No two residents are alike. We develop individualized care plans that evolve dynamically with each resident, ensuring the exact right balance of support and self-reliance at every stage.',
  },
  {
    number: '03',
    title: '24/7 Supervision and Support',
    desc: 'Our dedicated caregivers are on-site around the clock, providing safety, comfort, medication oversight, and immediate reassurance whenever assistance is required, day or night.',
  },
  {
    number: '04',
    title: 'Clean, Safe, and Comfortable Home Setting',
    desc: 'Our residential setting is meticulously maintained to the highest standards of cleanliness, safety, accessibility, and coziness, creating an environment where residents truly feel at ease.',
  },
  {
    number: '05',
    title: 'Assistance with Medical Appointments',
    desc: 'We coordinate and assist with scheduling physician consultations, therapy sessions, pharmacy deliveries, and safe transport to ensure seamless health management.',
  },
  {
    number: '06',
    title: 'Nutritious Meals and Daily Activities',
    desc: 'Every meal is prepared with fresh ingredients accommodating dietary needs, while enriching daily group and individual activities keep residents socially engaged and mentally sharp.',
  },
  {
    number: '07',
    title: 'Respectful Care Promoting Dignity & Independence',
    desc: 'We actively empower our residents. Our philosophy honors personal choices, respects personal privacy, and upholds the dignity and autonomy of every individual in our care.',
  },
];

const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: 'Connect with us by phone, email, or our inquiry form to share your family circumstances and discuss care needs.',
  },
  {
    step: '02',
    title: 'Personal Home Tour',
    desc: 'Visit our Cottage Grove community to explore the bedrooms, dining spaces, living areas, and meet our caregivers in person.',
  },
  {
    step: '03',
    title: 'Comprehensive Care Assessment',
    desc: 'Our clinical team assesses the prospective resident medical history, ADL requirements, dietary preferences, and personal goals.',
  },
  {
    step: '04',
    title: 'Customized Care Plan Scaffolding',
    desc: 'Together with your family and physicians, we construct a customized daily support plan tailored to exact preferences.',
  },
  {
    step: '05',
    title: 'Smooth & Warm Move-In Transition',
    desc: 'We assist with room setup, familiarization routines, and gentle welcome introductions to make move-in day stress-free.',
  },
  {
    step: '06',
    title: 'Ongoing Family Partnership',
    desc: 'Regular communication, transparent care check-ins, and flexible plan updates ensure your loved one always receives optimal care.',
  },
];

export default function WhyChooseUs() {
  return (
    <main id="main-content" className="why-choose-page">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=60"
          alt=""
          className="page-hero-bg-img"
          aria-hidden="true"
        />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <AnimateIn>
            <span className="page-hero-tag">
              The LoveLead Standard
            </span>
            <h1 className="page-hero-title">
              Why Choose LoveLead?
            </h1>
            <p className="page-hero-desc">
              Choosing an assisted living home is one of the most consequential decisions a family makes. Here is why families across Cottage Grove and the Twin Cities place their trust in LoveLead.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-sm">
                Schedule a Tour
              </Link>
              <Link to="/services" className="btn btn-outline-white btn-sm">
                View Care Services
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ===== SEVEN REASONS DETAILED CARDS ===== */}
      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            label="Our Core Commitments"
            title="Seven Reasons Families Choose LoveLead"
            subtitle="Each commitment reflects our dedication to setting the benchmark for resident-centered assisted living."
          />

          <div className="reasons-grid">
            {REASONS.map((reason, i) => (
              <AnimateIn key={reason.title} delay={i * 0.05}>
                <div className="card card-hover reason-card">
                  <span className="reason-number">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="reason-title">
                      {reason.title}
                    </h3>
                    <p className="reason-desc">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL REFLECTION & QUOTE ===== */}
      <section className="section section-warm">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <AnimateIn direction="left">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=900&q=80"
                alt="Loving support between resident and caregiver"
                style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}
                loading="lazy"
              />
            </AnimateIn>

            <AnimateIn direction="right">
              <div style={{ padding: '1rem 0' }}>
                <span className="section-tag section-tag--warm">Our Community Promise</span>
                <blockquote
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    marginBottom: '1.5rem',
                  }}
                >
                  "Making the transition to assisted living is a significant step, and we are here to guide you every step of the way with honesty, patience, and warmth."
                </blockquote>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                  Whether for yourself or a loved one, our team is committed to providing exceptional care with heart and professionalism. We take pride in building genuine relationships with every family who enters our home.
                </p>
                <div className="btn-group">
                  <Link to="/contact" className="btn btn-primary btn-sm">
                    Connect With Our Director
                  </Link>
                  <a href="tel:+16122603900" className="btn btn-outline-dark btn-sm">
                    Call (612) 260-3900
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== 6-STEP ADMISSIONS PROCESS ===== */}
      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            label="Admissions Pathway"
            title="Your Journey to LoveLead"
            subtitle="We have designed our admissions process to be straightforward, supportive, and completely transparent for families."
          />

          <div className="timeline-list" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {ADMISSION_STEPS.map((step, idx) => (
              <AnimateIn key={step.step} delay={idx * 0.06}>
                <div className="timeline-step">
                  <div className="timeline-step-index">
                    {step.step}
                  </div>
                  <div>
                    <h3>
                      {step.title}
                    </h3>
                    <p>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Begin Step 1: Reach Out to LoveLead
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="section section-brand">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <AnimateIn>
            <h2 className="section-title section-title--light" style={{ marginBottom: '1rem' }}>
              Let Us Show You What Sets Us Apart
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.65', marginBottom: '2rem' }}>
              Come visit LoveLead in Cottage Grove and experience the warmth, cleanliness, and dedication that define our community.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-warm btn-lg">
                Schedule a Personal Tour
              </Link>
              <Link to="/benefits" className="btn btn-outline-white btn-lg">
                Explore Resident Benefits
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
