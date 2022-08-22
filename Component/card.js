import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  styles from '../styles/Card.module.css';
import Link from 'next/link';

export default function ImgMediaCard({ id, name, species , image, location }) {

  return (
    <Link href={`/Ricks/${id}`}>
      <Card sx={{ maxWidth: 300 }} className = {styles.card}  >
        <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <CardMedia
              component="img"
              alt="NFT Rick"
              height="200"
              image={image}
                />
              <Typography variant="body2" color="text.primary">
                {location} 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {species} 
              </Typography> 
            </CardContent>
      </Card> 
    </Link>   
  );
}