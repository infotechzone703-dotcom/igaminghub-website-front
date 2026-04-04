"use client";

import './contact.css';

export default function ContactClient() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been received. Our team will contact you shortly.');
  };

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <h1>Contact Us</h1>
          <div className="contact-hero-line"></div>
          <p>Find out more about our offerings — complete the form and a member of our team will be in touch shortly.</p>
        </div>
      </section>

      <section className="contact-body">
        <div className="container">
          <div className="contact-grid">

            {/* Left: Form */}
            <div className="contact-form-wrap">
              <h2>Get in Touch</h2>
              <p>Fill out the form below to connect with our team. We're here to help you grow your business!</p>
              <form onSubmit={handleFormSubmit} id="contactForm">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 800 000 0000" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject">
                    <option value="">Select a topic...</option>
                    <option>White-Label Casino</option>
                    <option>Sportsbook Software</option>
                    <option>Crypto Casino</option>
                    <option>Game Development</option>
                    <option>API Integration</option>
                    <option>Licensing & Compliance</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" placeholder="Tell us about your project..." required></textarea>
                </div>
                <button type="submit" className="contact-submit">Send Message →</button>
              </form>
            </div>

            {/* Right: Info */}
            <div className="contact-info-wrap">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <div className="sub">Say something to start a live chat!</div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📞</div>
                  <div>
                    <strong>+918799372589</strong>
                    <span>Call or WhatsApp — Available 24/7</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">✉️</div>
                  <div>
                    <strong>sales@igaminghub.sbs</strong>
                    <span>Sales & business enquiries</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">💬</div>
                  <div>
                    <strong>Live Chat</strong>
                    <span>Available Mon–Fri, 9AM–6PM IST</span>
                  </div>
                </div>
              </div>

              <div className="offices-wrap">
                <h3>📍 Our Offices</h3>
                <ul className="office-list-table">
                  <li className="office-row">
                    <span className="office-flag">🇮🇳</span>
                    <div>
                      <div className="office-name">India (HQ)</div>
                      <div className="office-loc">Gurugram, Haryana — Asia-Pacific Operations</div>
                    </div>
                  </li>
                  <li className="office-row">
                    <span className="office-flag">🇦🇪</span>
                    <div>
                      <div className="office-name">Dubai</div>
                      <div className="office-loc">DIFC, Dubai — Middle East & Africa</div>
                    </div>
                  </li>
                  <li className="office-row">
                    <span className="office-flag">🇬🇧</span>
                    <div>
                      <div className="office-name">London</div>
                      <div className="office-loc">Canary Wharf, London — Europe Operations</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
