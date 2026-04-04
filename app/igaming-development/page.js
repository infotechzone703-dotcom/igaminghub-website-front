import Link from 'next/link';
import './igaming-dev.css';

export const metadata = {
  title: 'iGaming Software Development Services | iGaming Hub',
  description: 'Enterprise iGaming software development — turnkey casinos, sportsbooks, lottery engines, fantasy sports platforms and crypto gaming solutions.',
  alternates: {
    canonical: 'https://igaminghub.sbs/igaming-development',
  }
};

export default function IGamingDevPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .marketing-body {
          background: #060e2b !important;
        }
      `}} />

      <section className="igdev-hero">
        <div className="igdev-hero-inner">
          <h1>iGaming Software<br/><span>Development Services</span></h1>
          <p>Launch enterprise-grade iGaming platforms with our end-to-end development services. Casino, sportsbook, lottery, fantasy sports — all built for scale, speed, and compliance.</p>
          <div className="igdev-hero-btns">
            <Link href="/contact-us" className="btn-hero-primary">Let's Connect →</Link>
            <Link href="/#services" className="btn-hero-secondary">Explore Solutions</Link>
          </div>
          <div className="down-arrow">↓</div>
        </div>
      </section>

      <section className="igdev-services">
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: 50 }}>
            <span className="sec-label">OUR SOLUTIONS</span>
            <h2 style={{ color: '#fff' }}>Full-Stack iGaming Development</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', margin: '12px auto 0', maxWidth: 600 }}>Everything you need to build, launch, and scale a world-class iGaming platform.</p>
          </div>
          <div className="igdev-services-grid">
            <div className="igdev-svc-card">
              <div className="igdev-svc-card-icon">🏬</div>
              <h3>White-Label Casino Platform</h3>
              <p>Launch a fully branded online casino with 5000+ games, multi-currency wallets, bonus engines, and live dealer content — all in your own brand.</p>
              <Link href="/services/online-casino-software" className="igdev-svc-link">Learn More →</Link>
            </div>
            <div className="igdev-svc-card">
              <div className="igdev-svc-card-icon">⚽</div>
              <h3>Turnkey Sportsbook</h3>
              <p>Full-featured sportsbook with real-time odds across 30+ sports, in-play betting, cash-out, and complete risk management capabilities.</p>
              <Link href="/services/sportsbook-software" className="igdev-svc-link">Learn More →</Link>
            </div>
            <div className="igdev-svc-card">
              <div className="igdev-svc-card-icon">🎟️</div>
              <h3>Lottery Software</h3>
              <p>Complete lottery management system with draw management, ticket sales, multi-market support, and integrated payment solutions.</p>
              <Link href="/services/online-lottery" className="igdev-svc-link">Learn More →</Link>
            </div>
            <div className="igdev-svc-card">
              <div className="igdev-svc-card-icon">🏆</div>
              <h3>Fantasy Sports Platform</h3>
              <p>Daily fantasy sports and season-long leagues with live scoring, real-time data feeds, team management, and custom tournament creation.</p>
              <Link href="/services/fantasy-sports" className="igdev-svc-link">Learn More →</Link>
            </div>
            <div className="igdev-svc-card">
              <div className="igdev-svc-card-icon">₿</div>
              <h3>Crypto Casino Development</h3>
              <p>Web3-native casino platform supporting 30+ cryptocurrencies, provably fair games, on-chain settlements, and DeFi staking integration.</p>
              <Link href="/services/crypto-casino" className="igdev-svc-link">Learn More →</Link>
            </div>
            <div className="igdev-svc-card">
              <div className="igdev-svc-card-icon">🤖</div>
              <h3>Bespoke AI Agent</h3>
              <p>Industry-first integrated AI agent — player behaviour analysis, personalized promotions, fraud detection, and predictive analytics built-in.</p>
              <Link href="/services/artificial-intelligence" className="igdev-svc-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="igdev-features">
        <div className="container">
          <div className="igdev-features-grid">
            <div className="igdev-features-text">
              <span className="sec-label">PLATFORM CAPABILITIES</span>
              <h2>Built for <span>Enterprise Scale</span></h2>
              <p>Every iGaming Hub platform is architected from the ground up for high availability, rapid scaling, and global compliance — so you can focus on growth.</p>
              <ul className="igdev-feature-list">
                <li>99.99% SLA uptime guarantee</li>
                <li>Multi-jurisdiction licensing support (UKGC, MGA, Curaçao)</li>
                <li>Real-time player analytics & segmentation</li>
                <li>Built-in KYC/AML compliance engine</li>
                <li>Omnichannel — web, mobile, native apps</li>
                <li>White-glove launch support & ongoing SLA</li>
              </ul>
              <Link href="/contact-us" className="ent-explore-btn" style={{ marginTop: 28, display: 'inline-flex' }}>Get a Free Consultation →</Link>
            </div>
            <div className="igdev-features-visual">
              <div className="igdev-fv-box"><div className="num">250+</div><div className="lbl">Projects Launched</div></div>
              <div className="igdev-fv-box"><div className="num">7+</div><div className="lbl">Years Experience</div></div>
              <div className="igdev-fv-box"><div className="num">50+</div><div className="lbl">Expert Engineers</div></div>
              <div className="igdev-fv-box"><div className="num">20+</div><div className="lbl">Countries Served</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="igdev-cta">
        <div className="container">
          <h2>Ready to Launch Your Platform?</h2>
          <p>Talk to our iGaming experts today. Get a free project estimate and technical roadmap.</p>
          <Link href="/contact-us" className="btn btn-white">Let's Connect →</Link>
        </div>
      </section>
    </>
  );
}
