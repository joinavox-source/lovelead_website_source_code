import { Link } from 'react-router-dom';
import AnimateIn from '../components/AnimateIn';
import SectionHeader from '../components/SectionHeader';

const SERVICES = [
  {
    id: 'adl',
    title: 'Assistance with ADLs & IADLs',
    desc: 'We support residents with bathing, dressing, grooming, eating, mobility, meal preparation, light housekeeping, laundry, errands, and transportation assistance. Our caregivers work with patience and respect, preserving each resident\'s sense of independence while providing the help they need.',
    details: [
      'Personal hygiene, bathing, and hair care support',
      'Dressing, outfit selection, and grooming assistance',
      'Safe transfer assistance and gentle mobility encouragement',
      'Meal preparation, dietary oversight, and feeding support',
      'Routine light housekeeping, linen changing, and laundry',
      'Errands and local medical transportation coordination',
    ],
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80',
    number: '01',
    tag: 'Daily Living Support',
  },
  {
    id: 'wound',
    title: 'Wound Care Support',
    desc: 'We help monitor wounds, assist with dressing changes as directed, observe for signs of infection, and coordinate with healthcare professionals to support proper healing. Our team is trained to handle wound care protocols with clinical precision and tender compassion.',
    details: [
      'Regular skin integrity assessment and observation',
      'Sterile dressing changes as ordered by attending physicians',
      'Early detection and rapid reporting of infection signs',
      'Coordination with wound care specialists and clinics',
      'Healing progress logs and nurse communication',
      'Preventive skincare and pressure relief repositioning',
    ],
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80',
    number: '02',
    tag: 'Clinical Care',
  },
  {
    id: 'disease',
    title: 'Disease Management',
    desc: 'We provide ongoing support for residents with chronic conditions such as hypertension, heart disease, COPD, and other health concerns through observation, education, reminders, and care coordination.',
    details: [
      'Chronic condition monitoring (hypertension, cardiac, COPD)',
      'Regular vital signs logging (blood pressure, pulse, SpO2)',
      'Health education tailored for residents and family members',
      'Active care coordination with primary care physicians',
      'Proactive symptom management and early intervention',
      'Rapid emergency escalation and medical transport protocols',
    ],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    number: '03',
    tag: 'Chronic Care',
  },
  {
    id: 'medication',
    title: 'Medication Management',
    desc: 'Our team assists with medication reminders, proper administration support, monitoring for side effects, and helping residents stay consistent with prescribed routines. We work closely with pharmacies and physicians to ensure safe medication practices.',
    details: [
      'Timely medication administration support and scheduled reminders',
      'Close observation and documentation for adverse reactions',
      'Direct liaison with pharmacies for synchronized refills',
      'Secure medication storage and inventory tracking',
      'Medication regimen review with visiting physicians',
      'Support with oral medications, eye drops, and topical treatments',
    ],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80',
    number: '04',
    tag: 'Pharmacy & Prescriptions',
  },
  {
    id: 'diabetic',
    title: 'Diabetic Care',
    desc: 'We support residents with blood sugar monitoring, insulin assistance as prescribed, diabetic-friendly meal guidance, and education to help maintain stable glucose levels. Our caregivers understand the daily rhythms of diabetes management.',
    details: [
      'Scheduled glucose testing and digital tracking logs',
      'Insulin administration assistance under provider orders',
      'Diabetic-friendly menu planning and balanced nutrition',
      'Hypoglycemia and hyperglycemia symptom recognition',
      'Foot and skin integrity care specific to diabetic health',
      'Consistent coordination with endocrinologists and dietitians',
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    number: '05',
    tag: 'Endocrine Health',
  },
  {
    id: 'supervision',
    title: '24/7 Care & Supervision',
    desc: 'LoveLead Assisted Living provides round-the-clock care and supervision to ensure residents are safe, comfortable, and supported at all times. Our dedicated team is always present, day and night.',
    details: [
      'Awake, attentive care staff on-site 24 hours every day',
      'Scheduled nighttime comfort checks and toileting assistance',
      'Immediate assistance availability via resident call systems',
      'Comprehensive facility security and peaceful environment',
      'Emergency response readiness with established protocols',
      'Constant oversight that gives families complete peace of mind',
    ],
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80',
    number: '06',
    tag: 'Round-The-Clock Presence',
  },
  {
    id: 'respiratory',
    title: 'Respiratory Care Support',
    desc: 'We assist residents with oxygen therapy, CPAP, nebulizer treatments, equipment care, and breathing monitoring as directed by healthcare providers. Our staff is trained in respiratory care protocols.',
    details: [
      'Oxygen therapy assistance and tank/concentrator monitoring',
      'CPAP and BiPAP setup, hygiene, and nightly compliance',
      'Nebulizer treatments and inhaler technique support',
      'Respiratory tubing, filter, and mask sanitation',
      'Resting breathing pattern and oxygen saturation tracking',
      'Provider communication for dosage and equipment adjustments',
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    number: '07',
    tag: 'Pulmonary Support',
  },
];

export default function Services() {
  return (
    <main id="main-content" className="services-page">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <img
          src="/photos/lovelead_frontyard.jpeg"
          alt="LoveLead Facility Front View"
          className="page-hero-bg-img"
          aria-hidden="true"
        />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <AnimateIn>
            <span className="page-hero-tag">
              Compassionate, Resident-Centered Care
            </span>
            <h1 className="page-hero-title">
              Our Specialized Services
            </h1>
            <p className="page-hero-desc">
              At LoveLead Assisted Living, we provide personalized care that supports independence, dignity, comfort, and safety. Our trained caregivers work closely with residents and families to tailor every detail.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-sm">
                Request a Care Consultation
              </Link>
              <Link to="/gallery" className="btn btn-outline-white btn-sm">
                Tour Our Facility
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ===== SERVICES LIST ===== */}
      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            label="What We Provide"
            title="Comprehensive Support, Individual Attention"
            subtitle="Explore our specialized services below. Every program is customized to meet the unique needs and schedule of each resident."
          />

          <div style={{ marginTop: '3.5rem' }}>
            {SERVICES.map((service, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`service-row ${isEven ? 'service-row--even' : ''}`}
                >
                  <AnimateIn direction={isEven ? 'right' : 'left'} className="service-row-media">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />
                    <span className="service-row-tag">{service.tag}</span>
                  </AnimateIn>

                  <AnimateIn direction={isEven ? 'left' : 'right'} className="service-row-content">
                    <span className="service-row-number">{service.number}</span>
                    <h2 className="service-row-title">
                      {service.title}
                    </h2>
                    <p className="service-row-desc">
                      {service.desc}
                    </p>

                    <div className="service-detail-list">
                      {service.details.map((item, dIdx) => (
                        <div key={dIdx} className="service-detail-item">
                          <span className="bullet-dash">&bull;</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="btn-group" style={{ marginTop: '1.5rem' }}>
                      <Link
                        to={`/contact?inquiry=${encodeURIComponent(service.title)}`}
                        className="btn btn-primary btn-sm"
                      >
                        Inquire About This Service
                      </Link>
                      <Link to="/benefits" className="btn btn-outline-dark btn-sm">
                        View Related Benefits
                      </Link>
                    </div>
                  </AnimateIn>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FACILITY ENVIRONMENT SHOWCASE ===== */}
      <section className="section section-warm">
        <div className="container">
          <SectionHeader
            label="Homelike Setting"
            title="Care Delivered in an Authentic Home Environment"
            subtitle="Clinical excellence meets the warmth and dignity of a real residential home in Cottage Grove."
          />

          <div className="facility-showcase-grid" style={{ marginTop: '2rem' }}>
            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img src="/photos/lovelead_bedroom.jpeg" alt="Private Bedroom Suite" loading="lazy" />
                <span className="facility-card-tag">ADL & Rest</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Private Resident Suites</h3>
                <p className="facility-card-desc">Personal bedrooms configured for dignity, comfort, and safe mobility assistance.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img src="/photos/lovelead_bathroom.jpeg" alt="Accessible Bathroom" loading="lazy" />
                <span className="facility-card-tag">Hygiene Care</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Accessible Modern Bathrooms</h3>
                <p className="facility-card-desc">Safety grab bars, accessible vanities, and clean sterile surfaces for gentle personal grooming.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img src="/photos/lovelead_kitchen.jpeg" alt="Kitchen Prep" loading="lazy" />
                <span className="facility-card-tag">Dietary Care</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Nutritional & Dietary Preparation</h3>
                <p className="facility-card-desc">Individualized meal preparation catering to diabetic, cardiac, and custom physician meal plans.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img src="/photos/lovelead_living_area2.jpeg" alt="Living Room Supervision" loading="lazy" />
                <span className="facility-card-tag">24/7 Presence</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">24/7 Awake Attentive Care</h3>
                <p className="facility-card-desc">Open-concept common spaces where caregivers observe vitals and offer attentive companionship.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/gallery" className="btn btn-primary">
                Explore Full Facility Photo Tour
              </Link>
              <Link to="/contact" className="btn btn-outline-dark">
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section className="section section-brand">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <AnimateIn>
            <h2 className="section-title section-title--light" style={{ marginBottom: '1rem' }}>
              Need a Customized Care Plan for Your Loved One?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.65', marginBottom: '2rem' }}>
              Every resident is unique. Let our clinical and administrative team craft an individualized support routine tailored precisely to their needs and preferences.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-warm btn-lg">
                Schedule a Visit &amp; Assessment
              </Link>
              <Link to="/why-choose-us" className="btn btn-outline-white btn-lg">
                See Why Families Trust Us
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
