import FaqsClient from './FaqsClient';

export const metadata = {
  title: 'iGaming FAQs 2026 — Legal, Bonuses, Slots & More | iGaming Hub',
  description: 'The Ultimate iGaming FAQ. Your complete guide to online betting, legal updates, and winning strategies answered by our iGaming experts.',
  alternates: {
    canonical: 'https://igaminghub.sbs/igaming-faqs'
  }
};

export default function FAQsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is iGaming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "iGaming refers to all forms of online gambling and gaming, including online casinos, sports betting, poker, bingo, lottery, and fantasy sports."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to launch a casino platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With iGaming Hub's white-label solution, you can go live in as little as 2–4 weeks. Custom-built platforms typically take 3–6 months."
        }
      },
      {
        "@type": "Question",
        "name": "Which gambling licence is best for an online casino?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most respected licences are issued by the UK Gambling Commission (UKGC), Malta Gaming Authority (MGA), and Curaçao eGaming depending on your target market."
        }
      }
    ]
  };

  const faqs = {
    igaming: [
      { q: "What is iGaming?", a: "iGaming refers to all forms of online gambling and gaming, including online casinos, sports betting, poker, bingo, lottery, and fantasy sports. It encompasses any form of wagering conducted over the internet using devices like computers, tablets, and smartphones." },
      { q: "How do I start an online casino?", a: "Starting an online casino requires: (1) Obtaining a gambling licence from a reputable jurisdiction like Malta, Curaçao, or UKGC; (2) Partnering with a software provider like iGaming Hub; (3) Setting up payment processing; (4) Integrating games from top providers; (5) Building your marketing and player acquisition strategy. Contact our team for a full roadmap." },
      { q: "What is white-label casino software?", a: "White-label casino software is a fully-built iGaming platform that you can brand and launch as your own. You get all the technology — games, payment systems, back-office tools, and CRM — while adding your own branding, domain, and player base. It's the fastest way to launch a casino with minimal development time." },
      { q: "How long does it take to launch a casino platform?", a: "With iGaming Hub's white-label solution, you can go live in as little as 2–4 weeks. Custom-built platforms typically take 3–6 months depending on feature complexity, licensing requirements, and platform integrations." },
      { q: "What is the difference between a white-label and turnkey casino?", a: "A white-label casino is a pre-built platform you brand and operate, while a turnkey casino is a completely custom-built solution delivered ready to operate. Turnkey solutions give you full ownership of the code and infrastructure, whereas white-label runs on the provider's shared infrastructure." }
    ],
    legal: [
      { q: "Which gambling licence is best for an online casino?", a: "The most respected licences are issued by the UK Gambling Commission (UKGC), Malta Gaming Authority (MGA), Curaçao eGaming, and Gibraltar. UKGC and MGA are the gold standards for European markets. Curaçao is popular for faster setup and lower costs. The best choice depends on your target markets and budget." },
      { q: "Is online gambling legal globally?", a: "Online gambling legality varies significantly by country. Some countries like the UK, Malta, and most of Europe have established regulated markets. Others like the US have state-by-state regulation. Some countries prohibit online gambling entirely. Always consult legal experts for your target markets before launching." },
      { q: "What is KYC/AML in iGaming?", a: "KYC (Know Your Customer) and AML (Anti-Money Laundering) are regulatory requirements for online gambling operators. KYC involves verifying player identities through document checks, while AML monitors and reports suspicious financial activity. Non-compliance can result in heavy fines and loss of licence." }
    ],
    banking: [
      { q: "What payment methods can I integrate?", a: "iGaming Hub supports integration with 200+ payment providers including Visa, Mastercard, PayPal, Skrill, Neteller, bank transfers, and 30+ cryptocurrencies including Bitcoin, Ethereum, USDT, and more. We can connect your platform to any payment gateway via our unified payment API." },
      { q: "How fast are crypto withdrawals?", a: "Crypto withdrawals on our platform are typically processed within minutes, subject to blockchain confirmation times. Bitcoin confirmation usually takes 10–60 minutes, while Ethereum and ERC-20 tokens are typically confirmed in under 5 minutes. USDT TRC-20 withdrawals are near-instant." },
      { q: "Can I support multiple currencies?", a: "Yes. iGaming Hub platforms support multi-currency wallets — fiat currencies (USD, EUR, GBP, INR, etc.) and cryptocurrencies (BTC, ETH, USDT, etc.) can coexist in the same player wallet with real-time conversion. This is essential for global operator reach." }
    ],
    bonuses: [
      { q: "What bonus types can I offer players?", a: "Our platform supports: Welcome/deposit bonuses, Free spins (game-specific or platform-wide), No-deposit bonuses, Reload bonuses, Cashback offers, Loyalty points programs, VIP rewards, Tournament prize pools, Referral bonuses, and wagering challenge bonuses. All fully configurable from the back-office." },
      { q: "Can I set custom wagering requirements?", a: "Yes. The bonus engine allows full configuration of wagering requirements (e.g., 30x, 40x), game contribution percentages, time limits, maximum bet restrictions, and cashout limits per bonus type. Compliance-ready by design." }
    ],
    slots: [
      { q: "How many games can I offer?", a: "Through iGaming Hub's game aggregation API, you can access 5000+ games from 200+ top providers including Pragmatic Play, Evolution Gaming, NetEnt, Microgaming, Yggdrasil, and more — through a single integration point. New games are automatically added as providers release them." },
      { q: "Are the games certified as fair?", a: "Yes. All games integrated via our platform are certified by independent testing agencies (GLI, eCOGRA, iTech Labs) for RNG fairness and accurate RTP percentages. Crypto games use provably fair algorithms that players can independently verify on-chain." }
    ],
    sportsbook: [
      { q: "Which sports markets can I offer?", a: "Our sportsbook covers 30+ sports including Football, Basketball, Tennis, Cricket, Baseball, Ice Hockey, Esports, and more. Pre-match and in-play (live) betting available for all major markets with real-time odds from leading data providers." },
      { q: "Does the platform support live streaming?", a: "Yes. Our sportsbook integrates with live streaming providers to deliver video alongside in-play bet markets. Players can watch the event and bet simultaneously, dramatically improving in-play engagement and session times." }
    ],
    trust: [
      { q: "How do you protect player data?", a: "All player data is encrypted at rest (AES-256) and in transit (TLS 1.3). We're GDPR-compliant and PCI-DSS certified. Infrastructure is hosted on ISO 27001 certified data centres with 24/7 security monitoring, DDoS protection, and automated threat detection." },
      { q: "What responsible gambling tools are available?", a: "Built-in responsible gambling features include: deposit limits, loss limits, session time limits, reality checks, self-exclusion (temporary and permanent), cool-off periods, and integration with national self-exclusion registers like GAMSTOP (UK). All required by most licensing jurisdictions." }
    ],
    tech: [
      { q: "What technology stack does iGaming Hub use?", a: "Our platforms are built on a modern microservices architecture using Node.js, React/Next.js, and cloud-native infrastructure (AWS/GCP). The tech stack supports horizontal scaling, real-time WebSocket connections for live games and betting, and Redis-powered session management for high concurrency." },
      { q: "What are the platform uptime guarantees?", a: "iGaming Hub platforms are backed by enterprise-grade SLAs with 99.99% uptime guarantees. Our multi-region cloud infrastructure, automatic failover, and 24/7 DevOps monitoring ensure your players experience near-zero downtime, even during peak traffic events." },
      { q: "Can I integrate my existing systems via API?", a: "Yes. iGaming Hub provides a comprehensive REST API and webhook system for integrating with third-party CRMs, affiliate platforms, BI tools, payment processors, and game providers. Full API documentation is available to all platform clients." }
    ]
  };

  const tabs = [
    { id: 'igaming', label: 'iGaming' },
    { id: 'legal', label: 'Legal & Licensing' },
    { id: 'banking', label: 'Banking & Payouts' },
    { id: 'bonuses', label: 'Bonuses & Promos' },
    { id: 'slots', label: 'Gameplay & Slots' },
    { id: 'sportsbook', label: 'Sportsbook & Betting' },
    { id: 'trust', label: 'Trust & Safety' },
    { id: 'tech', label: 'Industry & Tech' }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqsClient faqs={faqs} tabs={tabs} />
    </>
  );
}
