import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceContent(slug);

  return {
    title: `${service.title} | iGaming Hub Solutions`,
    description: service.subtitle.length > 155 ? service.subtitle.substring(0, 152) + '...' : service.subtitle,
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    alternates: {
      canonical: `https://igaminghub.sbs/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | iGaming Hub`,
      description: service.subtitle,
      url: `https://igaminghub.sbs/services/${slug}`,
      type: 'article',
      images: [service.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | iGaming Hub`,
      description: service.subtitle.length > 190 ? service.subtitle.substring(0, 187) + '...' : service.subtitle,
      images: [service.image],
    }
  };
}

function getServiceContent(slug) {
  try {
    const dataPath = path.join(process.cwd(), 'old-code', 'database', 'marketingContent.json');
    const content = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    let service = content[slug];
    
    if (!service) {
      service = {
        title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        subtitle: "A premium solution built by the team at iGaming Hub to scale your enterprise operations.",
        features: [
          "Enterprise Scalability",
          "Real-time Tracking & Analytics",
          "Next-generation Security"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      };
    }
    return service;
  } catch (err) {
    return {
      title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      subtitle: "A premium solution built by the team at iGaming Hub to scale your enterprise operations.",
      features: [],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    };
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceContent(slug);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg-primary-dark: #060e2b;
          --bg-secondary-dark: #09173f;
          --glass-border: rgba(255,255,255,0.08);
          --bg-card: rgba(255,255,255,0.04);
        }
        .marketing-body {
          background: #060e2b !important;
          color: #fff !important;
        }
        .glass-card {
          background: var(--bg-card) !important;
        }
        .benefit-chip {
          color: #fff !important;
        }
        .section-header-center h2 {
          color: #fff !important;
        }
      `}} />

      <section className="hero" style={{ backgroundImage: `linear-gradient(to bottom, rgba(2,2,5,0.4) 0%, var(--bg-primary-dark) 100%), url('${service.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', borderBottom: '1px solid var(--glass-border)', minHeight: '80vh' }}>
        <div className="hero-content fade-up" style={{ maxWidth: 1000 }}>
          <div className="breadcrumb" style={{ marginBottom: 30 }}>
            Home &nbsp;/&nbsp; Services &nbsp;/&nbsp; <span style={{ color: '#fff', fontWeight: 600, marginLeft: 6 }}>{service.title}</span>
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 24, lineHeight: 1.1, color: '#ffffff' }}>{service.title}</h1>
          <p className="hero-desc" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', maxWidth: 800, margin: '0 auto', lineHeight: 1.6 }}>{service.subtitle}</p>
          <div className="mt-30">
            <Link href="/login" className="btn-hero-primary glow-btn" style={{ padding: '18px 45px', fontSize: '1.1rem', marginTop: 20 }}>Start Building Today</Link>
            <Link href="/#contact" className="btn-hero-secondary" style={{ marginLeft: 15, padding: '18px 45px', fontSize: '1.1rem' }}>Request Demo</Link>
          </div>
        </div>
      </section>

      {service.benefits && service.benefits.length > 0 && (
        <section className="section" style={{ padding: '60px 0' }}>
          <div className="container">
            <div className="benefits-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: 15, justifyContent: 'center' }}>
              {service.benefits.map((benefit, i) => (
                <div key={i} className="benefit-chip" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', padding: '14px 24px', borderRadius: 50, display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 500, fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--blue)' }}>✔</span> {benefit}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.keyFeatures && service.keyFeatures.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-secondary-dark)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
          <div className="container">
            <div className="section-header-center" style={{ maxWidth: 800, margin: '0 auto 50px' }}>
              <h2 style={{ color: '#ffffff' }}>Core Features & Advantages</h2>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)' }}>We provide the enterprise-grade foundation necessary to scale your iGaming business efficiently and securely.</p>
            </div>
            
            <div className="dp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 30 }}>
              {service.keyFeatures.map((feature, i) => (
                <div key={i} className="f-card glass-card" style={{ padding: 30, borderRadius: 20, textAlign: 'left', transition: 'all 0.3s', borderColor: 'rgba(99, 102, 241, 0.2)' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0468e5', opacity: 0.9, marginBottom: 10, lineHeight: 1 }}>0{i + 1}</div>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: 16, color: '#ffffff' }}>{feature.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '1.05rem' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.modules && service.modules.length > 0 && (
        <section className="section">
          <div className="container">
            {service.modules.map((mod, index) => (
              <div key={index} className="zig-zag-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 120 }}>
                <div className="zz-text" style={{ order: index % 2 === 0 ? 1 : 2 }}>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: 24, lineHeight: 1.2, color: '#ffffff' }}>{mod.title}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', lineHeight: 1.8 }}>{mod.desc}</p>
                </div>
                <div className="zz-img" style={{ order: index % 2 === 0 ? 2 : 1 }}>
                  <div className={`glass-card mockup-glow${index % 2 === 0 ? '' : '-purple'}`} style={{ borderRadius: 24, padding: 10 }}>
                    <div style={{ background: `url('${mod.image}') center/cover`, height: 450, borderRadius: 16 }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section mid-cta" style={{ background: 'var(--bg-primary-dark)', paddingTop: 0 }}>
        <div className="container">
          <div className="cta-box glass-card" style={{ padding: '80px 40px', background: 'linear-gradient(to right, rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.05))', border: '1px solid #0468e5', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 4, background: 'var(--btn-grad)' }}></div>
            <h2 style={{ fontSize: '3rem', marginBottom: 20 }}>Ready to dominate the market?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', marginBottom: 40 }}>Get in touch with our commercial team to discuss licensing and rapid deployment for your <strong style={{ color: '#fff' }}>{service.title}</strong>.</p>
            <Link href="/login" className="btn btn-primary glow-btn" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>Contact Sales Director</Link>
          </div>
        </div>
      </section>
    </>
  );
}
