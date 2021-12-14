import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';

function Gallery({ images }) {
  return (
    <ImageList cols={3}>
      {images.map(image => (
        <ImageListItem key={image.id}>
          <img
            src={image.urls.regular}
            srcSet={image.urls.regular}
            alt={image.alt_description}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default Gallery;
