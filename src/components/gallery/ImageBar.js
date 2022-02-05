import ImageListItemBar from '@mui/material/ImageListItemBar';
import AuthorsAvatar from '../buttons/AuthorsAvatar';

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
      actionIcon={<AuthorsAvatar user={user} />}
      actionPosition="left"
    />
  )
}

export default ImageBar;
