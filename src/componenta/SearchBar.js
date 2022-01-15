import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

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

const SearchIconWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'inline-flex',
  },
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  alignItems: 'center',
  justifyContent: 'center',
}));

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

export default function SearchBar() {
  return (
    <AppBar sx={{ backgroundColor: 'black' }}>
      <Toolbar>
          <CameraEnhanceIcon
            sx={{ display: { md: 'inline-block', sm: 'none', xs: 'none' }, mr: 3.3, color: 'white' }}
            fontSize="large"
          />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search images"
            inputProps={{ 'aria-label': 'search images' }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Button
            sx={{ display: { sm: 'inline-flex', xs: 'none' } }}
            variant="contained"
            size='small'
            type="submit"
            aria-label="search">
              search
          </Button>
          <IconButton
            sx={{ display: { sm: 'none', xs: 'inline-flex' }, color: 'lightgrey' }}
            type="submit"
          >
            <SearchIcon />
          </IconButton>
        </Search>
      </Toolbar>
    </AppBar>
  );
}
