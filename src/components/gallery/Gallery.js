import Masonry from 'react-masonry-css';
import { styled } from '@mui/material/styles';
import ImageListItem from '@mui/material/ImageListItem';
import ImageBar from './ImageBar';
import LikeButton from '../buttons/LikeButton';

const MasonryGrid = styled(Masonry)(({ theme }) => ({
  display: 'flex',
  width: 'auto',
  marginTop: '80px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '72px',
  },
}));

export default function Gallery({ images }) {
  const breakpoints = {
    default: 3,
    1100: 2,
    750: 1
  }

  return (
    <MasonryGrid
      breakpointCols={breakpoints}
      columnClassName="masonry-grid_column"
    >
      {images.map(image => (
        <ImageListItem key={image.id} sx={{':hover': {'& .MuiImageListItemBar-root, & .likeButton': {display: 'flex'}}}}>
          <img
            src={image.urls.regular}
            srcSet={image.urls.regular}
            alt={image.alt_description}
            loading="lazy"
          />
          <LikeButton id={image.id}/>
          <ImageBar image={image}/>
        </ImageListItem>
      ))}
    </MasonryGrid>
  )
}
