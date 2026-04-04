import Link from 'next/link';

export default function MarketingFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">

            {/* Column 1: Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">🎮</div>
                <div className="footer-logo-text">
                  iGaming Hub
                  <span>Enterprise iGaming Solutions</span>
                </div>
              </div>
              <p className="footer-brand-desc">
                With a Combined Experience &amp; Expertise of Over <strong>7+ Years</strong>, <strong>iGaming Hub</strong> is a Trusted Global Partner for iGaming Businesses. We Create and Deliver Innovative, State-of-the-Art iGaming Platforms &amp; Services that Help Clients Scale to New Heights.
              </p>
              <Link href="/#contact" className="footer-connect-btn">Connect With Us</Link>
              <div className="social-links">
                <a href="#" aria-label="X / Twitter">𝕏</a>
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="Facebook">f</a>
              </div>
            </div>

            {/* Column 2: Offices */}
            <div className="footer-office">
              <h4>Our Office</h4>
              <ul className="office-list">
                <li className="office-item">
                  <span className="office-code">IN</span>
                  <strong>India</strong>
                </li>
                <li className="office-item">
                  <span className="office-code">AE</span>
                  <strong>Dubai</strong>
                </li>
                <li className="office-item">
                  <span className="office-code">GB</span>
                  <strong>London</strong>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-item-icon">📞</div>
                  <div>
                    <strong>+1 800 123 4567</strong>
                    <span>Available 24/7 — Call or WhatsApp</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon" style={{ background: 'rgba(0,180,216,0.15)', color: '#00b4d8' }}>✉</div>
                  <div>
                    <strong>sales@igaminghub.sbs</strong>
                    <span>Sales &amp; business enquiries</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="footer-legal">
              <Link href="/services/customer-support">Customer Support</Link>
              <Link href="/services/privacy-policy">Privacy Policy</Link>
              <Link href="/services/terms-conditions">Terms &amp; Conditions</Link>
            </div>
            <p>© 2026 iGaming Hub. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
