import { useState, forwardRef } from 'react';
import StyledModalWindow from './StyledModalWindow';
import PublishedOn from './PublishedOn';
import DownloadGroup from '../buttons/DownloadGroup';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import AuthorsAvatar from '../buttons/AuthorsAvatar';
import SmallModalImg from './SmallModalImg';
import LargeModalImg from './LargeModalImg';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';

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
      <Box sx={{p: 2}}>
        <PublishedOn sx={{justifySelf: 'center'}} parsedDate={image.created_at}/>
        <Stack direction="row" spacing={1}>
          <Typography variant='subtitle2' component='div' alignSelf={'center'} color='#777777'>
            Related tags
          </Typography>
          {image.tags.map(tag => {
            return <Chip key={tag.title} label={tag.title}/>
          })}
        </Stack>
      </Box>
    </StyledModalWindow>
  )
})

export default ModalWindow;
