import React from 'react';
import Masonry from 'react-masonry-css';
import { ImageListItem } from '@mui/material';

function Gallery({ images }) {
  const breakpoints = {
    default: 3,
    1100: 2,
    750: 1
  }

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
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
    </Masonry>
  )
}

export default Gallery;
