import { forwardRef } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const PublishedOn = forwardRef(({ parsedDate }, ref) => {
  const date = new Date(parsedDate);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <Stack
      sx={{mb: 1}}
      direction='row'
      alignItems='center'
      spacing={1} color='#777777'
    >
      <ContentPasteIcon sx={{ fontSize: 16 }}/>
      <Typography ref={ref} variant='body2' gutterBottom component='div'>
        Published on {date.toLocaleString('en-US', options)}
      </Typography>
    </Stack>
  )
})

export default PublishedOn;
