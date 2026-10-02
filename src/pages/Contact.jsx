import { useState, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import AnimateIn from '../components/AnimateIn';
import SectionHeader from '../components/SectionHeader';
import ConfirmModal from '../components/ConfirmModal';
import { getStoredUTMParams } from '../utils/utm';

const FAQ_DATA = [
  {
    q: 'What types of care and support does LoveLead provide?',
    a: 'We provide comprehensive care including Assistance with Activities of Daily Living (ADLs & IADLs), Medication Management, Wound Care Support, Diabetic Care, Respiratory Care Support, Chronic Disease Management, and 24/7 Care & Supervision. Every care plan is tailored to the individual resident.',
  },
  {
    q: 'How do I schedule a personal tour of the home?',
    a: 'You can schedule a tour by calling our office directly at (612) 260-3900, emailing info@loveleadal.com, or submitting the contact form on this page. We welcome visits Monday through Saturday and work to accommodate your family schedule.',
  },
  {
    q: 'What does the admissions process involve?',
    a: 'Our admissions process consists of 6 supportive steps: initial consultation, personal home walkthrough, comprehensive care assessment by our clinical staff, custom care plan formulation, guided move-in transition, and ongoing family partnership check-ins.',
  },
  {
    q: 'What payment options and assistance are accepted?',
    a: 'We work closely with families to discuss private pay options, long-term care insurance, and state assistance programs where applicable. Contact our administration directly at (612) 260-3900 for confidential financial guidance.',
  },
  {
    q: 'Can residents bring their own furniture and personal keepsakes?',
    a: 'Yes, absolutely. We encourage residents to bring familiar furniture, cherished photographs, quilts, and decorations to make their room feel warmly like home.',
  },
  {
    q: 'How are nighttime emergencies and clinical changes handled?',
    a: 'Our trained caregiving staff is on-site and awake 24 hours a day. We maintain established rapid-response protocols with local paramedics, clinics, and hospitals in Cottage Grove and surrounding Twin Cities areas.',
  },
  {
    q: 'What are the family visiting hours?',
    a: 'We welcome family members with open arms. Regular visiting hours are Monday - Friday 9:00 AM - 7:00 PM, Saturday 10:00 AM - 5:00 PM, and Sunday 12:00 PM - 4:00 PM. Special family arrangements and video call connections are gladly supported.',
  },
  {
    q: 'What recreational and wellness activities are offered daily?',
    a: 'We offer yoga, meditation, music therapy, arts & crafts, light group exercises, board games, movie nights, community outings, and spiritual enrichment. Every activity is adapted to match residents physical and cognitive comfort levels.',
  },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const inquiryParam = searchParams.get('inquiry') || searchParams.get('benefit') || searchParams.get('search') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    relationship: '',
    message: inquiryParam ? `Hello, I would like more information regarding ${inquiryParam}.` : '',
    preferredContact: 'phone',
    portalPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [showConfirm, setShowConfirm] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [copiedItem, setCopiedItem] = useState('');
  const formRef = useRef(null);

  const lastUpdated = 'September 24, 2026';

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.message.trim()) errors.message = 'Please share a brief message or question';
    return errors;
  };

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      setFormStatus('error');
      return;
    }
    setShowConfirm(true);
  };

  const handleConfirmedSubmit = () => {
    setShowConfirm(false);
    setFormStatus('submitting');

    const utmData = getStoredUTMParams();
    // Simulate real network submission with stored UTMs
    setTimeout(() => {
      console.log('Form submitted with UTM parameters:', { ...formData, ...utmData });
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        relationship: '',
        message: '',
        preferredContact: 'phone',
        portalPassword: '',
      });
    }, 1200);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItem(label);
      setTimeout(() => setCopiedItem(''), 2000);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <main id="main-content" className="contact-page">
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <img
          src="/photos/lovelead_frontyard2.jpeg"
          alt="LoveLead Facility Entrance in Cottage Grove"
          className="page-hero-bg-img"
          aria-hidden="true"
        />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <AnimateIn>
            <span className="page-hero-tag">
              We Are Here For You
            </span>
            <h1 className="page-hero-title">
              Contact LoveLead
            </h1>
            <p className="page-hero-desc">
              Have questions about our care services, want to schedule an in-person tour, or ready to begin an admissions assessment? We look forward to speaking with you.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ===== CONTACT CHANNELS QUICK CARDS ===== */}
      <section className="section section-warm" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="contact-card-grid">
            {/* Phone */}
            <AnimateIn>
              <div className="contact-card">
                <p className="contact-card-label">Direct Office Phone</p>
                <a href="tel:+16122603900" className="contact-card-value">
                  (612) 260-3900
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('6122603900', 'phone')}
                  className="copy-pill-btn"
                  title="Copy telephone"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>{copiedItem === 'phone' ? 'Copied!' : 'Copy Number'}</span>
                </button>
              </div>
            </AnimateIn>

            {/* Fax */}
            <AnimateIn delay={0.06}>
              <div className="contact-card">
                <p className="contact-card-label">Medical Records Fax</p>
                <a href="tel:+16514019411" className="contact-card-value">
                  (651) 401-9411
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('6514019411', 'fax')}
                  className="copy-pill-btn"
                  title="Copy fax"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>{copiedItem === 'fax' ? 'Copied!' : 'Copy Fax'}</span>
                </button>
              </div>
            </AnimateIn>

            {/* Email */}
            <AnimateIn delay={0.12}>
              <div className="contact-card">
                <p className="contact-card-label">Administrative Email</p>
                <a href="mailto:info@loveleadal.com" className="contact-card-value" style={{ fontSize: '0.98rem' }}>
                  info@loveleadal.com
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('info@loveleadal.com', 'email')}
                  className="copy-pill-btn"
                  title="Copy email"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>{copiedItem === 'email' ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== FORM & SIDEBAR SECTION ===== */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            {/* Form Column */}
            <div>
              <AnimateIn>
                <span className="section-tag">Direct Inquiry</span>
                <h2 className="section-title">Send Our Care Team a Message</h2>
                <p className="section-subtitle" style={{ marginBottom: '1.75rem' }}>
                  Please fill out the details below. Our community director will review your inquiry and reach out within 24 hours.
                </p>
              </AnimateIn>

              {/* Success Notification Banner */}
              {formStatus === 'success' && (
                <div className="form-banner-success" role="alert">
                  <strong>Message Sent Successfully.</strong> Thank you for contacting LoveLead Assisted Living. Our care coordinator will reach out to you within 24 hours via your preferred contact method.
                </div>
              )}

              {/* Error Notification Banner */}
              {formStatus === 'error' && Object.keys(formErrors).length > 0 && (
                <div className="form-banner-error" role="alert">
                  <strong>Please correct the highlighted fields:</strong>
                  <ul style={{ marginTop: '0.35rem', paddingLeft: '1.25rem', listStyle: 'disc' }}>
                    {Object.values(formErrors).filter(Boolean).map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}

              <form ref={formRef} onSubmit={handleInitialSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Full Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Eleanor Vance"
                      className={`form-input ${formErrors.name ? 'form-input--error' : ''}`}
                    />
                    {formErrors.name && <span className="form-error-msg">{formErrors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email Address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@example.com"
                      className={`form-input ${formErrors.email ? 'form-input--error' : ''}`}
                    />
                    {formErrors.email && <span className="form-error-msg">{formErrors.email}</span>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">Phone Number *</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(612) 000-0000"
                      className={`form-input ${formErrors.phone ? 'form-input--error' : ''}`}
                    />
                    {formErrors.phone && <span className="form-error-msg">{formErrors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-rel" className="form-label">Relationship to Resident</label>
                    <select
                      id="contact-rel"
                      name="relationship"
                      value={formData.relationship}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Please select...</option>
                      <option value="Self">Self</option>
                      <option value="Daughter/Son">Daughter or Son</option>
                      <option value="Spouse">Spouse or Partner</option>
                      <option value="Sibling">Sibling</option>
                      <option value="Healthcare Provider">Healthcare Provider</option>
                      <option value="Friend/Guardian">Friend or Guardian</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <span className="form-label">Preferred Response Method</span>
                  <div className="form-radio-group">
                    <label className="form-radio-label">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleChange}
                        style={{ accentColor: 'var(--color-brand)' }}
                      />
                      <span>Phone Call</span>
                    </label>
                    <label className="form-radio-label">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleChange}
                        style={{ accentColor: 'var(--color-brand)' }}
                      />
                      <span>Email Message</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-msg" className="form-label">How May We Assist You? *</label>
                  <textarea
                    id="contact-msg"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your loved one's needs, ideal move-in timeline, or any specific health care questions..."
                    className={`form-textarea ${formErrors.message ? 'form-textarea--error' : ''}`}
                  />
                  {formErrors.message && <span className="form-error-msg">{formErrors.message}</span>}
                </div>

                {/* Password field with toggle for Family Portal or account inquiry */}
                <div className="form-group">
                  <label htmlFor="contact-portal-pw" className="form-label">
                    Family Portal Pin / Passcode (Optional for registered family members)
                  </label>
                  <div className="password-toggle-wrapper">
                    <input
                      id="contact-portal-pw"
                      name="portalPassword"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.portalPassword}
                      onChange={handleChange}
                      placeholder="Existing family account passcode"
                      className="form-input"
                      style={{ paddingRight: '2.5rem' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="password-toggle-btn"
                      aria-label={showPassword ? 'Hide passcode' : 'Show passcode'}
                    >
                      {showPassword ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="btn-group" style={{ marginTop: '1.5rem' }}>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn btn-primary"
                  >
                    {formStatus === 'submitting' ? 'Submitting Inquiry...' : 'Submit Care Inquiry'}
                  </button>
                  <a href="tel:+16122603900" className="btn btn-outline-dark">
                    Or Call Us Directly
                  </a>
                </div>

                <p style={{ fontSize: '0.76rem', color: 'var(--text-light)', marginTop: '1.25rem' }}>
                  Last updated: {lastUpdated} &bull; Privacy protected under HIPAA guidelines.
                </p>
              </form>
            </div>

            {/* Sidebar Column */}
            <div>
              <AnimateIn direction="right">
                <div className="card card--surface" style={{ marginBottom: '1.5rem' }}>
                  <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-headings)' }}>
                    Visiting &amp; Facility Hours
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
                      <span>Monday - Friday</span>
                      <strong style={{ color: 'var(--text-headings)' }}>9:00 AM - 7:00 PM</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
                      <span>Saturday</span>
                      <strong style={{ color: 'var(--text-headings)' }}>10:00 AM - 5:00 PM</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
                      <span>Sunday</span>
                      <strong style={{ color: 'var(--text-headings)' }}>12:00 PM - 4:00 PM</strong>
                    </div>
                  </div>
                  <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: 'var(--color-brand-wash)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-brand-pale)' }}>
                    <p style={{ fontSize: '0.82rem', color: 'var(--color-brand-deep)', fontWeight: '600' }}>
                      24/7 Care &amp; Support is active for all residents every single hour.
                    </p>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn direction="right" delay={0.1}>
                <div className="card" style={{ backgroundColor: 'var(--color-brand)', color: '#ffffff', marginBottom: '1.5rem' }}>
                  <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '0.6rem', color: '#ffffff' }}>
                    Quick Redirects
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1rem' }}>
                    Discover all aspects of our Cottage Grove residential community:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link
                      to="/services"
                      style={{
                        padding: '0.65rem 0.85rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        borderRadius: 'var(--radius-xs)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span>Explore 7 Care Services</span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      to="/benefits"
                      style={{
                        padding: '0.65rem 0.85rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        borderRadius: 'var(--radius-xs)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span>View Resident Life &amp; Benefits</span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      to="/why-choose-us"
                      style={{
                        padding: '0.65rem 0.85rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        borderRadius: 'var(--radius-xs)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span>Why Choose LoveLead</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn direction="right" delay={0.18}>
                <div className="card card--surface">
                  <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-headings)' }}>
                    Community Location
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    LoveLead Assisted Living Program<br />
                    Cottage Grove, Minnesota<br />
                    Serving Washington County and Twin Cities East Metro.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PREVIEW YOUR VISIT FACILITY SHOWCASE ===== */}
      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            label="Facility Preview"
            title="Preview What You'll Experience on Your Tour"
            subtitle="Walk through our real residential home. See the sunlit spaces, clean suites, and peaceful grounds firsthand."
          />

          <div className="facility-showcase-grid" style={{ marginTop: '2.5rem' }}>
            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img src="/photos/lovelead_frontyard.jpeg" alt="Front Arrival & Driveway" loading="lazy" />
                <span className="facility-card-tag">Arrival</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Easy Arrival &amp; Parking</h3>
                <p className="facility-card-desc">Private dedicated driveway parking in a safe, quiet residential cul-de-sac in Cottage Grove.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img src="/photos/lovelead_living_area.jpeg" alt="Main Living Room" loading="lazy" />
                <span className="facility-card-tag">Reception</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Warm Personal Greeting</h3>
                <p className="facility-card-desc">Sit down with our care coordinators in our sunny living lounge to discuss your family&apos;s goals.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img src="/photos/lovelead_bedroom.jpeg" alt="Private Bedroom Suite" loading="lazy" />
                <span className="facility-card-tag">Suites</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Suite Tour &amp; Layout Options</h3>
                <p className="facility-card-desc">Tour available private bedrooms and inspect accessible features and personal closet amenities.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img src="/photos/lovelead_backyard.jpeg" alt="Fenced Backyard Grounds" loading="lazy" />
                <span className="facility-card-tag">Grounds</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Lush Fenced Grounds</h3>
                <p className="facility-card-desc">Stroll through our tree-lined yard, view our back deck, and see our outdoor leisure areas.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/gallery" className="btn btn-primary">
              View All 15 Facility Photos
            </Link>
          </div>
        </div>
      </section>

      {/* ===== EXPANDABLE FAQ ACCORDION SECTION ===== */}
      <section className="section section-warm">
        <div className="container-narrow">
          <SectionHeader
            label="Common Inquiries"
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about life, care standards, and admissions at LoveLead."
          />

          <div className="accordion-wrapper" role="region" aria-label="Frequently Asked Questions">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <AnimateIn key={idx} delay={idx * 0.04}>
                  <div className="accordion-item">
                    <button
                      type="button"
                      className="accordion-trigger"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <svg
                        className="accordion-icon"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div className={`accordion-panel ${isOpen ? 'accordion-panel--open' : ''}`}>
                      <div className="accordion-inner">
                        <div className="accordion-body">
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Have another question not answered above?
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <a href="tel:+16122603900" className="btn btn-primary btn-sm">
                Call (612) 260-3900
              </a>
              <a href="mailto:info@loveleadal.com" className="btn btn-outline-dark btn-sm">
                Email Our Director
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      <ConfirmModal
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleConfirmedSubmit}
        title="Confirm Care Inquiry Submission"
        message={`You are submitting an inquiry to LoveLead Assisted Living for ${formData.name}. Our staff will follow up via ${formData.preferredContact === 'phone' ? 'phone' : 'email'} within 24 hours.`}
        confirmLabel="Confirm &amp; Send"
        cancelLabel="Review Information"
      />
    </main>
  );
}
