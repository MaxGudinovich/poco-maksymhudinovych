import React from 'react';

const PhotoCard = ({ className, src, onClick }) => {
  return <img src={src} alt="person" className={className} onClick={onClick} />;
};

export default PhotoCard;
