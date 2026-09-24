import { Link } from 'react-router-dom';
import AnimateIn from '../components/AnimateIn';

export default function Terms() {
  const lastUpdated = 'September 24, 2026';

  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container page-hero-content">
          <AnimateIn>
            <span className="page-hero-tag">
              Legal &amp; Compliance
            </span>
            <h1 className="page-hero-title">
              Terms &amp; Conditions
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
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing and utilizing the LoveLead Assisted Living website, you acknowledge having read and understood these Terms and Conditions and agree to be bound by them. If you do not agree to these terms, please refrain from using our online services.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                  2. Nature of Website Content
                </h2>
                <p>
                  The informational content provided on this website describes the Assisted Living Program and support services offered at LoveLead in Cottage Grove, Minnesota. This content is provided for informational and educational orientation only and does not constitute formal medical or clinical advice. Formal care assessments are conducted directly by qualified medical professionals.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                  3. Intellectual Property Rights
                </h2>
                <p>
                  All textual content, branding marks, logos, icons, layout designs, and graphics featured on this website are the proprietary property of LoveLead Assisted Living and are safeguarded by state and federal copyright laws.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                  4. Limitation of Liability
                </h2>
                <p>
                  LoveLead Assisted Living strives to maintain accurate and up-to-date information across all pages. However, we assume no liability for unintended technical inaccuracies, temporary interruptions in site availability, or external third-party links.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                  5. Governing Law
                </h2>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Minnesota.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                  6. Inquiries Regarding Terms
                </h2>
                <p>
                  If you have any questions concerning our Terms and Conditions, please contact:
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
