import { useState, useRef } from 'react';
import download from '../../helpers/download';
import downloadOptions from '../../helpers/downloadOptions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

function DownloadGroup({ image }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(downloadOptions(image).length - 1);
  const [downloadSize, downloadWidth] = [downloadOptions(image)[selectedIndex].size, downloadOptions(image)[selectedIndex].width];

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ButtonGroup variant="contained" ref={anchorRef}>
        <Button
          sx={{
            fontSize: {lg: '0.8rem', md: '0.7rem', xs: '0.6rem'},
            padding: {md: '4px 10px', xs: '2px 10px'},
          }}
          size="small"
          onClick={() => download(image.urls.full, image.id, downloadSize, downloadWidth)}>
          Download {downloadSize}
        </Button>
        <Button
          sx={{ padding: {md: '6 16px', xs: '5px'} }}
          onClick={handleToggle}
        >
          <ArrowDropDownIcon/>
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {downloadOptions(image).map((dimension, index) => (
                    <MenuItem
                      sx={{
                        fontSize: {lg: '1rem', xs: '0.9rem'},
                        minHeight: '2rem',
                      }}
                      key={dimension.size}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {dimension.size} ({dimension.width}x{dimension.height})
                    </MenuItem>
                ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default DownloadGroup;
