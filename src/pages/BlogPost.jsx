import { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import AnimateIn from '../components/AnimateIn';
import { getBlogPostBySlug, getRelatedPosts, getAllBlogPosts } from '../data/blogData';

function formatDate(isoString) {
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return isoString;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const [copiedLink, setCopiedLink] = useState(false);

  const post = useMemo(() => getBlogPostBySlug(slug), [slug]);
  const relatedPosts = useMemo(() => getRelatedPosts(slug, 3), [slug]);
  const allPosts = useMemo(() => getAllBlogPosts(), []);

  // Determine previous and next articles
  const { prevPost, nextPost } = useMemo(() => {
    if (!post) return { prevPost: null, nextPost: null };
    const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
    return {
      prevPost: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
      nextPost: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
    };
  }, [post, allPosts]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2200);
      });
    }
  };

  // Structured Schema.org data for BlogPosting & BreadcrumbList
  const schemaData = {
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
            name: 'Care Blog',
            item: 'https://www.loveleadal.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://www.loveleadal.com/blog/${post.slug}`,
          },
        ],
      },
      {
        '@type': 'BlogPosting',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.loveleadal.com/blog/${post.slug}`,
        },
        headline: post.title,
        description: post.excerpt,
        image: `https://www.loveleadal.com${post.image}`,
        datePublished: post.publishedAt,
        dateModified: post.modifiedAt || post.publishedAt,
        author: {
          '@type': 'Organization',
          name: post.author.name,
          url: 'https://www.loveleadal.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'LoveLead AL LLC',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.loveleadal.com/logo.png',
          },
        },
        keywords: post.tags.join(', '),
        articleSection: post.category,
      },
    ],
  };

  // Append FAQPage schema if post includes structured FAQs
  const faqSection = post.contentSections?.find((sec) => sec.faqs && sec.faqs.length > 0);
  if (faqSection) {
    schemaData['@graph'].push({
      '@type': 'FAQPage',
      mainEntity: faqSection.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer.join(' '),
        },
      })),
    });
  }

  return (
    <main id="main-content" className="blog-post-page">
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        path={`/blog/${post.slug}`}
        image={`https://www.loveleadal.com${post.image}`}
        schema={schemaData}
      />

      {/* ===== ARTICLE HEADER / BREADCRUMBS ===== */}
      <article className="blog-post-article">
        <header className="blog-post-hero-header">
          <div className="container-text">
            {/* Top Navigation Row: Back Button & Breadcrumbs */}
            <div className="blog-post-top-nav">
              <Link to="/blog" className="blog-back-btn" aria-label="Back to Blog">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>Back to Blog</span>
              </Link>

              {/* Breadcrumb Navigation */}
              <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
                <ol className="blog-breadcrumbs-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li aria-hidden="true">&rsaquo;</li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li aria-hidden="true">&rsaquo;</li>
                  <li aria-current="page" className="blog-breadcrumb-active">
                    {post.category}
                  </li>
                </ol>
              </nav>
            </div>

            <span className="blog-post-category-tag">
              {post.category}
            </span>

            <h1 className="blog-post-h1">
              {post.title}
            </h1>

            {/* Author & Meta Row */}
            <div className="blog-post-meta-bar">
              <div className="blog-post-author-box">
                <div className="blog-author-avatar-badge" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <strong className="blog-post-author-name">{post.author.name}</strong>
                  <span className="blog-post-author-role">{post.author.role}</span>
                </div>
              </div>

              <div className="blog-post-time-meta">
                <div className="blog-post-meta-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                </div>

                <span className="blog-meta-dot" aria-hidden="true">&bull;</span>

                <div className="blog-post-meta-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ===== FEATURED IMAGE FIGURE ===== */}
        <div className="container-text">
          <figure className="blog-post-figure">
            <img
              src={post.image}
              alt={post.imageAlt}
              loading="lazy"
              className="blog-post-hero-image"
            />
            <figcaption className="blog-post-figcaption">
              {post.imageAlt}
            </figcaption>
          </figure>
        </div>

        {/* ===== POST BODY CONTENT ===== */}
        <div className="container-text blog-post-body-container">
          {/* Article Opening / Introduction */}
          {post.introParagraphs && post.introParagraphs.length > 0 && (
            <div className="blog-intro-section">
              {post.introParagraphs.map((para, pIdx) => (
                <p key={pIdx} className={pIdx === 0 ? 'blog-intro-lead' : 'blog-intro-paragraph'}>
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* Key Takeaways Card */}
          {post.takeaways && post.takeaways.length > 0 && (
            <aside className="blog-takeaways-box" aria-label="Key article takeaways">
              <div className="blog-takeaways-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2v20" />
                  <path d="m17 5-5-3-5 3" />
                  <path d="m17 19-5 3-5-3" />
                  <path d="M2 12h20" />
                </svg>
                <h3>Key Article Takeaways</h3>
              </div>
              <ul className="blog-takeaways-list">
                {post.takeaways.map((item, idx) => (
                  <li key={idx}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* Structured Content Sections */}
          <div className="blog-content-prose">
            {post.contentSections.map((sec, idx) => (
              <section key={idx} className="blog-content-section">
                <h2>{sec.heading}</h2>

                {sec.subheading && (
                  <h3 className="blog-section-subheading">
                    {sec.subheading}
                  </h3>
                )}

                {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {sec.bulletList && sec.bulletList.length > 0 && (
                  <ul className="blog-content-list">
                    {sec.bulletList.map((item, bIdx) => (
                      <li key={bIdx}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* Comparison Table */}
                {sec.table && (
                  <div className="blog-table-wrapper">
                    <table className="blog-comparison-table">
                      <thead>
                        <tr>
                          {sec.table.headers.map((h, hIdx) => (
                            <th key={hIdx}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Subsections (H3 elements) */}
                {sec.subsections && sec.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="blog-subsection">
                    <h3>{sub.heading}</h3>

                    {sub.paragraphs && sub.paragraphs.map((sp, spIdx) => (
                      <p key={spIdx}>{sp}</p>
                    ))}

                    {sub.bulletList && sub.bulletList.length > 0 && (
                      <ul className="blog-content-list">
                        {sub.bulletList.map((sb, sbIdx) => (
                          <li key={sbIdx}>{sb}</li>
                        ))}
                      </ul>
                    )}

                    {sub.postParagraphs && sub.postParagraphs.map((spp, sppIdx) => (
                      <p key={sppIdx}>{spp}</p>
                    ))}
                  </div>
                ))}

                {sec.postParagraphs && sec.postParagraphs.map((p, ppIdx) => (
                  <p key={ppIdx}>{p}</p>
                ))}

                {/* Frequently Asked Questions */}
                {sec.faqs && (
                  <div className="blog-faqs-container">
                    {sec.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="blog-faq-card card card--surface">
                        <h3 className="blog-faq-question">{faq.question}</h3>
                        <div className="blog-faq-answer">
                          {faq.answer.map((ans, aIdx) => (
                            <p key={aIdx}>{ans}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Direct Facility Contact Information Card */}
                {sec.contactBlock && (
                  <div className="blog-facility-contact-card card card--surface">
                    <h3 className="blog-facility-name">{sec.contactBlock.name}</h3>
                    <p className="blog-facility-address">{sec.contactBlock.address}</p>
                    <p className="blog-facility-phone">
                      <strong>Phone: </strong>
                      <a href={`tel:${sec.contactBlock.phone.replace(/[^0-9+]/g, '')}`}>
                        {sec.contactBlock.phone}
                      </a>
                    </p>
                    <p className="blog-facility-website">
                      <strong>Website: </strong>
                      <a href={`https://${sec.contactBlock.website.replace(/^https?:\/\//, '')}`} target="_blank" rel="noopener noreferrer">
                        {sec.contactBlock.website}
                      </a>
                    </p>
                    {sec.contactBlock.cta && (
                      <div className="blog-facility-cta-strip">
                        <p className="blog-facility-cta-text">
                          <strong>{sec.contactBlock.cta}</strong>
                        </p>
                        <div style={{ marginTop: '0.85rem' }}>
                          <Link to="/contact" className="btn btn-primary btn-sm">
                            Contact LoveLead Admissions &rarr;
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* In-Article Community Consultation Card */}
          <div className="blog-inline-cta-card card">
            <div className="blog-inline-cta-content">
              <span className="section-tag" style={{ margin: 0 }}>Community Placement</span>
              <h3>Looking for Trusted Assisted Living in Cottage Grove?</h3>
              <p>
                We provide round-the-clock 24/7 care, a 1:3 staff ratio, fresh home-cooked meals, and clean suites in a peaceful residential neighborhood.
              </p>
              <div className="btn-group" style={{ marginTop: '1rem' }}>
                <Link to="/contact" className="btn btn-primary btn-sm">
                  Schedule an In-Person Tour
                </Link>
                <a href="tel:+16122603900" className="btn btn-outline-dark btn-sm">
                  Call (612) 260-3900
                </a>
              </div>
            </div>
          </div>

          {/* Tags & Share Row */}
          <div className="blog-post-tags-row">
            <div className="blog-tags-list">
              <span className="blog-tags-label">Tags:</span>
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag-pill">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="blog-share-actions">
              <button
                type="button"
                onClick={handleCopyLink}
                className="blog-share-btn"
                title="Copy article link"
                aria-label="Copy article link to clipboard"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>{copiedLink ? 'Link Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Author Bio Card */}
          <footer className="blog-author-bio-card card card--surface">
            <div className="blog-author-bio-avatar" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="blog-author-bio-text">
              <span className="blog-author-bio-tag">About the Author</span>
              <h4>{post.author.name}</h4>
              <p>
                The nursing, clinical, and administrative leadership team at LoveLead AL LLC dedicated to resident-centered care, dignity, independence, and heartfelt hospitality in Cottage Grove, Minnesota.
              </p>
            </div>
          </footer>

          {/* Previous & Next Post Links */}
          <nav className="blog-prev-next-nav" aria-label="Previous and next articles">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="blog-nav-card blog-nav-card--prev">
                <span className="blog-nav-arrow">&larr; Previous Guide</span>
                <strong className="blog-nav-title">{prevPost.title}</strong>
              </Link>
            ) : (
              <div className="blog-nav-placeholder" />
            )}

            {nextPost && (
              <Link to={`/blog/${nextPost.slug}`} className="blog-nav-card blog-nav-card--next">
                <span className="blog-nav-arrow">Next Guide &rarr;</span>
                <strong className="blog-nav-title">{nextPost.title}</strong>
              </Link>
            )}
          </nav>
        </div>
      </article>

      {/* ===== RELATED POSTS SECTION ===== */}
      {relatedPosts.length > 0 && (
        <section className="section section-cream blog-related-section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-tag">Continue Reading</span>
              <h2 className="section-title">Related Care Articles &amp; Resources</h2>
            </div>

            <div className="blog-posts-grid">
              {relatedPosts.map((rPost, idx) => (
                <AnimateIn key={rPost.slug} delay={idx * 0.08}>
                  <article className="card card-hover blog-card">
                    <div className="blog-card-media">
                      <Link to={`/blog/${rPost.slug}`} tabIndex="-1" aria-hidden="true">
                        <img
                          src={rPost.image}
                          alt={rPost.imageAlt}
                          loading="lazy"
                          className="blog-card-img"
                        />
                      </Link>
                      <span className="blog-card-category-badge">
                        {rPost.category}
                      </span>
                    </div>

                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <time dateTime={rPost.publishedAt}>
                          {formatDate(rPost.publishedAt)}
                        </time>
                        <span className="blog-meta-dot">&bull;</span>
                        <span>{rPost.readTime}</span>
                      </div>

                      <h3 className="blog-card-title">
                        <Link to={`/blog/${rPost.slug}`}>
                          {rPost.title}
                        </Link>
                      </h3>

                      <p className="blog-card-excerpt">
                        {rPost.excerpt}
                      </p>

                      <footer className="blog-card-footer">
                        <span className="blog-author-compact-name">
                          {rPost.author.name}
                        </span>
                        <Link
                          to={`/blog/${rPost.slug}`}
                          className="blog-read-more-link"
                          aria-label={`Read full article: ${rPost.title}`}
                        >
                          <span>Read Article</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </footer>
                    </div>
                  </article>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== BOTTOM CTA STRIP ===== */}
      <section className="section section-warm" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <AnimateIn>
            <span className="section-tag section-tag--warm">Experience LoveLead</span>
            <h2 className="section-title">Visit Our Cottage Grove Residential Community</h2>
            <p className="section-subtitle" style={{ maxWidth: '650px', margin: '0 auto 1.85rem auto' }}>
              We invite your family to walk through our sunlit suites, meet our caregivers, and see why our 1:3 care model offers genuine peace of mind.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Visit
              </Link>
              <a href="tel:+16122603900" className="btn btn-outline-dark btn-lg">
                Call (612) 260-3900
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}

