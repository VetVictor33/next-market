'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';

export default function ActionAreaCard({ item }) {
  const { src, name, description, price } = item;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Image src={src} alt={name} height={300} width={350} loading='eager' />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="caption" component="div">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}