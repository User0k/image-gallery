import { useState, useRef } from 'react';
import download from '../../helpers/download';
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
  const originHeight = parseInt(image.height, 10);
  const originWidth = parseInt(image.width, 10);

  const OPTIONS = [
    {
      size: 'small',
      width: 640,
    },
    {
      size: 'medium',
      width: 1080,
    },
    {
      size: 'large',
      width: 1920,
    },
    {
      size: 'original',
      width: originWidth,
    },
  ];

  const calcHeight = width => parseInt(originHeight * width / originWidth);
  const getDimensions = OPTIONS.reduce((dimension, option, index) => {
    if (option.width <= originWidth) {
      dimension.push(option);
      dimension[index].height = calcHeight(option.width);
    }

    return dimension;
  }, []);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(getDimensions.length - 1);

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
        <Button onClick={() => download(image.urls.full, image.id, getDimensions[selectedIndex].size, getDimensions[selectedIndex].width)}>Download {getDimensions[selectedIndex].size}</Button>
        <Button
          size="small"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
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
                  {getDimensions.map((dimension, index) => (
                    <MenuItem
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
