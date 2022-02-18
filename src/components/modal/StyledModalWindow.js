import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

const StyledModalWindow = styled(Card)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  maxHeight: 'calc(90vh - 10px)',
  width: '90vw',
  [theme.breakpoints.down('md')]: {
    width: '95vw',
  },
  overflowY: 'auto',
}));

export default StyledModalWindow;
