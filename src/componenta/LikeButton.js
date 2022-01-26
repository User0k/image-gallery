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
      icon={<FavoriteBorder/>}
      checkedIcon={<Favorite/>}
      sx={{ position: "absolute", top: 0, left: 0, color: "lightgrey" }}
      color='error'
      checked={Boolean(liked)}
      onChange={toggleLike}
    />
  )
}

export default LikeButton;
