import { Link } from 'react-router-dom';
import AnimateIn from '../components/AnimateIn';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

const REASONS = [
  {
    number: '01',
    title: 'Individualized, Dignified Care Plans',
    desc: 'We recognize that no two residents share the exact same life story or medical requirements. Every care plan is uniquely customized with resident and family input.',
  },
  {
    number: '02',
    title: '24/7 Dedicated Caregiver Presence',
    desc: 'Our staff are present around the clock, fully awake and alert. We provide prompt assistance with activities of daily living, medication schedules, and urgent needs.',
  },
  {
    number: '03',
    title: 'Warm, Welcoming Home Atmosphere',
    desc: 'Unlike large institutional facilities, LoveLead offers an intimate residential home environment where residents quickly form friendships and feel genuinely embraced.',
  },
  {
    number: '04',
    title: 'Family Partnership & Open Communication',
    desc: 'We consider family members our vital partners. From open visiting arrangements to regular care update calls, you are always informed and involved.',
  },
  {
    number: '05',
    title: 'Holistic Mind-Body Well-Being',
    desc: 'Through personalized nutrition, physical wellness routines, creative arts, and spiritual support, we care for the whole person with heartfelt dedication.',
  },
  {
    number: '06',
    title: 'Transparent, Direct Admissions Process',
    desc: 'We demystify the transition into assisted living with clear assessments, straightforward pricing, and patient guidance through every step of paperwork.',
  },
  {
    number: '07',
    title: 'Experienced, Caring Team Members',
    desc: 'Our caregivers undergo rigorous background checks, continuous skills training, and cultural sensitivity preparation to ensure the highest care standards.',
  },
];

const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: 'Reach out by phone, email, or our online form. We discuss your loved one\'s current living situation, daily needs, and initial questions in complete confidence.',
  },
  {
    step: '02',
    title: 'Personalized Tour & Walkthrough',
    desc: 'Visit our Cottage Grove residence. Walk the living areas, tour available bedroom suites, meet our caregivers, and experience our community firsthand.',
  },
  {
    step: '03',
    title: 'Comprehensive Needs Assessment',
    desc: 'Our clinical team reviews medical history, physician orders, ADL assistance requirements, and personal preferences to develop an accurate care profile.',
  },
  {
    step: '04',
    title: 'Custom Care Plan Formulation',
    desc: 'Working collaboratively with you, your loved one, and healthcare providers, we finalize a personalized care plan outlining all daily services and schedules.',
  },
  {
    step: '05',
    title: 'Agreement & Move-In Preparation',
    desc: 'We finalize agreements, clarify costs, coordinate medical orders, and provide checklists to ensure a smooth, worry-free moving day transition.',
  },
  {
    step: '06',
    title: 'Warm Welcome & Settling In',
    desc: 'On move-in day, our team greets your loved one warmly, helps arrange their room, introduces them to fellow residents, and provides extra support during the settling period.',
  },
];

const WHY_CHOOSE_BREADCRUMB_SCHEMA = {
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
      name: 'Why Choose Us',
      item: 'https://www.loveleadal.com/why-choose-us',
    },
  ],
};

export default function WhyChooseUs() {
  return (
    <main id="main-content" className="why-choose-page">
      <SEO
        title="Why Choose LoveLead? | Licensed 1:3 Senior Care in Cottage Grove"
        description="Discover why families trust LoveLead: 1:3 caregiver-to-resident ratio, 24/7 awake care, authentic residential home setting, transparent fees, and personalized senior care in Cottage Grove, MN."
        keywords="why choose assisted living Cottage Grove, best assisted living Minnesota, 1:3 staff ratio senior home, residential care Cottage Grove MN, transparent senior care"
        path="/why-choose-us"
        schema={WHY_CHOOSE_BREADCRUMB_SCHEMA}
      />
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <img
          src="/photos/lovelead_frontyard.jpeg"
          alt="LoveLead Assisted Living residential home in Cottage Grove, Minnesota - Authentic neighborhood care"
          className="page-hero-bg-img"
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
              <Link to="/gallery" className="btn btn-outline-white btn-sm">
                Explore Our Home
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
                alt="Warm, compassionate interaction between dedicated caregiver and senior resident upholding dignity at LoveLead"
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
                  &ldquo;Making the transition to assisted living is a significant step, and we are here to guide you every step of the way with honesty, patience, and warmth.&rdquo;
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

      {/* ===== TRUE HOME VS INSTITUTION PHOTO SHOWCASE ===== */}
      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            label="A True Home Setting"
            title="A Genuine Residential Residence — Not an Impersonal Institution"
            subtitle="LoveLead offers an authentic residential setting with 24/7 licensed professional care."
          />

          <div className="facility-showcase-grid" style={{ marginTop: '2.5rem' }}>
            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img
                  src="/photos/lovelead_frontyard2.jpeg"
                  alt="Authentic residential home front entrance in a quiet Cottage Grove neighborhood - LoveLead Assisted Living"
                  loading="lazy"
                />
                <span className="facility-card-tag">Residential Scale</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Authentic Neighborhood Home</h3>
                <p className="facility-card-desc">No hospital smells or long institutional corridors. A genuine, comfortable family home in Cottage Grove.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img
                  src="/photos/lovelead_living_area.jpeg"
                  alt="Bright, welcoming communal living room filled with natural sunlight and comfortable seating at LoveLead"
                  loading="lazy"
                />
                <span className="facility-card-tag">Family Living</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Sunlit Gathering Spaces</h3>
                <p className="facility-card-desc">Spacious living rooms filled with natural light, comfortable couches, and warm camaraderie.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img
                  src="/photos/lovelead_dining_area.jpeg"
                  alt="Family-style dining table where residents gather for nutritious, home-cooked daily meals at LoveLead"
                  loading="lazy"
                />
                <span className="facility-card-tag">Intimate Dining</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Home-Cooked Table Meals</h3>
                <p className="facility-card-desc">Residents dine together like family, enjoying hot nutritious meals made fresh in our kitchen.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img
                  src="/photos/lovelead_backyard.jpeg"
                  alt="Spacious, secure fenced backyard and green lawn surrounded by mature trees at LoveLead Assisted Living"
                  loading="lazy"
                />
                <span className="facility-card-tag">Nature & Safety</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Private Outdoor Grounds</h3>
                <p className="facility-card-desc">Secure fenced backyard and green lawn surrounded by mature trees for peaceful relaxation.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/gallery" className="btn btn-primary">
              View Complete Facility Photo Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 6-STEP ADMISSIONS PROCESS ===== */}
      <section className="section section-warm">
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
              <Link to="/gallery" className="btn btn-outline-white btn-lg">
                View Facility Photos
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
