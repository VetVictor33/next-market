'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import PlaceHolder from '@/public/assets/food/black-bean.jpg'
import DeleteDialog from '../DeleteDialog/DeleteDialog';

export default function ActionAreaCard({ item, removeProducts }) {
  const { id, src, altSrc, name, description, storage, price } = item;
  const handleDeletation = () => {
    removeProducts(id);
  }

  return (
    <Card className='card'>
      <CardActionArea>
        <Image src={src || PlaceHolder} alt={altSrc} style={{ width: '100%', height: '100%' }} loading='eager' />
        <CardContent>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {storage}un
            </Typography>
          </div>
          <Typography variant="caption" component="div">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <DeleteDialog confirm={handleDeletation} />
    </Card>
  );
}