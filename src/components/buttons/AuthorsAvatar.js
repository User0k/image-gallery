import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

function AuthorsAvatar({ user }) {
  return (
    <IconButton
      sx={{pl: {xs: 0, sm: '12px'}}}
      size="large"
      href={user.links.html}
      target="_blank"
    >
      <Avatar
        alt={user.username}
        src={user.profile_image.small}
        sx={{ width: 30, height: 30 }}
      />
    </IconButton>
  );
}

export default AuthorsAvatar;
