// Imagen.tsx

import React from 'react';

interface ImagenProps {
  src: string;
  alt: string;
}

const Background: React.FC<ImagenProps> = ({ src, alt }) => {
  const imagenStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1, 
  };

  return <img src={src} alt={alt} style={imagenStyle} />;
}

export default Background;
