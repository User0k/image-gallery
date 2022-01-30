import React from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

function ImageBar({ image: {description, user} }) {
  return (
    <ImageListItemBar
      sx={{
        display: 'none',
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)',
      }}
      title={user.username}
      subtitle={description ?? 'Unnamed picture'}
      actionIcon={
        <IconButton
          size="large"
          href={`${user.links.html}`}
          target="_blank"
        >
          <Avatar
            alt={`${user.username}`}
            src={`${user.profile_image.small}`}
            sx={{ width: 30, height: 30 }}
          />
        </IconButton>
      }
      actionPosition="left"
    />
  )
}

export default ImageBar;
