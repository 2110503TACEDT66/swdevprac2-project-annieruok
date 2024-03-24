'use client'
import Image from 'next/image'
import InterActiveCard from './InteractiveCard'
import { Rating } from '@mui/material'
import { useState } from 'react';

export default function Card({hospitalName, imgsrc, star, onCompare, onRemove }: { 
  hospitalName: string; imgsrc: string; star: number; onCompare?: (hospitalName: string, rating: number) => void;onRemove?: (hospitalName: string, rating: number) => void;}) {
  const [rating, setRating] = useState(star)

  const handleRatingChange = (event: React.SyntheticEvent, newRating: number | null) => {
    const newStar = newRating === null ? 0 : newRating ?? rating
    setRating(newStar)
    onCompare?onCompare(hospitalName, newStar):""
  }
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?onRemove(hospitalName,rating):""
  };

  return (
    <div onClick={handleCardClick}>
    <InterActiveCard contentName={hospitalName}>
      <div className='w-full h-[70%] relative rounded-t-lg'>
        <Image src={imgsrc} alt='Hospital Picture' layout='fill' className='object-cover rounded-t-lg' />
      </div>
      <div className='w-full h-[15%] p-[10px]'>
        {hospitalName}
      </div>
      <Rating
        id={`${hospitalName} Rating`}
        name={`${hospitalName} Rating`}
        data-testid={`${hospitalName} Rating`}
        value={rating}
        onChange={handleRatingChange}
        precision={0.5}
        onClick={(e) => e.stopPropagation()}
      />
    </InterActiveCard>
    </div>
  );
}
