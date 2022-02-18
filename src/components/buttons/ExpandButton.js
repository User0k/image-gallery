import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import Modal from '@mui/material/Modal';
import DialogContent from '@mui/material/DialogContent';
import ModalContent from '../modal/ModalContent';

function ExpandButton({ description, url }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='expandButton'>
      <IconButton onClick={handleOpen}>
        <FitScreenIcon sx={{ color: "lightgrey" }}/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <ModalContent description={description} url={url}/>
        </DialogContent>
      </Modal>
    </div>
  )
}

export default ExpandButton;