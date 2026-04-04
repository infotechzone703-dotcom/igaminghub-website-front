import Link from 'next/link';
import './about.css';

export const metadata = {
  title: 'About Us | iGaming Hub — Building the Future of Gaming',
  description: 'With 7+ years of industry expertise, iGaming Hub excels in creating cutting-edge gaming platforms from turnkey casino solutions to immersive game development.',
  alternates: {
    canonical: 'https://igaminghub.sbs/about-us',
  },
  openGraph: {
    title: 'About iGaming Hub — Leading Gaming Technology Company',
    description: 'We excel in creating cutting-edge gaming platforms from turnkey casino solutions to immersive game development.',
    url: 'https://igaminghub.sbs/about-us',
    type: 'website',
    images: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About iGaming Hub — Leading Gaming Technology Company',
    description: 'We excel in creating cutting-edge gaming platforms from turnkey casino solutions to immersive game development.',
    images: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  }
};

export default function AboutUs() {
  return (
    <>
      <section className="about-hero">
        <div className="fade-up" style={{ padding: '0 24px', position: 'relative', zIndex: 2 }}>
          <div className="about-hero-badge">🚀 Leading Gaming Technology Company</div>
          <h1>Building the <span>Future of Gaming</span> &<br/>iGaming Solutions</h1>
          <p>We excel in creating cutting-edge gaming platforms, from <strong style={{color:'#fff'}}>turnkey casino solutions</strong> to immersive game development. With over 07+ years of industry expertise, we deliver innovative technology that drives success.</p>
          <div className="about-hero-btns">
            <Link href="/services/online-casino-api" className="btn-hero-primary">Explore Our Solutions →</Link>
            <Link href="/contact-us" className="btn-hero-secondary">Contact Our Team 💬</Link>
          </div>
          <div className="about-stat-strip">
            <div className="about-stat-item">
              <div className="about-stat-num">250+</div>
              <div className="about-stat-label">Projects Delivered</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-num">7+</div>
              <div className="about-stat-label">Years of Experience</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-num">50+</div>
              <div className="about-stat-label">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-services">
        <div className="container">
          <div className="section-header-center">
            <span className="sec-label">WHAT WE DO</span>
            <h2 style={{ color: '#0468e5' }}>Our Core Expertise</h2>
            <p className="section-desc" style={{ margin: '12px auto 0' }}>From full-scale casino platforms to custom game engines — we build end-to-end iGaming solutions.</p>
          </div>
          <div className="about-services-grid">
            <div className="about-svc-card">
              <div className="about-svc-icon">🏬</div>
              <h3>White-Label Casino</h3>
              <p>Launch a fully branded casino with 5000+ games, payment gateways, and multi-currency support in record time.</p>
            </div>
            <div className="about-svc-card">
              <div className="about-svc-icon">⚽</div>
              <h3>Turnkey Sportsbook</h3>
              <p>Real-time odds, 30+ sports markets, in-play betting, and comprehensive risk management tools.</p>
            </div>
            <div className="about-svc-card">
              <div className="about-svc-icon">🃏</div>
              <h3>Custom Game Development</h3>
              <p>Poker, Rummy, Slots, Blackjack — any game type built to your exact specifications with unique IP.</p>
            </div>
            <div className="about-svc-card">
              <div className="about-svc-icon">₿</div>
              <h3>Crypto iGaming</h3>
              <p>Accept 30+ cryptocurrencies with on-chain settlements, provably fair games, and Web3 wallet support.</p>
            </div>
            <div className="about-svc-card">
              <div className="about-svc-icon">🔌</div>
              <h3>API Integration</h3>
              <p>Single unified API to connect casino studios, payment gateways, sports data, and CRM providers.</p>
            </div>
            <div className="about-svc-card">
              <div className="about-svc-icon">🤖</div>
              <h3>AI & Machine Learning</h3>
              <p>Predictive analytics, responsible gambling tools, fraud detection, and personalised player journeys.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="about-mission-grid">
            <div className="about-mission-text">
              <span className="sec-label">OUR MISSION</span>
              <h2>Empowering iGaming Businesses Globally</h2>
              <p>iGaming Hub was founded with a singular mission: to make enterprise-grade iGaming technology accessible to operators of all sizes. We believe that world-class gaming platforms should not be limited to the biggest brands.</p>
              <p>Our 7+ year journey has been defined by relentless innovation, a deep commitment to regulatory compliance, and a passion for building technology that creates unforgettable player experiences across every device, every jurisdiction.</p>
              <Link href="/contact-us" className="ent-explore-btn" style={{ marginTop: '8px' }}>Get In Touch →</Link>
            </div>
            <div>
              <div className="about-values">
                <div className="about-value-card">
                  <div className="about-value-icon">🎯</div>
                  <h4>Client-First</h4>
                  <p>Every decision we make starts with our clients' growth in mind.</p>
                </div>
                <div className="about-value-card">
                  <div className="about-value-icon">🔒</div>
                  <h4>Compliance</h4>
                  <p>GDPR, KYC/AML, and regional gaming regulations built in from day one.</p>
                </div>
                <div className="about-value-card">
                  <div className="about-value-icon">⚡</div>
                  <h4>Speed</h4>
                  <p>Rapid deployment protocols get your platform live in weeks, not months.</p>
                </div>
                <div className="about-value-card">
                  <div className="about-value-icon">🌍</div>
                  <h4>Global Reach</h4>
                  <p>Multi-language, multi-currency platforms serving 20+ countries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-why">
        <div className="container">
          <div className="section-header-center">
            <span className="sec-label">WHY iGAMING HUB</span>
            <h2 style={{ color: '#0468e5' }}>Trusted by Operators Worldwide</h2>
            <p className="section-desc" style={{ margin: '12px auto 0' }}>Our platform statistics speak for themselves.</p>
          </div>
          <div className="about-why-grid">
            <div className="why-card">
              <div className="why-card-num">250+</div>
              <h3>Projects Delivered</h3>
              <p>Casinos, sportsbooks, and custom games shipped globally.</p>
            </div>
            <div className="why-card">
              <div className="why-card-num">7+</div>
              <h3>Years Experience</h3>
              <p>Deep domain expertise across every iGaming vertical.</p>
            </div>
            <div className="why-card">
              <div className="why-card-num">50+</div>
              <h3>Expert Team</h3>
              <p>Developers, designers, and iGaming specialists united.</p>
            </div>
            <div className="why-card">
              <div className="why-card-num">20+</div>
              <h3>Countries Served</h3>
              <p>Licensed, compliant operations spanning 5 continents.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mid-cta" id="contact">
        <div className="mid-cta-inner">
          <div className="mid-cta-badge">🚀 READY TO LAUNCH</div>
          <h2>Ready to Build Your<br/><span>iGaming Empire?</span></h2>
          <p>Talk to our team today and discover how iGaming Hub can power your next gaming venture.</p>
          <Link href="/contact-us" className="btn btn-white">Contact Our Team</Link>
        </div>
      </section>
    </>
  );
}
