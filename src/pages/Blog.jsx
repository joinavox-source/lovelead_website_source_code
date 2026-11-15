import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AnimateIn from '../components/AnimateIn';
import {
  getAllBlogPosts,
  getLatestBlogPosts,
  getPopularBlogPosts,
} from '../data/blogData';

const BLOG_SCHEMA = {
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
          name: 'Care Blog & Resources',
          item: 'https://www.loveleadal.com/blog',
        },
      ],
    },
    {
      '@type': 'Blog',
      name: 'LoveLead Senior Living & Elder Care Blog',
      description:
        'Professional insights, clinical guidance, and family advice on assisted living, caregiver support, memory care, and senior wellness in Cottage Grove, MN.',
      url: 'https://www.loveleadal.com/blog',
      publisher: {
        '@type': 'Organization',
        name: 'LoveLead AL LLC',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.loveleadal.com/logo.png',
        },
      },
    },
  ],
};

function formatDate(isoString) {
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return isoString;
  }
}

export default function Blog() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'latest' | 'popular'
  const [searchQuery, setSearchQuery] = useState('');

  const allPosts = useMemo(() => getAllBlogPosts(), []);
  const latestPosts = useMemo(() => getLatestBlogPosts(), []);
  const popularPosts = useMemo(() => getPopularBlogPosts(), []);

  // Filtered posts when searching
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return allPosts;
    const q = searchQuery.toLowerCase().trim();
    return allPosts.filter((post) => {
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [allPosts, searchQuery]);

  const isSearching = searchQuery.trim() !== '';

  return (
    <main id="main-content" className="blog-page">
      <SEO
        title="Senior Care Insights & Resources Blog"
        description="Explore expert guidance on assisted living, caregiver support, senior nutrition, and memory care from the care team at LoveLead AL LLC in Cottage Grove, MN."
        keywords="assisted living blog Cottage Grove, senior care articles Minnesota, elder care advice Twin Cities, memory care tips, caregiver guide MN, LoveLead AL blog"
        path="/blog"
        schema={BLOG_SCHEMA}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="page-hero">
        <img
          src="/photos/lovelead_living_area.jpeg"
          alt="Warm, sunlit communal living lounge at LoveLead Assisted Living in Cottage Grove, Minnesota - Senior Care Blog"
          className="page-hero-bg-img"
        />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <AnimateIn>
            <span className="page-hero-tag">Care Insights &amp; Resources</span>
            <h1 className="page-hero-title">LoveLead Care Blog</h1>
            <p className="page-hero-desc">
              Thoughtful guidance, family resources, and clinical perspectives on assisted living, resident wellness, and dignified senior care in Minnesota.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ===== NAVIGATION & SEARCH BAR ===== */}
      <section className="section section-cream blog-listing-section">
        <div className="container">
          <div className="blog-controls-wrapper">
            {/* View Switcher Pills */}
            <nav className="blog-category-nav" aria-label="Browse blog sections">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('all');
                  setSearchQuery('');
                }}
                className={`blog-category-pill ${
                  activeTab === 'all' && !isSearching ? 'blog-category-pill--active' : ''
                }`}
              >
                <span>All Articles</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('latest');
                  setSearchQuery('');
                }}
                className={`blog-category-pill ${
                  activeTab === 'latest' && !isSearching ? 'blog-category-pill--active' : ''
                }`}
              >
                <span>Latest Blogs</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('popular');
                  setSearchQuery('');
                }}
                className={`blog-category-pill ${
                  activeTab === 'popular' && !isSearching ? 'blog-category-pill--active' : ''
                }`}
              >
                <span>Most Popular Blogs</span>
              </button>
            </nav>

            {/* Keyword Search Input */}
            <div className="blog-search-box">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by keyword or topic..."
                aria-label="Search blog posts by keyword"
                className="blog-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="blog-search-clear"
                  aria-label="Clear search query"
                >
                  &times;
                </button>
              )}
            </div>
          </div>

          {/* ===== SEARCH RESULTS VIEW ===== */}
          {isSearching ? (
            <div className="blog-search-results-container">
              <div className="blog-filter-status">
                <p>
                  Showing <strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'article' : 'articles'} matching &ldquo;{searchQuery}&rdquo;
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="blog-reset-filter-btn"
                >
                  Clear Search
                </button>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="blog-posts-grid">
                  {filteredPosts.map((post, idx) => (
                    <AnimateIn key={post.slug} delay={idx * 0.05}>
                      <article className="card card-hover blog-card">
                        <div className="blog-card-media">
                          <Link to={`/blog/${post.slug}`} tabIndex="-1" aria-hidden="true">
                            <img
                              src={post.image}
                              alt={post.imageAlt}
                              loading="lazy"
                              className="blog-card-img"
                            />
                          </Link>
                          <span className="blog-card-category-badge">
                            {post.category}
                          </span>
                        </div>

                        <div className="blog-card-body">
                          <header className="blog-card-meta">
                            <time dateTime={post.publishedAt}>
                              {formatDate(post.publishedAt)}
                            </time>
                            <span className="blog-meta-dot">&bull;</span>
                            <span>{post.readTime}</span>
                          </header>

                          <h3 className="blog-card-title">
                            <Link to={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>

                          <p className="blog-card-excerpt">
                            {post.excerpt}
                          </p>

                          <footer className="blog-card-footer">
                            <span className="blog-author-compact-name">
                              {post.author.name}
                            </span>
                            <Link
                              to={`/blog/${post.slug}`}
                              className="blog-read-more-link"
                              aria-label={`Read full article: ${post.title}`}
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
              ) : (
                <div className="blog-no-results card card--surface">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--color-brand)', marginBottom: '1rem' }}>
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <h3>No matching care articles found</h3>
                  <p>We couldn&apos;t find any articles matching your search criteria. Try a different keyword or browse our latest publications.</p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: '1rem' }}
                  >
                    View All Articles
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="blog-sections-wrapper">
              {/* ===== 1. LATEST BLOGS SECTION ===== */}
              {(activeTab === 'all' || activeTab === 'latest') && (
                <section className="blog-content-block blog-latest-block" id="latest-blogs">
                  <div className="blog-section-header">
                    <div className="blog-section-header-left">
                      <span className="section-tag">Recent Publications</span>
                      <h2 className="section-title">Latest Blogs</h2>
                      <p className="section-subtitle">
                        Stay informed with our newest guides, clinical insights, and elder care recommendations.
                      </p>
                    </div>
                  </div>

                  <div className="blog-posts-grid">
                    {latestPosts.map((post, idx) => (
                      <AnimateIn key={`latest-${post.slug}`} delay={idx * 0.06}>
                        <article className="card card-hover blog-card">
                          <div className="blog-card-media">
                            <Link to={`/blog/${post.slug}`} tabIndex="-1" aria-hidden="true">
                              <img
                                src={post.image}
                                alt={post.imageAlt}
                                loading="lazy"
                                className="blog-card-img"
                              />
                            </Link>
                            <span className="blog-card-category-badge">
                              {post.category}
                            </span>
                          </div>

                          <div className="blog-card-body">
                            <header className="blog-card-meta">
                              <time dateTime={post.publishedAt}>
                                {formatDate(post.publishedAt)}
                              </time>
                              <span className="blog-meta-dot">&bull;</span>
                              <span>{post.readTime}</span>
                            </header>

                            <h3 className="blog-card-title">
                              <Link to={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h3>

                            <p className="blog-card-excerpt">
                              {post.excerpt}
                            </p>

                            <footer className="blog-card-footer">
                              <span className="blog-author-compact-name">
                                {post.author.name}
                              </span>
                              <Link
                                to={`/blog/${post.slug}`}
                                className="blog-read-more-link"
                                aria-label={`Read full article: ${post.title}`}
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
                </section>
              )}

              {/* ===== 2. MOST POPULAR BLOGS SECTION ===== */}
              {(activeTab === 'all' || activeTab === 'popular') && (
                <section className="blog-content-block blog-popular-block" id="popular-blogs">
                  <div className="blog-section-header blog-section-header--popular">
                    <div className="blog-section-header-left">
                      <span className="section-tag section-tag--warm">Community Favorites</span>
                      <h2 className="section-title">Most Popular Blogs</h2>
                      <p className="section-subtitle">
                        Our highest-rated, most read care guides trusted by families in Cottage Grove and Washington County.
                      </p>
                    </div>
                  </div>

                  <div className="blog-popular-showcase-container">
                    {popularPosts.map((post) => (
                      <AnimateIn key={`pop-${post.slug}`}>
                        <article className="card blog-popular-showcase-card">
                          <div className="blog-popular-grid">
                            <div className="blog-popular-media">
                              <Link to={`/blog/${post.slug}`} tabIndex="-1" aria-hidden="true" className="blog-popular-img-link">
                                <img
                                  src={post.image}
                                  alt={post.imageAlt}
                                  loading="lazy"
                                  className="blog-popular-img"
                                />
                              </Link>
                              
                            </div>

                            <div className="blog-popular-content">
                              <div className="blog-popular-meta">
                                <span className="blog-card-category-badge">
                                  {post.category}
                                </span>
                                <span className="blog-meta-dot">&bull;</span>
                                <time dateTime={post.publishedAt}>
                                  {formatDate(post.publishedAt)}
                                </time>
                                <span className="blog-meta-dot">&bull;</span>
                                <span>{post.readTime}</span>
                              </div>

                              <h3 className="blog-popular-title">
                                <Link to={`/blog/${post.slug}`}>
                                  {post.title}
                                </Link>
                              </h3>

                              <p className="blog-popular-excerpt">
                                {post.excerpt}
                              </p>

                              {/* Popular Highlights Chips */}
                              <div className="blog-popular-highlights" aria-label="Key topics in this popular guide">
                                <span className="blog-popular-highlight-chip">24/7 Awake Caregivers</span>
                                <span className="blog-popular-highlight-chip">Assisted Living vs Nursing Home</span>
                                <span className="blog-popular-highlight-chip">Licensing &amp; UDALSA</span>
                                <span className="blog-popular-highlight-chip">Admissions Checklist &amp; FAQs</span>
                              </div>

                              <div className="blog-popular-footer">
                                <div className="blog-author-compact">
                                  <span className="blog-author-name">{post.author.name}</span>
                                  <span className="blog-author-role">{post.author.role}</span>
                                </div>
                                <Link
                                  to={`/blog/${post.slug}`}
                                  className="btn btn-primary btn-sm blog-popular-cta-btn"
                                >
                                  <span>Read Most Popular Guide</span>
                                  <span aria-hidden="true">&rarr;</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </article>
                      </AnimateIn>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ===== BOTTOM CTA BANNER ===== */}
      <section className="section section-warm" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <AnimateIn>
            <span className="section-tag section-tag--warm">Compassionate Family Care</span>
            <h2 className="section-title">Have Questions About Assisted Living?</h2>
            <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto 2rem auto' }}>
              Every family’s journey is unique. Connect with our Cottage Grove care coordination team to discuss customized care plans, tour our residential home, or explore admissions options.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Tour
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
