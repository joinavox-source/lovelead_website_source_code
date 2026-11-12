import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AnimateIn from '../components/AnimateIn';
import SectionHeader from '../components/SectionHeader';
import { getAllBlogPosts, BLOG_CATEGORIES } from '../data/blogData';

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
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');

  const allPosts = useMemo(() => getAllBlogPosts(), []);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All Articles' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [allPosts, selectedCategory, searchQuery]);

  const featuredPost = allPosts[0];
  const regularPosts = filteredPosts;

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

      {/* ===== FEATURED ARTICLE BANNER (When No Search/Filter Active) ===== */}
      {selectedCategory === 'All Articles' && searchQuery.trim() === '' && featuredPost && (
        <section className="section section-warm blog-featured-section">
          <div className="container">
            <span className="section-tag" style={{ marginBottom: '0.75rem' }}>
              Featured Elder Care Guide
            </span>
            <article className="card blog-featured-card">
              <div className="blog-featured-grid">
                <div className="blog-featured-img-wrap">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    loading="lazy"
                    className="blog-featured-img"
                  />
                  <span className="blog-card-category-badge">
                    {featuredPost.category}
                  </span>
                </div>
                <div className="blog-featured-body">
                  <div className="blog-card-meta">
                    <time dateTime={featuredPost.publishedAt}>
                      {formatDate(featuredPost.publishedAt)}
                    </time>
                    <span className="blog-meta-dot">&bull;</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="blog-featured-title">
                    <Link to={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="blog-featured-excerpt">
                    {featuredPost.excerpt}
                  </p>
                  <div className="blog-featured-footer">
                    <div className="blog-author-compact">
                      <span className="blog-author-name">{featuredPost.author.name}</span>
                      <span className="blog-author-role">{featuredPost.author.role}</span>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="btn btn-primary btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
                    >
                      <span>Read Full Guide</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* ===== ARTICLES LISTING SECTION ===== */}
      <section className="section section-cream blog-listing-section">
        <div className="container">
          <div className="blog-controls-wrapper">
            {/* Category Filter Pills */}
            <nav className="blog-category-nav" aria-label="Filter blog posts by category">
              {BLOG_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`blog-category-pill ${
                    selectedCategory === category ? 'blog-category-pill--active' : ''
                  }`}
                >
                  <span>{category}</span>
                  {category !== 'All Articles' && (
                    <span className="blog-category-count">
                      {allPosts.filter((p) => p.category === category).length}
                    </span>
                  )}
                </button>
              ))}
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

          {/* Results Counter if Filter Active */}
          {(selectedCategory !== 'All Articles' || searchQuery.trim() !== '') && (
            <div className="blog-filter-status">
              <p>
                Showing <strong>{regularPosts.length}</strong> {regularPosts.length === 1 ? 'article' : 'articles'}
                {selectedCategory !== 'All Articles' ? ` in "${selectedCategory}"` : ''}
                {searchQuery ? ` matching "${searchQuery}"` : ''}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All Articles');
                  setSearchQuery('');
                }}
                className="blog-reset-filter-btn"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Articles Grid */}
          {regularPosts.length > 0 ? (
            <div className="blog-posts-grid">
              {regularPosts.map((post, idx) => (
                <AnimateIn key={post.slug} delay={idx * 0.06}>
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
              <p>We couldn&apos;t find any articles matching your search criteria. Try a different keyword or browse all categories.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All Articles');
                  setSearchQuery('');
                }}
                className="btn btn-primary btn-sm"
                style={{ marginTop: '1rem' }}
              >
                View All Articles
              </button>
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
