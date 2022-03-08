import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

function LikeButton({ id }) {
  const [liked, setLiked] = useState(localStorage.getItem(id) || false);

  const toggleLike = () => {
    if (localStorage.getItem(id)) {
      setLiked(false);
      localStorage.removeItem(id);
    } else {
      setLiked(true);
      localStorage.setItem(id, true);
    }
  };

  return (
    <Checkbox
      className='likeButton'
      icon={<FavoriteBorder
        sx={{ color: 'lightgrey', fontSize: 24 }}
      />}
      checkedIcon={<Favorite
        sx={{ fontSize: 24 }}
      />}
      color='error'
      checked={Boolean(liked)}
      onChange={toggleLike}
    />
  )
}

export default LikeButton;
