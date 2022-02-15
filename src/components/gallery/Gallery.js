import Masonry from 'react-masonry-css';
import { styled } from '@mui/material/styles';
import ImageListItem from '@mui/material/ImageListItem';
import ImageBar from './ImageBar';
import Stack from '@mui/material/Stack';
import LikeButton from '../buttons/LikeButton';
import ExpandButton from '../buttons/ExpandButton';

const MasonryGrid = styled(Masonry)(({ theme }) => ({
  display: 'flex',
  width: 'auto',
  marginTop: '80px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '72px',
  },
}));

const TopItemBar = styled(Stack)(() => ({
  display: 'none',
  position: 'absolute',
  top: 2, left: '50%',
  transform: 'translateX(-50%)',
  width: '98%',
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
        <ImageListItem
          key={image.id}
          sx={{
            ':hover': {
              '& .MuiImageListItemBar-root, & .topItemBar': {
                display: 'flex',
                justifyContent: 'space-between'
          }}}}
        >
          <img
            src={image.urls.regular}
            srcSet={image.urls.regular}
            alt={image.alt_description}
            loading="lazy"
          />
          <TopItemBar className='topItemBar' direction="row">
            <LikeButton id={image.id}/>
            <ExpandButton description={image.description} url={image.urls}/>
          </TopItemBar>
          <ImageBar image={image}/>
        </ImageListItem>
      ))}
    </MasonryGrid>
  )
}
