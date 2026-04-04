import Link from 'next/link';
import './events.css';

export const metadata = {
  title: 'iGaming Events 2026 | iGaming Hub — Conferences & Expos',
  description: 'Stay up to date with the biggest iGaming industry events, conferences, and expos in 2026. Meet iGaming Hub at ICE, G2E, SBC, and more.'
};

export default function EventsPage() {
  return (
    <>
      <section className="events-hero">
        <h1>iGaming Events <span>2026</span></h1>
        <p>Meet iGaming Hub at the world's leading gaming industry conferences and expos.</p>
      </section>

      <section className="events-body">
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: 50 }}>
            <span className="sec-label">UPCOMING EVENTS</span>
            <h2 style={{ color: 'var(--blue)' }}>Where We'll Be in 2026</h2>
            <p className="section-desc" style={{ margin: '12px auto 0' }}>Connect with our team at these industry-leading events and discover how iGaming Hub can power your gaming business.</p>
          </div>
          <div className="events-grid">

            <div className="event-card">
              <div className="event-card-header">
                <div className="event-date">📅 February 4–6, 2026</div>
                <h3>ICE Barcelona 2026</h3>
                <div className="event-location">📍 Fira de Barcelona, Spain</div>
              </div>
              <div className="event-card-body">
                <p>The world's largest B2B gaming event, bringing together 40,000+ industry professionals from 170+ countries. iGaming Hub will showcase our latest casino and sportsbook platform innovations.</p>
                <div className="event-tags"><span className="event-tag">Casino</span><span className="event-tag">Sportsbook</span><span className="event-tag">B2B</span></div>
                <Link href="/contact-us" className="event-link">Book a Meeting →</Link>
              </div>
            </div>

            <div className="event-card">
              <div className="event-card-header" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
                <div className="event-date">📅 March 11–13, 2026</div>
                <h3>SBC Summit Americas</h3>
                <div className="event-location">📍 Fort Lauderdale, USA</div>
              </div>
              <div className="event-card-body">
                <p>SBC's flagship North American event focused on sports betting and igaming, connecting operators, regulators, and suppliers across the rapidly growing US market.</p>
                <div className="event-tags"><span className="event-tag">Sports Betting</span><span class="event-tag">Americas</span><span className="event-tag">Regulation</span></div>
                <Link href="/contact-us" className="event-link">Book a Meeting →</Link>
              </div>
            </div>

            <div className="event-card">
              <div className="event-card-header" style={{ background: 'linear-gradient(135deg, #0a8f6e, #10b981)' }}>
                <div className="event-date">📅 April 22–24, 2026</div>
                <h3>G2E Asia 2026</h3>
                <div className="event-location">📍 Marina Bay Sands, Singapore</div>
              </div>
              <div className="event-card-body">
                <p>Asia's premier gaming exhibition, covering land-based and online gaming across the dynamic Asia-Pacific market. A must-attend for operators targeting growth in the region.</p>
                <div className="event-tags"><span className="event-tag">Asia-Pacific</span><span className="event-tag">Online Gaming</span><span className="event-tag">Land-Based</span></div>
                <Link href="/contact-us" className="event-link">Book a Meeting →</Link>
              </div>
            </div>

            <div className="event-card">
              <div className="event-card-header" style={{ background: 'linear-gradient(135deg, #be185d, #ec4899)' }}>
                <div className="event-date">📅 June 10–12, 2026</div>
                <h3>iGaming NEXT Malta</h3>
                <div className="event-location">📍 Hilton Malta, St. Julian's</div>
              </div>
              <div className="event-card-body">
                <p>An elite conference focused on the future of iGaming with top-level industry speakers, panels on regulation, crypto gaming, AI, and player acquisition strategies.</p>
                <div className="event-tags"><span className="event-tag">Crypto</span><span className="event-tag">AI</span><span className="event-tag">Europe</span></div>
                <Link href="/contact-us" className="event-link">Book a Meeting →</Link>
              </div>
            </div>

            <div className="event-card">
              <div className="event-card-header" style={{ background: 'linear-gradient(135deg, #b45309, #f59e0b)' }}>
                 <div className="event-date">📅 September 23–25, 2026</div>
                 <h3>G2E Las Vegas 2026</h3>
                 <div className="event-location">📍 MGM Grand, Las Vegas, USA</div>
              </div>
              <div className="event-card-body">
                <p>The Global Gaming Expo — North America's largest gaming industry event covering casino technology, regulated sports betting, iGaming, and entertainment at MGM Grand.</p>
                <div className="event-tags"><span className="event-tag">Casino</span><span className="event-tag">Tech</span><span className="event-tag">North America</span></div>
                <Link href="/contact-us" className="event-link">Book a Meeting →</Link>
              </div>
            </div>

            <div className="event-card">
              <div className="event-card-header" style={{ background: 'linear-gradient(135deg, #0e4dab, #1e40af)' }}>
                 <div className="event-date">📅 November 18–20, 2026</div>
                 <h3>SBC Summit Lisbon 2026</h3>
                 <div className="event-location">📍 Cascais, Lisbon, Portugal</div>
              </div>
              <div className="event-card-body">
                 <p>The ultimate gathering for the sports betting and gaming industry in Europe. Over 20,000 delegates, 400+ exhibitors, and 200+ speakers covering the full iGaming landscape.</p>
                 <div className="event-tags"><span className="event-tag">Sports Betting</span><span className="event-tag">Europe</span><span className="event-tag">Networking</span></div>
                 <Link href="/contact-us" className="event-link">Book a Meeting →</Link>
              </div>
            </div>

          </div>

          <div className="events-cta">
            <h2>Meet Us at the Next Event</h2>
            <p>Schedule a private meeting with our team at any upcoming event to discuss your iGaming platform needs.</p>
            <Link href="/contact-us" className="btn btn-primary">Book a Meeting →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
