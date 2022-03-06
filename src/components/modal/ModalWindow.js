import { useState, forwardRef } from 'react';
import StyledModalWindow from './StyledModalWindow';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import AuthorsAvatar from '../buttons/AuthorsAvatar';
import SmallModalImg from './SmallModalImg';
import LargeModalImg from './LargeModalImg';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PublishedOn from './PublishedOn';
import DownloadGroup from '../buttons/DownloadGroup';

const ModalWindow = forwardRef(({ image, close }, ref) => {
  const [enlarge, setEnlarge] = useState(false);

  return (
    <StyledModalWindow ref={ref}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <CardHeader
          sx={{padding: '8px'}}
          avatar={<AuthorsAvatar user={image.user}/>}
          title={image.user.name}
          subheader={<Typography variant='caption'>@{image.user.username}</Typography>}
        />
        <Stack direction={'row'} alignItems={'center'}>
          <DownloadGroup image={image}/>
          <IconButton sx={{alignSelf: 'start'}} size="large" onClick={close}>
            <CloseIcon/>
          </IconButton>
        </Stack>
      </Stack>
      {
        !enlarge ?
        <SmallModalImg
          onClick={() => setEnlarge(true)}
          src={image.urls.regular}
          alt={image.description}
        /> :
        <LargeModalImg
          onClick={() => setEnlarge(false)}
          src={image.urls.regular}
          alt={image.urls.description}
        />
      }
      <PublishedOn parsedDate={image.created_at}/>
    </StyledModalWindow>
  )
})

export default ModalWindow;
