import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact Us | iGaming Hub — Get In Touch',
  description: 'Contact iGaming Hub to discuss your casino or sportsbook project. Offices in India, Dubai, and London. Available 24/7.',
  alternates: {
    canonical: 'https://igaminghub.sbs/contact-us',
  }
};

export default function ContactUs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "iGaming Hub",
    "image": "https://igaminghub.sbs/images/logo.png",
    "@id": "https://igaminghub.sbs/contact-us",
    "url": "https://igaminghub.sbs/contact-us",
    "telephone": "+918799372589",
    "email": "sales@igaminghub.sbs",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
