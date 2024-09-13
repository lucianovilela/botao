import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ShareButtons = ({ url, text }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  return (
    <div className="flex space-x-4">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full"
        aria-label="Share on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      </a>

      {/* Instagram (não tem compartilhamento direto de links) */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full"
        aria-label="Share on Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full"
        aria-label="Share on Facebook"
      >
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </a>

      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full"
        aria-label="Share on Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
    </div>
  );
};

export default ShareButtons;
