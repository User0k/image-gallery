import { useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Search from './Search';
import SearchIconWrapper from './SearchIconWrapper';
import StyledInputBase from './StyledInputBase';

export default function SearchBar({ setQuery, setPage, setHitSubmit, query }) {
  const input = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    setQuery(input.current.children[0].value);
    setPage(1);
    setHitSubmit(true);
    localStorage.setItem('searchValue', query);
    input.current.children[0].value = '';
  }

  return (
    <AppBar sx={{ backgroundColor: 'black' }}>
      <Toolbar>
          <CameraEnhanceIcon
            sx={{ display: { md: 'inline-block', sm: 'none', xs: 'none' }, mr: 3.3, color: 'white' }}
            fontSize="large"
          />
        <Search onSubmit={handleSubmit}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            ref={input}
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
