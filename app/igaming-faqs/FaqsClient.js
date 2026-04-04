"use client";

import { useState } from 'react';
import Link from 'next/link';
import './faqs.css';

export default function FaqsClient({ faqs, tabs }) {
  const [activeTab, setActiveTab] = useState('igaming');
  const [openFaq, setOpenFaq] = useState(null);

  const handleToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <section className="faq-hero">
        <div className="faq-hero-badge">● iGAMING INSIGHTS</div>
        <h1>Unravel the World of iGaming:<br/>Your FAQs Simplified</h1>
        <p>The Ultimate iGaming Master FAQ. Your complete guide to online betting, legal updates, and winning strategies.</p>
        <div className="faq-search-bar">
          <input type="text" id="faqSearch" placeholder="Search questions across all topics..." />
          <button>🔍</button>
        </div>
      </section>

      <div className="faq-tabs-bar">
        <div className="faq-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`faq-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => { setActiveTab(tab.id); setOpenFaq(null); }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <section className="faq-body">
        <div className="container">
          <div className="faq-panel active">
            <div className="faq-panel-header">
              <h2>{tabs.find(t => t.id === activeTab)?.label} Questions</h2>
              <p>Everything you need to know about getting started with online gaming platforms.</p>
            </div>
            <div className="faq-accordion">
              {faqs[activeTab].map((faq, idx) => (
                <div className="faq-item" key={idx}>
                  <button className={`faq-question ${openFaq === idx ? 'open' : ''}`} onClick={() => handleToggle(idx)}>
                    {faq.q} <span className="faq-icon">+</span>
                  </button>
                  <div className={`faq-answer ${openFaq === idx ? 'open' : ''}`}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mid-cta">
        <div className="mid-cta-inner">
          <div className="mid-cta-badge">💬 STILL HAVE QUESTIONS?</div>
          <h2>Can't Find Your Answer?<br/><span>Talk to Our Experts</span></h2>
          <p>Our iGaming specialists are available 24/7 to answer your platform, licensing, and technical questions.</p>
          <Link href="/contact-us" className="btn btn-white">Contact Our Team →</Link>
        </div>
      </section>
    </>
  );
}
