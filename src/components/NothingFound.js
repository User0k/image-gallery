import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const NotFoundWrapper = styled('div')(({ theme }) => ({
  maxWidth: '70vw',
  height: '85vh',
  margin: theme.spacing(0, 'auto'),
}));

const NotFoundImage = styled('img')(() => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  filter: 'grayscale(0.5) brightness(0.4)',
}));

const NotFoundTextHeader = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: 'calc(5vw + 90px)',
  right: '50%',
  transform: 'translateX(50%) rotate(-1deg)',
  color: '#fff',
  textTransform: 'uppercase',
  textShadow:
    '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff',
  [theme.breakpoints.down('md')]: {
    fontSize: '5vw',
  },
}));

export default function NothingFound() {
  return (
    <NotFoundWrapper>
      <NotFoundImage
        src="https://source.unsplash.com/random/1920x1080/?nature"
        alt="nothing found"
      />
      <NotFoundTextHeader variant="h3">Nothing found :(</NotFoundTextHeader>
    </NotFoundWrapper>
  );
}
