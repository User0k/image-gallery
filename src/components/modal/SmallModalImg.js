import { styled } from '@mui/material/styles';

const SmallModalImg = styled('img')(({ theme }) => ({
  display: 'block',
  margin: '0 auto',
  objectFit: 'contain',
  [theme.breakpoints.down('sm')]: {
    height: '50vw',
  },
  [theme.breakpoints.up('sm')]: {
    height: '35vw',
  },
  width: 'auto',
  cursor: 'zoom-in',
}));

export default SmallModalImg;
