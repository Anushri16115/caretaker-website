import React, { useState, useEffect } from 'react';
import '../styles/Image.css';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageWithFallbackProps> = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState('/placeholder-image.png'); // Default to placeholder
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    img.onerror = () => {
      // Keep placeholder if there's an error
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={`image-container ${className || ''} ${isLoading ? 'loading' : ''}`}>
      {isLoading && <div className="spinner"></div>}
      <img src={imageSrc} alt={alt} style={{ visibility: isLoading ? 'hidden' : 'visible' }} />
    </div>
  );
};

export default Image;
