import { Link } from 'react-router-dom';
import AnimateIn from '../components/AnimateIn';
import SEO from '../components/SEO';

const PRIVACY_BREADCRUMB_SCHEMA = {
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
      name: 'Privacy Policy',
      item: 'https://www.loveleadal.com/privacy-policy',
    },
  ],
};

export default function PrivacyPolicy() {
  const lastUpdated = 'September 24, 2026';

  return (
    <main id="main-content">
      <SEO
        title="Privacy Policy"
        description="Review LoveLead Assisted Living's privacy policy and HIPAA-aligned commitment to protecting resident and family inquiries."
        path="/privacy-policy"
        schema={PRIVACY_BREADCRUMB_SCHEMA}
      />
      <section className="page-hero">
        <div className="container page-hero-content">
          <AnimateIn>
            <span className="page-hero-tag">
              Legal &amp; Compliance
            </span>
            <h1 className="page-hero-title">
              Privacy Policy
            </h1>
            <p className="page-hero-desc" style={{ marginBottom: 0 }}>
              Last updated: {lastUpdated}
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container-text">
          <AnimateIn>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                  1. Information We Collect
                </h2>
                <p>
                  LoveLead Assisted Living ("LoveLead," "we," "our," or "us") values your privacy. We collect personal information that you voluntarily provide when you submit inquiries, schedule home walkthroughs, or request care assessments through our website. This includes your name, email address, telephone number, relationship to the prospective resident, and details regarding specific care requirements.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                  2. Purpose &amp; Use of Information
                </h2>
                <p>
                  Information gathered is used exclusively to evaluate care suitability, coordinate tours, respond to family inquiries, provide care planning guidance, and enhance our services. LoveLead strictly adheres to HIPAA privacy regulations and never sells, rents, or distributes your personal details to third-party commercial vendors.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                  3. Cookies and Analytics
                </h2>
                <p>
                  We utilize standard session cookies to ensure accessible navigation, remember user preferences, and securely evaluate website performance. You can adjust your cookie settings at any time using our cookie consent controls. UTM marketing parameters may be collected anonymously to measure the reach of community outreach campaigns.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                  4. Security Safeguards
                </h2>
                <p>
                  We deploy administrative, physical, and technical safeguards designed to protect personal and health-related inquiries against unauthorized access, exposure, or alteration.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                  5. Contacting Our Privacy Officer
                </h2>
                <p>
                  If you have questions regarding this Privacy Policy or wish to review information previously submitted, please contact us at:
                </p>
                <div style={{ marginTop: '0.75rem', padding: '1rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                  <p style={{ fontWeight: '600', color: 'var(--text-main)' }}>LoveLead Assisted Living</p>
                  <p>Cottage Grove, Minnesota</p>
                  <p>Direct Phone: (612) 260-3900</p>
                  <p>Email: info@loveleadal.com</p>
                </div>
              </div>
            </div>

            <div className="btn-group" style={{ marginTop: '3rem' }}>
              <Link to="/" className="btn btn-primary btn-sm">
                Back to Home
              </Link>
              <Link to="/contact" className="btn btn-outline-dark btn-sm">
                Contact Care Office
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
