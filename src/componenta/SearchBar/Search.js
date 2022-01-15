import { styled, alpha } from '@mui/material/styles';

const Search = styled('form')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

export default Search;
