import React from 'react';
import Masonry from 'react-masonry-css';
import { ImageListItem, ImageListItemBar, IconButton, Avatar } from '@mui/material';

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
          <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={image.user.username}
              subtitle={image.description ?? 'Unnamed picture'}
              actionIcon={
                <IconButton
                  size="large"
                  href={`${image.user.links.html}`}
                  target="_blank"
                  >
                  <Avatar
                    alt={`${image.user.username}`}
                    src={`${image.user.profile_image.small}`}
                    sx={{ width: 30, height: 30 }}
                  />
                </IconButton>
              }
              actionPosition="left"
            />
        </ImageListItem>
      ))}
    </Masonry>
  )
}

export default Gallery;
