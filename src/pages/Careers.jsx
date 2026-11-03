import { Link } from 'react-router-dom';
import AnimateIn from '../components/AnimateIn';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

const BENEFITS = [
  {
    title: 'Meaningful Work',
    desc: 'Make a real, lasting impact on residents\' lives every single day. Your care and compassion directly elevate the quality of life for seniors in our home.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    title: 'Supportive 1:3 Ratio',
    desc: 'Work in an intimate residential home with a favorable 1:3 staff-to-resident ratio, giving you the time and focus needed to deliver unhurried, person-centered care.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Training & Development',
    desc: 'Receive ongoing clinical guidance, paid orientation, and professional skill enhancement in medication administration, specialized dietary prep, and memory care.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="m17 5-5-3-5 3" />
        <path d="m17 19-5 3-5-3" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Close-Knit Community',
    desc: 'Join a family-owned care environment in Cottage Grove where every team member is valued as an essential partner in our shared mission of dignified aging.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

const APPLICATION_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdIpVZxslBzqTHRsxza4-ZaC-dnH8s7asKd5iH_IDuFtBayTg/viewform?usp=publish-editor';

const CAREERS_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
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
          name: 'Careers',
          item: 'https://www.loveleadal.com/careers',
        },
      ],
    },
    {
      '@type': 'JobPosting',
      title: 'Direct Support Professional (DSP)',
      description:
        'DSPs provide compassionate, person-centered care and assistance to residents in a safe, supportive, and respectful environment.',
      datePosted: '2026-10-01',
      employmentType: 'FULL_TIME',
      hiringOrganization: {
        '@type': 'Organization',
        name: 'LoveLead AL LLC',
        sameAs: 'https://www.loveleadal.com',
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '7357 Jensen Ave S',
          addressLocality: 'Cottage Grove',
          addressRegion: 'MN',
          postalCode: '55016',
          addressCountry: 'US',
        },
      },
      totalJobOpenings: 2,
    },
  ],
};

export default function Careers() {
  return (
    <main id="main-content" className="careers-page">
      <SEO
        title="Careers & DSP Opportunities"
        description="Join the LoveLead AL LLC care team in Cottage Grove, MN. We are recruiting two (2) qualified Direct Support Professionals (DSPs) to provide compassionate, person-centered elder care."
        keywords="careers assisted living Cottage Grove, DSP jobs Minnesota, direct support professional hiring, caregiver jobs Twin Cities, LoveLead AL LLC careers"
        path="/careers"
        schema={CAREERS_SCHEMA}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <img
          src="/photos/lovelead_frontyard.jpeg"
          alt="Exterior landscaped grounds and front entrance of LoveLead AL LLC residential home in Cottage Grove, MN"
          className="page-hero-bg-img"
        />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <AnimateIn>
            <span className="page-hero-tag">Join Our Care Team</span>
            <h1 className="page-hero-title">Careers at LoveLead</h1>
            <p className="page-hero-desc">
              Make a meaningful difference every single day. Join our compassionate caregiving team dedicated to person-centered support in a warm, dignified residential setting.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ===== FEATURED JOB LISTING CARD ===== */}
      <section className="section section-warm">
        <div className="container">
          <div className="careers-job-card-wrapper">
            <AnimateIn>
              <div
                className="card card--surface"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                {/* Decorative Accent Bar */}
                <div className="modal-accent-bar" style={{ height: '5px' }} />

                <div style={{ padding: '2.5rem 2.25rem' }}>
                  {/* Company Header */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      marginBottom: '1rem',
                      paddingBottom: '0.85rem',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--color-brand)',
                      }}
                    >
                      LoveLead AL LLC &bull; Direct Support Professional (DSP) Application
                    </span>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        backgroundColor: 'var(--color-brand-wash)',
                        color: 'var(--color-brand-deep)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        border: '1px solid var(--color-brand-pale)',
                      }}
                    >
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          backgroundColor: '#10b981',
                        }}
                      />
                      Now Actively Hiring
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: 'var(--text-headings)',
                      marginBottom: '0.65rem',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    WELCOME TO LOVELEAD AL LLC
                  </h2>

                  <p
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Thank you for your interest in joining our team!
                  </p>

                  <p
                    style={{
                      fontSize: '0.98rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.65',
                      marginBottom: '1.75rem',
                    }}
                  >
                    We are currently recruiting two (2) qualified Direct Support Professionals (DSPs) for our assisted living facility.
                  </p>

                  {/* Structured Position Meta Block */}
                  <div
                    style={{
                      backgroundColor: 'var(--bg-warm, #f8f6f0)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.35rem 1.5rem',
                      marginBottom: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem',
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.5rem' }}>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          color: 'var(--text-headings)',
                          minWidth: '150px',
                        }}
                      >
                        POSITION:
                      </span>
                      <strong style={{ fontSize: '1rem', color: 'var(--text-headings)' }}>
                        Direct Support Professional (DSP)
                      </strong>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.5rem' }}>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          color: 'var(--text-headings)',
                          minWidth: '150px',
                        }}
                      >
                        LOCATION:
                      </span>
                      <span style={{ fontSize: '0.96rem', color: 'var(--text-main)' }}>
                        7357 Jensen Ave S, Cottage Grove, MN 55016, United States
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.5rem' }}>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          color: 'var(--text-headings)',
                          minWidth: '150px',
                        }}
                      >
                        OPEN POSITIONS:
                      </span>
                      <span
                        style={{
                          display: 'inline-block',
                          backgroundColor: 'var(--color-brand)',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          padding: '0.15rem 0.65rem',
                          borderRadius: 'var(--radius-pill)',
                        }}
                      >
                        2 Open Positions
                      </span>
                    </div>
                  </div>

                  {/* Job Scope & Care Responsibilities */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--text-headings)',
                        marginBottom: '0.55rem',
                      }}
                    >
                      Role Summary &amp; Responsibilities
                    </h3>
                    <p
                      style={{
                        fontSize: '0.98rem',
                        color: 'var(--text-main)',
                        lineHeight: '1.7',
                        marginBottom: '1rem',
                      }}
                    >
                      DSPs provide compassionate, person-centered care and assistance to residents in a safe, supportive, and respectful environment.
                    </p>
                    <ul
                      style={{
                        paddingLeft: '1.25rem',
                        lineHeight: '1.75',
                        fontSize: '0.93rem',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem',
                      }}
                    >
                      <li>Assisting residents with Activities of Daily Living (ADLs) such as dressing, bathing, and mobility</li>
                      <li>Medication reminders and administration support following approved care plans</li>
                      <li>Preparing nutritious, home-cooked meals following personalized dietary requirements</li>
                      <li>Engaging residents in meaningful recreational, cognitive, and social activities</li>
                      <li>Maintaining a clean, dignified, and comfortable residential home environment</li>
                      <li>Observing, documenting, and communicating health or behavioral changes to supervisory nurses</li>
                    </ul>
                  </div>

                  {/* Application Note */}
                  <div
                    style={{
                      padding: '1rem 1.25rem',
                      backgroundColor: 'var(--color-brand-wash)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-brand-pale)',
                      marginBottom: '2rem',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--color-brand-deep)',
                        lineHeight: '1.6',
                        margin: 0,
                      }}
                    >
                      <strong>Important:</strong> Please complete this application accurately. Our recruitment team will review your qualifications and contact suitable candidates for an initial interview.
                    </p>
                  </div>

                  {/* Prominent CTA Actions */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '1rem',
                      alignItems: 'center',
                    }}
                  >
                    <a
                      href={APPLICATION_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-lg"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.55rem',
                      }}
                    >
                      <span>Apply Now via Official Form</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>

                    <a
                      href="tel:+16122603900"
                      className="btn btn-outline-dark btn-lg"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>Questions? (612) 260-3900</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== WHY WORK WITH US SECTION ===== */}
      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            label="Why LoveLead"
            title="Why Work With Our Care Team"
            subtitle="We believe exceptional care starts with caregivers who feel valued, supported, and respected every day."
          />

          <div className="grid-2" style={{ marginTop: '2.5rem' }}>
            {BENEFITS.map((benefit, idx) => (
              <AnimateIn key={benefit.title} delay={idx * 0.08}>
                <div
                  className="card card--surface card-hover"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1.75rem',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-brand-wash)',
                      color: 'var(--color-brand)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      border: '1px solid var(--color-brand-pale)',
                    }}
                    aria-hidden="true"
                  >
                    {benefit.icon}
                  </div>
                  <h3
                    className="card-title"
                    style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="card-text"
                    style={{ fontSize: '0.94rem', lineHeight: '1.65', color: 'var(--text-muted)' }}
                  >
                    {benefit.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA STRIP ===== */}
      <section className="section section-warm" style={{ textAlign: 'center' }}>
        <div className="container">
          <AnimateIn>
            <div className="careers-cta-wrapper">
              <span className="section-tag">Take the Next Step</span>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                Ready to Make a Meaningful Difference?
              </h2>
              <p
                className="section-subtitle"
                style={{ marginBottom: '2rem', maxWidth: '100%' }}
              >
                Join our supportive Cottage Grove assisted living community. Apply online through our official Google Form or contact our recruitment team directly.
              </p>
              <div
                className="btn-group"
                style={{ justifyContent: 'center' }}
              >
                <a
                  href={APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>Apply Now</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <a
                  href="tel:+16122603900"
                  className="btn btn-outline-dark btn-lg"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Call (612) 260-3900</span>
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
