import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0.7em',
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
    transition: theme.transitions.create('width'),
  },
}));

export default StyledInputBase;
