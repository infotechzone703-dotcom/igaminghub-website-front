import MarketingNav from './components/MarketingNav';
import MarketingFooter from './components/MarketingFooter';
import '../public/css/style.css';
import '../public/css/marketing.css';

export const metadata = {
  title: 'iGaming Hub | Enterprise iGaming Software & Platform Provider',
  description: 'Launch your high-performance online casino or sportsbook with our turnkey iGaming platform. Secure, scalable software built for maximum player retention.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎮</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" />
      </head>
      <body className="marketing-body">
        <MarketingNav />
        {children}
        <MarketingFooter />
      </body>
    </html>
  );
}
