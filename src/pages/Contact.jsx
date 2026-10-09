import { useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import AnimateIn from '../components/AnimateIn';
import SectionHeader from '../components/SectionHeader';
import ConfirmModal from '../components/ConfirmModal';
import SEO from '../components/SEO';
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
  });

  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [submittedData, setSubmittedData] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
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

  const handleConfirmedSubmit = async () => {
    setFormStatus('submitting');

    const utmData = getStoredUTMParams();
    const refId = 'LL-' + Math.floor(100000 + Math.random() * 900000);
    const submissionTime = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'America/Chicago',
    }) + ' (Central Time)';

    const structuredMessage = `
=====================================================
  LOVELEAD ASSISTED LIVING — CARE INTAKE DOSSIER
=====================================================
[REFERENCE ID]       #${refId}
[SUBMISSION TIME]    ${submissionTime}
[ASSIGNED DIRECTOR]  nnadesh@loveleadal.com

FAMILY / PROSPECTIVE RESIDENT DETAILS:
- Full Name:         ${formData.name}
- Email Address:     ${formData.email}
- Phone Number:      ${formData.phone}
- Relationship:      ${formData.relationship || 'Prospective Resident / Family'}
- Preferred Contact: ${formData.preferredContact === 'phone' ? 'Phone Call' : 'Email Follow-up'}

CARE NEEDS & INQUIRY MESSAGE:
"${formData.message}"

FACILITY LOCATION & CONTACT:
- Community:         LoveLead Assisted Living
- Address:           7935 83rd St S, Cottage Grove, MN 55016
- Phone:             (612) 260-3900
- Website:           https://loveleadal.com
=====================================================
    `.trim();

    const payload = {
      access_key: 'ebb62219-2611-4cf5-af71-84f895929b3d',
      subject: `[NEW INQUIRY #${refId}] ${formData.name} - LoveLead Assisted Living`,
      from_name: 'LoveLead Care Portal',
      replyto: formData.email,
      botcheck: '',

      // Clean structured fields for Web3Forms email notification (zero emojis)
      'Inquiry Reference': `#${refId}`,
      'Applicant / Family Name': formData.name,
      'Email Address': formData.email,
      'Phone Number': formData.phone,
      'Relationship to Resident': formData.relationship || 'Not specified',
      'Preferred Contact Method': formData.preferredContact === 'phone' ? 'Phone Call' : 'Email Follow-up',
      'Assigned Coordinator': 'nnadesh@loveleadal.com',
      'Facility Address': '7935 83rd St S, Cottage Grove, MN 55016',
      'Submission Timestamp': submissionTime,

      // Structured dossier message
      message: structuredMessage,
      ...utmData,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setSubmittedData({
          refId,
          timestamp: submissionTime,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          relationship: formData.relationship || 'Prospective Resident / Family',
          preferredContact: formData.preferredContact,
          message: formData.message,
        });
        setFormStatus('success');
        setShowConfirm(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          relationship: '',
          message: '',
          preferredContact: 'phone',
        });
      } else {
        setShowConfirm(false);
        setFormStatus('error');
        setFormErrors({ submit: data.message || 'There was an issue sending your message. Please call us directly at (612) 260-3900.' });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setShowConfirm(false);
      setFormStatus('error');
      setFormErrors({ submit: 'Network connection issue. Please check your internet connection or call us at (612) 260-3900.' });
    }
  };

  const handleResetForm = () => {
    setFormStatus('idle');
    setSubmittedData(null);
    setFormErrors({});
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

const CONTACT_SCHEMA = {
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
          name: 'Contact & Admissions',
          item: 'https://www.loveleadal.com/contact',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_DATA.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ],
};

  return (
    <main id="main-content" className="contact-page">
      <SEO
        title="Contact Us & Schedule a Tour"
        description="Schedule an in-person tour of LoveLead Assisted Living in Cottage Grove, MN. Contact our admissions team at (612) 260-3900 or submit an online care inquiry."
        keywords="contact assisted living Cottage Grove, schedule tour senior living Minnesota, elder care phone Cottage Grove MN, admissions assisted living Twin Cities"
        path="/contact"
        schema={CONTACT_SCHEMA}
      />
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <img
          src="/photos/lovelead_frontyard2.jpeg"
          alt="Front entrance and walkway of LoveLead Assisted Living home in Cottage Grove, MN - Schedule a Tour"
          className="page-hero-bg-img"
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
                <div className="contact-card-icon-badge" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
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
                <div className="contact-card-icon-badge" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                </div>
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
                <div className="contact-card-icon-badge" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
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
      <section className="section section-cream contact-form-section">
        <div className="container">
          <div className="contact-main-layout">
            {/* Form Column */}
            <div className="contact-form-column">
              <AnimateIn>
                <span className="section-tag">Direct Inquiry</span>
                <h2 className="section-title">Send Our Care Team a Message</h2>
                <p className="section-subtitle" style={{ marginBottom: '1.75rem' }}>
                  Please fill out the details below. Our community director will review your inquiry and reach out within 24 hours.
                </p>
              </AnimateIn>

              {/* Error Notification Banner */}
              {formStatus === 'error' && (
                <div className="form-banner-error" role="alert">
                  <strong>Please note:</strong>
                  {formErrors.submit ? (
                    <p style={{ marginTop: '0.35rem' }}>{formErrors.submit}</p>
                  ) : (
                    <ul style={{ marginTop: '0.35rem', paddingLeft: '1.25rem', listStyle: 'disc' }}>
                      {Object.values(formErrors).filter(Boolean).map((err, i) => (
                        <li key={i}>{err}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* SUCCESS STATE: Submission Starter Card */}
              {formStatus === 'success' && submittedData ? (
                <AnimateIn>
                  <div className="submission-starter-card">
                    {/* Top Decorative Gradient Line */}
                    <div className="modal-accent-bar" aria-hidden="true" />

                    <div className="submission-starter-hero">
                      <div className="submission-starter-badge-pill">
                        <svg className="starter-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Care Inquiry Delivered Securely</span>
                      </div>
                      <h3 className="submission-starter-title">
                        Thank You, {submittedData.name.split(' ')[0]}!
                      </h3>
                      <p className="submission-starter-subtitle">
                        Your inquiry has been received by LoveLead Assisted Living. Our community director (<strong>nnadesh@loveleadal.com</strong>) has been notified and will reach out to you within 24 hours via {submittedData.preferredContact === 'phone' ? 'phone' : 'email'}.
                      </p>
                    </div>

                    {/* Submission Dossier Ticket */}
                    <div className="submission-dossier-box">
                      <div className="submission-dossier-header">
                        <div>
                          <span className="dossier-tag">INTAKE DOSSIER</span>
                          <span className="dossier-id">Ref #{submittedData.refId}</span>
                        </div>
                        <span className="dossier-timestamp">{submittedData.timestamp}</span>
                      </div>

                      <div className="submission-dossier-grid">
                        <div className="dossier-item">
                          <span className="dossier-label">Contact Person</span>
                          <strong className="dossier-value">{submittedData.name}</strong>
                        </div>
                        <div className="dossier-item">
                          <span className="dossier-label">Phone &amp; Email</span>
                          <strong className="dossier-value">{submittedData.phone} &bull; {submittedData.email}</strong>
                        </div>
                        <div className="dossier-item">
                          <span className="dossier-label">Relationship to Resident</span>
                          <strong className="dossier-value">{submittedData.relationship}</strong>
                        </div>
                        <div className="dossier-item">
                          <span className="dossier-label">Preferred Response</span>
                          <strong className="dossier-value" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--google-medium-blue, #4285F4)' }}>
                            {submittedData.preferredContact === 'phone' ? (
                              <>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>Direct Phone Call</span>
                              </>
                            ) : (
                              <>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <rect width="20" height="16" x="2" y="4" rx="2" />
                                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                <span>Email Follow-up</span>
                              </>
                            )}
                          </strong>
                        </div>
                      </div>

                      {submittedData.message && (
                        <div className="dossier-message-box">
                          <span className="dossier-label">Your Inquiry Notes:</span>
                          <p className="dossier-message-text">"{submittedData.message}"</p>
                        </div>
                      )}
                    </div>

                    {/* Starter Next Steps Cards (SVG Icons Only) */}
                    <div className="submission-next-steps">
                      <h4 className="next-steps-title">Recommended Next Steps While You Wait:</h4>
                      <div className="next-steps-grid">
                        <a href="tel:+16122603900" className="next-step-card">
                          <div className="next-step-icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                          </div>
                          <div className="next-step-content">
                            <h5>Speak With Us Right Now</h5>
                            <p>For urgent placement questions or immediate tour booking, call <strong>(612) 260-3900</strong>.</p>
                          </div>
                        </a>

                        <Link to="/gallery" className="next-step-card">
                          <div className="next-step-icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                              <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                          </div>
                          <div className="next-step-content">
                            <h5>Explore Cottage Grove Home</h5>
                            <p>Browse resident suites, spacious kitchen, cozy living room, and peaceful patio.</p>
                          </div>
                        </Link>

                        <Link to="/why-choose-us" className="next-step-card">
                          <div className="next-step-icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                              <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                              <path d="m9 14 2 2 4-4" />
                            </svg>
                          </div>
                          <div className="next-step-content">
                            <h5>Review Our 1:3 Care Model</h5>
                            <p>See why families choose LoveLead for compassionate, personalized assisted living.</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="submission-starter-actions">
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="btn btn-outline-dark btn-sm"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                          <path d="M3 3v5h5" />
                        </svg>
                        <span>Submit Another Inquiry</span>
                      </button>
                    </div>
                  </div>
                </AnimateIn>
              ) : (
                <form ref={formRef} onSubmit={handleInitialSubmit} noValidate>
                  <div className="contact-form-row">
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

                  <div className="contact-form-row">
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

                  <div className="btn-group contact-form-actions" style={{ marginTop: '1.5rem' }}>
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
              )}
            </div>

            {/* Sidebar Column */}
            <div className="contact-sidebar-column">
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
                <img
                  src="/photos/lovelead_frontyard.jpeg"
                  alt="Dedicated private driveway and easy arrival parking at LoveLead Assisted Living in Cottage Grove, MN"
                  loading="lazy"
                />
                <span className="facility-card-tag">Arrival</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Easy Arrival &amp; Parking</h3>
                <p className="facility-card-desc">Private dedicated driveway parking in a safe, quiet residential cul-de-sac in Cottage Grove.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img
                  src="/photos/lovelead_living_area.jpeg"
                  alt="Warm, sunlit reception living lounge for tour greetings and care consultations at LoveLead"
                  loading="lazy"
                />
                <span className="facility-card-tag">Reception</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Warm Personal Greeting</h3>
                <p className="facility-card-desc">Sit down with our care coordinators in our sunny living lounge to discuss your family&apos;s goals.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img
                  src="/photos/lovelead_bedroom.jpeg"
                  alt="Private resident bedroom suite walkthrough showing spacious layout and accessibility features at LoveLead"
                  loading="lazy"
                />
                <span className="facility-card-tag">Suites</span>
              </div>
              <div className="facility-card-body">
                <h3 className="facility-card-title">Suite Tour &amp; Layout Options</h3>
                <p className="facility-card-desc">Tour available private bedrooms and inspect accessible features and personal closet amenities.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card-img-wrap">
                <img
                  src="/photos/lovelead_backyard.jpeg"
                  alt="Tranquil fenced backyard grounds and outdoor deck tour at LoveLead Assisted Living in Cottage Grove"
                  loading="lazy"
                />
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
            <div className="btn-group contact-faq-actions" style={{ justifyContent: 'center' }}>
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

      {/* Confirmation Modal (Striking Blue Theme) */}
      <ConfirmModal
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleConfirmedSubmit}
        title="Review & Confirm Care Inquiry"
        message="Please verify your details below. When confirmed, your message will be dispatched directly to LoveLead administration."
        confirmLabel="Confirm &amp; Send Inquiry"
        cancelLabel="Review &amp; Edit"
        summary={formData}
        isSubmitting={formStatus === 'submitting'}
      />
    </main>
  );
}
