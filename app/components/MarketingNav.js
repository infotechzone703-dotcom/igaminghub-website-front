"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MarketingNav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`marketing-nav-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="marketing-nav" id="mainNav">
          <Link href="/" className="nav-logo">
            <div className="logo-icon-nav">🎮</div>
            iGaming Hub
          </Link>
          
          <div className="nav-links">
            <div className="nav-dropdown">
              <Link href="/about-us" className="nav-link">About Us</Link>
            </div>
            
            <div className="nav-dropdown">
              <Link href="/igaming-development" className="nav-link">iGaming <span className="dropdown-arrow">▼</span></Link>
              <div className="dropdown-content">
                <div className="dropdown-group">
                  <h4>Casino Solutions</h4>
                  <Link href="/services/crypto-casino">Crypto Casino Software</Link>
                  <Link href="/services/online-casino-software">Online Casino Software</Link>
                  <Link href="/services/online-lottery">Online Lottery</Link>
                </div>
                <div className="dropdown-group">
                  <h4>Sports & Betting</h4>
                  <Link href="/services/crypto-sports-betting">Crypto Sports Betting</Link>
                  <Link href="/services/sportsbook-software">Sportsbook Software</Link>
                  <Link href="/services/advanced-sports-betting">Advanced Sports Betting</Link>
                </div>
                <div className="dropdown-group">
                  <h4>iGaming Solutions</h4>
                  <Link href="/services/affiliate-system">Affiliate Management</Link>
                  <Link href="/services/fantasy-sports">Fantasy Sports App</Link>
                </div>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link href="/#services" className="nav-link">Services <span className="dropdown-arrow">▼</span></Link>
              <div className="dropdown-content">
                <div className="dropdown-group">
                  <h4>Game Development</h4>
                  <Link href="/services/poker">Poker</Link>
                  <Link href="/services/rummy">Rummy</Link>
                  <Link href="/services/opinion-trading">Opinion Trading</Link>
                  <Link href="/services/casino-games">Casino Games</Link>
                  <Link href="/services/roulette">Roulette</Link>
                  <Link href="/services/custom-game-development">Custom Game Development</Link>
                </div>
                <div className="dropdown-group">
                  <h4>API Integration</h4>
                  <Link href="/services/online-casino-api">Online Casino API</Link>
                  <Link href="/services/sports-betting-api">Sports Betting API</Link>
                  <Link href="/services/payment-gateway-api">Payment Gateway API</Link>
                </div>
                <div className="dropdown-group">
                  <h4>Custom</h4>
                  <Link href="/services/black-jack">Black Jack</Link>
                  <Link href="/services/slots">Slots</Link>
                  <Link href="/services/telegram-games">Telegram Games</Link>
                  <Link href="/services/gamification">Gamification</Link>
                  <Link href="/services/artificial-intelligence">AI & ML</Link>
                </div>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link href="/blogs" className="nav-link">Resources <span className="dropdown-arrow">▼</span></Link>
              <div className="dropdown-content mini">
                <Link href="/blogs">Blog</Link>
                <Link href="/igaming-events">Events</Link>
                <Link href="/igaming-faqs">FAQ</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <a href="https://defconlab.co/" target="_blank" rel="noopener noreferrer" className="nav-link">Defcon Lab</a>
            </div>
          </div>

          <div className="nav-cta">
            <Link href="/login" className="btn btn-secondary btn-sm login-btn">Login</Link>
            <Link href="/contact-us" className="btn btn-primary btn-sm outline-glow">Contact Us</Link>
          </div>

          <button 
            className="mobile-menu-toggle" 
            aria-label="Open Menu"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </nav>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link href="/about-us">About Us</Link>
          <Link href="/igaming-development">iGaming</Link>
          <Link href="/services/online-casino-api">Online Casino API</Link>
          <Link href="/services/poker">Poker</Link>
          <Link href="/services/crypto-casino">Crypto Casino</Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/igaming-faqs">FAQ</Link>
          <Link href="/igaming-events">Events</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
      </header>
    </>
  );
}
