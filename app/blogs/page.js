import Link from 'next/link';
import './blogs.css';

export const metadata = {
  title: 'Our iGaming Blog | iGaming Hub — News & Insights',
  description: 'Read the latest iGaming industry news, platform guides, and expert insights from the iGaming Hub team.'
};

export default function BlogsPage() {
  return (
    <>
      <section className="blog-hero">
        <h1>Our iGaming Blog</h1>
        <div className="blog-breadcrumb">
          <Link href="/">🏠 HOME</Link> / <span>BLOGS & MEDIA</span>
        </div>
      </section>

      <section className="blog-body">
        <div className="container">
          <div className="blog-layout">

            {/* Articles */}
            <div className="blog-articles">

              <article className="blog-article">
                <div className="blog-article-image" style={{ background: "url('https://images.unsplash.com/photo-1596200230232-a5e62bfecf07?ixlib=rb-4.0.3') center/cover" }}></div>
                <div className="blog-article-content">
                  <span className="blog-article-tag">Casino</span>
                  <div className="blog-article-meta">
                    <span>📅 March 25, 2026</span>
                    <span>👁 2.4k views</span>
                  </div>
                  <h2>Must-Have Casino Game Types and Their Features</h2>
                  <p>In the competitive landscape of iGaming, the diversity and quality of your game library are crucial factors that determine player retention and revenue. Discover the essential game categories every platform must offer.</p>
                  <Link href="#" className="blog-read-more">Read Full Article →</Link>
                </div>
              </article>

              <article className="blog-article">
                <div className="blog-article-image" style={{ background: "url('https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3') center/cover" }}></div>
                <div className="blog-article-content">
                  <span className="blog-article-tag">Sportsbook</span>
                  <div className="blog-article-meta">
                    <span>📅 March 20, 2026</span>
                    <span>👁 1.8k views</span>
                  </div>
                  <h2>Best Sportsbook Software Providers in 2026: Complete Guide</h2>
                  <p>The global iGaming market is evolving faster than ever. With new regulations and advanced technologies, choosing the right sportsbook software provider has become a critical business decision for operators.</p>
                  <Link href="#" className="blog-read-more">Read Full Article →</Link>
                </div>
              </article>

              <article className="blog-article">
                <div className="blog-article-image" style={{ background: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3') center/cover" }}></div>
                <div className="blog-article-content">
                  <span className="blog-article-tag">Compliance</span>
                  <div className="blog-article-meta">
                    <span>📅 March 14, 2026</span>
                    <span>👁 3.1k views</span>
                  </div>
                  <h2>KYC/AML Compliance in iGaming: Complete 2026 Checklist</h2>
                  <p>KYC (Know Your Customer) and AML (Anti-Money Laundering) compliance failures cost operators millions in fines annually. Learn how to build a bulletproof compliance framework for your platform.</p>
                  <Link href="#" className="blog-read-more">Read Full Article →</Link>
                </div>
              </article>

              <article className="blog-article">
                <div className="blog-article-image" style={{ background: "url('https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-4.0.3') center/cover" }}></div>
                <div className="blog-article-content">
                  <span className="blog-article-tag">Crypto</span>
                  <div className="blog-article-meta">
                    <span>📅 March 7, 2026</span>
                    <span>👁 2.9k views</span>
                  </div>
                  <h2>How Crypto Casinos Are Disrupting Traditional Online Gaming</h2>
                  <p>From Bitcoin slots to Ethereum roulette, the rise of crypto casinos is fundamentally reshaping the online gambling industry. Zero chargebacks, anonymous play, and instant payouts are driving a new wave of players.</p>
                  <Link href="#" className="blog-read-more">Read Full Article →</Link>
                </div>
              </article>

              <article className="blog-article">
                <div className="blog-article-image" style={{ background: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3') center/cover" }}></div>
                <div className="blog-article-content">
                  <span className="blog-article-tag">Technology</span>
                  <div className="blog-article-meta">
                    <span>📅 February 28, 2026</span>
                    <span>👁 1.5k views</span>
                  </div>
                  <h2>AI and Machine Learning in iGaming: Personalisation at Scale</h2>
                  <p>Artificial intelligence is transforming how iGaming platforms engage with players — from personalised game recommendations to dynamic bonus offers and real-time responsible gambling interventions.</p>
                  <Link href="#" className="blog-read-more">Read Full Article →</Link>
                </div>
              </article>

            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-card">
                <div className="sidebar-card-title">Search</div>
                <div className="sidebar-search">
                  <input type="text" placeholder="Search Here..." />
                  <button>🔍</button>
                </div>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-card-title">Get In Touch</div>
                <div className="sidebar-form">
                  <label>Full Name</label>
                  <input type="text" placeholder="Full Name" />
                  <label>Email Address</label>
                  <input type="email" placeholder="Email Address" />
                  <label>Message</label>
                  <textarea placeholder="Your message..." rows={3}></textarea>
                  <button>Send Message</button>
                </div>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-card-title">Categories</div>
                <div className="sidebar-categories">
                  <Link href="#">Casino Software <span className="count">18</span></Link>
                  <Link href="#">Sportsbook <span className="count">12</span></Link>
                  <Link href="#">Crypto iGaming <span className="count">9</span></Link>
                  <Link href="#">Compliance <span className="count">7</span></Link>
                  <Link href="#">Technology <span className="count">15</span></Link>
                  <Link href="#">Industry News <span className="count">23</span></Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
