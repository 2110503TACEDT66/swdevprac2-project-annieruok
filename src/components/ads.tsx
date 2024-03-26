'use client'
import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/close'

const imageList = [
  '/img/b1.jpg',
   
  '/img/b4.jpg', // Assuming the image is located at public/img/b2.jpg
  '/img/b5.jpg',
   // Assuming the image is located at public/img/b3.jpg
  // Add more image paths as needed
];

export default function AdBlock() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % imageList.length
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '630px', // Set this to 0 or another value if you want the ad at the very top
      left: '1px', // Set this to 0 for the ad to stick to the left side
      width: '300px',
      height: '390px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid black',
      backgroundColor: '#fff',
      zIndex: 1000,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    }}>
      <IconButton 
        onClick={handleClose} 
        style={{ 
          position: 'absolute', 
          top: '0',
          right: '0',
          color: 'black',
          background: 'white',
          borderRadius: '50%',
        }}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <img 
        src={imageList[currentImageIndex]} 
        alt="Ad content"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}