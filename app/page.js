"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const trackRef = useRef(null);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://igaminghub.sbs/#organization",
        "name": "iGaming Hub",
        "url": "https://igaminghub.sbs/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://igaminghub.sbs/images/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+918799372589",
          "contactType": "sales",
          "email": "sales@igaminghub.sbs"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://igaminghub.sbs/#website",
        "url": "https://igaminghub.sbs/",
        "name": "iGaming Hub",
        "publisher": {
          "@id": "https://igaminghub.sbs/#organization"
        }
      }
    ]
  };

  useEffect(() => {
    // Hero Slider
    const track = trackRef.current;
    if (track) {
      const dots = document.querySelectorAll('.hero-dot');
      const prevBtn = document.getElementById('heroPrev');
      const nextBtn = document.getElementById('heroNext');
      let current = 0;
      const total = dots.length;
      let autoTimer;

      function goTo(idx) {
        current = (idx + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
      }

      function startAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(() => goTo(current + 1), 5000);
      }

      const hPrev = () => { goTo(current - 1); startAuto(); };
      const hNext = () => { goTo(current + 1); startAuto(); };
      
      prevBtn?.addEventListener('click', hPrev);
      nextBtn?.addEventListener('click', hNext);
      
      const dotListeners = [];
      dots.forEach((d, i) => {
        const hDot = () => { goTo(i); startAuto(); };
        d.addEventListener('click', hDot);
        dotListeners.push({d, hDot});
      });

      startAuto();

      // Animated Counters
      const counters = document.querySelectorAll('.counter');
      const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            const duration = 2000;
            const increment = target / (duration / 16);
            let currentVal = 0;

            const update = () => {
              currentVal += increment;
              if (currentVal < target) {
                counter.innerText = Math.ceil(currentVal) + '+';
                requestAnimationFrame(update);
              } else {
                counter.innerText = target + '+';
              }
            };
            update();
            observerInstance.unobserve(counter);
          }
        });
      });
      counters.forEach(c => observer.observe(c));

      return () => {
        clearInterval(autoTimer);
        prevBtn?.removeEventListener('click', hPrev);
        nextBtn?.removeEventListener('click', hNext);
        dotListeners.forEach(({d, hDot}) => d.removeEventListener('click', hDot));
        observer.disconnect();
      };
    }
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="hero" id="home">
        <div className="hero-slider" id="heroSlider">
          <div className="hero-slides-track" id="heroTrack" ref={trackRef}>

            {/* Slide 1 */}
            <div className="hero-slide">
              <div className="hero-slide-inner">
                <div className="hero-slide-content fade-up">
                  <h1>100% Custom iGaming Software Solutions</h1>
                  <p>Boost your betting business with our tailor-made iGaming platforms. We deliver secure payment gateways, advanced player management, and scalable casino software designed for maximum ROI.</p>
                  <div className="hero-slide-buttons">
                    <Link href="/#contact" className="btn-hero-primary">Let's Build →</Link>
                    <Link href="/#contact" className="btn-hero-secondary">GET IN TOUCH</Link>
                  </div>
                </div>
                <div className="hero-slide-graphic">
                  <div className="hero-graphic-box">🎰</div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="hero-slide">
              <div className="hero-slide-inner">
                <div className="hero-slide-content">
                  <h1>Launch Your Own iGaming Platform with Full Ownership</h1>
                  <p>Build your online casino or betting platform with iGaming Hub's advanced iGaming software. Get 100% ownership, scalable architecture, and complete control over your operations — built for speed, growth, and performance.</p>
                  <div className="hero-slide-buttons">
                    <Link href="/#contact" className="btn-hero-primary">GET IN TOUCH →</Link>
                    <Link href="/#services" className="btn-hero-secondary">Explore Services</Link>
                  </div>
                </div>
                <div className="hero-slide-graphic">
                  <div className="hero-graphic-box">🏆</div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="hero-slide">
              <div className="hero-slide-inner">
                <div className="hero-slide-content">
                  <h1>Quick &amp; Custom iGaming Game Development</h1>
                  <p>Design interactive, multi-player casino, poker, and fantasy games with cutting-edge technology. Our expert developers deliver immersive experiences with real-time gameplay, crypto integration, and advanced UI/UX.</p>
                  <div className="hero-slide-buttons">
                    <Link href="/services/custom-game-development" className="btn-hero-primary">Explore Now →</Link>
                    <Link href="/#contact" className="btn-hero-secondary">Contact Us</Link>
                  </div>
                </div>
                <div className="hero-slide-graphic">
                  <div className="hero-graphic-box">🎮</div>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="hero-slide">
              <div className="hero-slide-inner">
                <div className="hero-slide-content">
                  <h1>Advanced iGaming API Integration Services</h1>
                  <p>Integrate world-class APIs for sports data, payments, and gaming providers. Our secure and seamless iGaming API solutions enable real-time updates, crypto support, and enhanced player engagement for global platforms.</p>
                  <div className="hero-slide-buttons">
                    <Link href="/services/online-casino-api" className="btn-hero-primary">Let's Start →</Link>
                    <Link href="/#contact" className="btn-hero-secondary">Get a Quote</Link>
                  </div>
                </div>
                <div className="hero-slide-graphic">
                  <div className="hero-graphic-box">🔌</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="hero-slider-controls">
          <button className="hero-nav-btn" id="heroPrev" aria-label="Previous slide">‹</button>
          <div className="hero-dots" id="heroDots">
            <button className="hero-dot active" aria-label="Slide 1"></button>
            <button className="hero-dot" aria-label="Slide 2"></button>
            <button className="hero-dot" aria-label="Slide 3"></button>
            <button className="hero-dot" aria-label="Slide 4"></button>
          </div>
          <button className="hero-nav-btn" id="heroNext" aria-label="Next slide">›</button>
        </div>
      </section>

      <section className="enterprise-platform section" id="igaming">
        <div className="container">
          <div className="enterprise-layout">
            <div className="enterprise-left">
              <span className="sec-label">MARKET LEADER</span>
              <h2>Premier Enterprise<br/>iGaming Platform</h2>
              <p>iGaming Hub delivers customized, <strong>End-to-End solutions</strong> for the global gambling industry. We specialize in robust online casinos (White-label &amp; Custom), turnkey sportsbooks, and secure lottery engines.</p>
              <div className="blockquote-highlight">
                We are the <strong>only provider</strong> integrating a bespoke <strong>AI agent</strong> within our core. With <strong>7+ years</strong> of expertise, we don't follow trends—we define them.
              </div>
              <Link href="/#contact" className="ent-explore-btn">Explore More →</Link>
            </div>

            <div className="enterprise-right">
              <Link href="/services/online-casino-software" className="ent-card">
                <div className="ent-icon">🏬</div>
                <div>
                  <h3>White-Label Casino</h3>
                  <p>Full suite casino solutions.</p>
                </div>
              </Link>
              <Link href="/services/sportsbook-software" className="ent-card">
                <div className="ent-icon">⚽</div>
                <div>
                  <h3>Turnkey Sportsbook</h3>
                  <p>Live odds &amp; data feeds.</p>
                </div>
              </Link>
              <Link href="/services/fantasy-sports" className="ent-card">
                <div className="ent-icon">🏆</div>
                <div>
                  <h3>Fantasy Sports</h3>
                  <p>Daily &amp; season leagues.</p>
                </div>
              </Link>
              <Link href="/services/online-lottery" className="ent-card">
                <div className="ent-icon">🎟️</div>
                <div>
                  <h3>Lottery Solutions</h3>
                  <p>Secure global draws.</p>
                </div>
              </Link>
              <Link href="/services/crypto-casino" className="ent-card">
                <div className="ent-icon">₿</div>
                <div>
                  <h3>Crypto iGaming</h3>
                  <p>Blockchain integration.</p>
                </div>
              </Link>
              <Link href="/services/custom-game-development" className="ent-card">
                <div className="ent-icon">💻</div>
                <div>
                  <h3>Custom Game Dev</h3>
                  <p>Exclusive IP titles.</p>
                </div>
              </Link>
              <Link href="/services/online-casino-api" className="ent-card">
                <div className="ent-icon">🔌</div>
                <div>
                  <h3>API Integration</h3>
                  <p>Seamless connectivity.</p>
                </div>
              </Link>
              <Link href="/services/artificial-intelligence" className="ent-card">
                <div className="ent-icon">🤖</div>
                <div>
                  <h3>Bespoke AI Agent</h3>
                  <p>Next-gen automation.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="igaming-solutions" id="services">
        <div className="container">
          <div className="igaming-solutions-header">
            <h2>iGaming Software Solutions</h2>
            <p>Launch your online casino &amp; sportsbook fast with our turnkey platform. Start scaling your business today!</p>
          </div>

          <div className="solution-card">
            <div className="solution-card-content">
              <div className="solution-card-icon">🎰</div>
              <h3>Online Casino API</h3>
              <p>Effortlessly integrate world-class casino studios and top-performing games with our fast, scalable API designed for smooth deployment and maximum uptime.</p>
              <div className="solution-pills">
                <span className="solution-pill">Unified API Solution</span>
                <span className="solution-pill">24/7 Technical Assistance</span>
                <span className="solution-pill">Multi-Provider Support</span>
              </div>
              <Link href="/services/online-casino-api" className="solution-learn-more">LEARN MORE ↗</Link>
            </div>
            <div className="solution-card-visual">
              <div className="visual-box">🎲</div>
            </div>
          </div>

          <div className="solution-card">
            <div className="solution-card-visual">
              <div className="visual-box">🎯</div>
            </div>
            <div className="solution-card-content">
              <div className="solution-card-icon">🔗</div>
              <h3>Game Aggregation</h3>
              <p>Access an extensive selection of popular casino games through a single API, simplifying content integration across your entire portfolio.</p>
              <div className="solution-pills">
                <span className="solution-pill">Single API Connection</span>
                <span className="solution-pill">Efficient Back-Office</span>
                <span className="solution-pill">Content Updates</span>
              </div>
              <Link href="/services/online-casino-api" className="solution-learn-more">LEARN MORE ↗</Link>
            </div>
          </div>

          <div className="solution-card">
            <div className="solution-card-content">
              <div className="solution-card-icon">₿</div>
              <h3>Crypto Casino Software Solution</h3>
              <p>Launch a fast, secure, and scalable crypto-powered casino platform with integrated games, instant transactions, and full backend control.</p>
              <div className="solution-pills">
                <span className="solution-pill">All-in-One Platform</span>
                <span className="solution-pill">In-built Payment Solutions</span>
                <span className="solution-pill">24/7 Technical Support</span>
                <span className="solution-pill">Crypto iGaming Platform</span>
              </div>
              <Link href="/services/crypto-casino" className="solution-learn-more">LEARN MORE ↗</Link>
            </div>
            <div className="solution-card-visual">
              <div className="visual-box">🃏</div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-header">
            <h2>Numbers that Speak</h2>
            <p>Our achievements define our excellence. These numbers represent our consistent performance and global reach.</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-card-icon">🏆</div>
              <div>
                <div className="stat-card-number counter" data-target="250">0</div>
                <div className="stat-card-label">Overall Projects</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card-icon">⭐</div>
              <div>
                <div className="stat-card-number counter" data-target="7">0</div>
                <div className="stat-card-label">Years of Experience</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card-icon">👥</div>
              <div>
                <div className="stat-card-number counter" data-target="50">0</div>
                <div className="stat-card-label">Skilled Professionals</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card-icon">🌍</div>
              <div>
                <div className="stat-card-number counter" data-target="20">0</div>
                <div className="stat-card-label">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="platform-features">
        <div className="container">
          <div className="platform-features-header">
            <h2>iGaming Software Platform</h2>
            <p>With iGaming Hub, address various iGaming business needs effortlessly. Build a complete platform or integrate software solutions — whatever you need, we're ready to support your success.</p>
          </div>
          <div className="pf-grid">

            <div className="pf-card light">
              <div className="pf-card-content">
                <h3>Online Casino</h3>
                <p>Our online casino software delivers powerful, reliable gaming with cross-device support and top-tier content offers.</p>
                <div className="pf-pills">
                  <span className="pf-pill">Top-tier content</span>
                  <span className="pf-pill">Cross-device</span>
                  <span className="pf-pill">Bonus engine</span>
                  <span className="pf-pill">Multi-currency</span>
                </div>
              </div>
              <div className="pf-card-visual">🎰</div>
            </div>

            <div className="pf-card dark">
              <div className="pf-card-content">
                <h3>Crypto Casino</h3>
                <p>Accept 30+ cryptocurrencies with on-chain settlements and a seamless Web3 experience for modern players.</p>
                <div className="pf-pills">
                  <span className="pf-pill">Crypto providers</span>
                  <span className="pf-pill">Currency converter</span>
                  <span className="pf-pill">Low fees</span>
                  <span className="pf-pill">Web3 wallet</span>
                </div>
              </div>
              <div className="pf-card-visual">₿</div>
            </div>

            <div className="pf-card dark">
              <div className="pf-card-content">
                <h3>Sportsbook</h3>
                <p>High-performance sportsbook with live odds, pre-match markets and in-play trading. Scalable infra handles spikes and promo engines.</p>
                <div className="pf-pills">
                  <span className="pf-pill">Live tracking</span>
                  <span className="pf-pill">Free bets</span>
                  <span className="pf-pill">Odds boost</span>
                  <span className="pf-pill">Live streaming</span>
                </div>
              </div>
              <div className="pf-card-visual">⚽</div>
            </div>

            <div className="pf-card light">
              <div className="pf-card-content">
                <h3>Game Aggregation</h3>
                <p>One integration connects 1000+ casino &amp; table games, streamlining provider access and licensing.</p>
                <div className="pf-pills">
                  <span className="pf-pill">Back-office tools</span>
                  <span className="pf-pill">Free spins</span>
                  <span className="pf-pill">Branded tables</span>
                  <span className="pf-pill">1000+ games</span>
                </div>
              </div>
              <div className="pf-card-visual">🎯</div>
            </div>

          </div>
        </div>
      </section>

      <section className="mid-cta" id="contact">
        <div className="mid-cta-inner">
          <div className="mid-cta-badge">🚀 NEXT-GEN SOLUTION</div>
          <h2>Launch A Top-Tier<br/><span>iGaming Platform</span></h2>
          <p>Secure, scalable, and packed with real-time casino APIs. Elevate your betting experience with our world-class integration services.</p>
          <Link href="/login" className="btn btn-white">Get Started Now</Link>
        </div>
      </section>

      <section className="news-section" id="resources">
        <div className="container">
          <div className="section-header-center">
            <h2>Latest News</h2>
            <p>Discover the latest updates, press releases, and expert insights from our Knowledge Base.</p>
          </div>
          <div className="news-grid">
            <Link href="/services/blog" className="news-card">
              <div className="news-image" style={{ background: "url('https://images.unsplash.com/photo-1596200230232-a5e62bfecf07?ixlib=rb-4.0.3') center/cover" }}></div>
              <div className="news-content">
                <h4>Must-Have Casino Game Types and Their Features</h4>
                <p>In the competitive landscape of iGaming, the diversity and quality of your game library are crucial...</p>
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
            <Link href="/services/blog" className="news-card">
              <div className="news-image" style={{ background: "url('https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3') center/cover" }}></div>
              <div className="news-content">
                <h4>Best Sportsbook Software Providers in 2026: Complete Guide</h4>
                <p>The global iGaming market is evolving faster than ever. With new regulations, advanced technologies...</p>
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
            <Link href="/services/blog" className="news-card">
              <div className="news-image" style={{ background: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3') center/cover" }}></div>
              <div className="news-content">
                <h4>KYC/AML Compliance in iGaming: Complete Checklist</h4>
                <p>KYC (Know Your Customer) and AML (Anti-Money Laundering) compliance failures cost operators...</p>
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
