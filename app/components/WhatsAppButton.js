import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '447988587771';
  const prewrittenText = 'Hello! I am interested in your iGaming solutions.';
  const encodedText = encodeURIComponent(prewrittenText);
  // Using wa.me for the deep link
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          zIndex: 9999,
          transition: 'all 0.3s ease',
        }}
        className="whatsapp-float-btn"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="35"
          height="35"
          fill="currentColor"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.8c-33 0-65.4-8.9-94-25.5l-6.7-4-69.8 18.3L72 334.8l-4.4-7c-18.3-29.1-27.9-63-27.9-98.2 0-103.5 84.3-187.8 187.9-187.8 55.2 0 107.1 21.5 146.1 60.5 39 39 60.5 90.9 60.5 146.2 0 103.6-84.4 187.9-188 187.9zm103.4-141.5c-5.7-2.8-33.5-16.5-38.7-18.4-5.2-1.9-9-2.8-12.8 2.8-3.8 5.7-14.7 18.4-18 22.2-3.3 3.8-6.6 4.3-12.3 1.4-5.7-2.8-23.9-8.8-45.5-28.1-16.8-15-28.1-33.6-31.4-39.3-3.3-5.7-.3-8.8 2.5-11.6 2.5-2.5 5.7-6.6 8.5-9.9 2.8-3.3 3.8-5.7 5.7-9.5 1.9-3.8.9-7.1-.5-9.9-1.4-2.8-12.8-30.8-17.5-42.2-4.6-11.2-9.3-9.7-12.8-9.9-3.3-.2-7.1-.2-10.9-.2-3.8 0-9.9 1.4-15.1 7.1-5.2 5.7-20 19.4-20 47.4 0 28 20.4 55 23.2 58.8 2.8 3.8 40.1 61.3 97.4 86 13.6 5.8 24.3 9.3 32.6 11.9 13.7 4.3 26.2 3.7 36 2.2 11-1.7 33.5-13.7 38.2-27 4.7-13.3 4.7-24.6 3.3-27-1.4-2.5-5.2-3.9-10.9-6.7z" />
        </svg>
      </a>
      <style>{`
        .whatsapp-float-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
