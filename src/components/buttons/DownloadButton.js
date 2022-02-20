import axios from 'axios';
import Button from '@mui/material/Button';

const download = (file, fileName) => {
  axios({
    url: file,
    method: 'GET',
    responseType: 'blob'
  })
  .then((response) => {
    const url = window.URL
    .createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${fileName}.jpg`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
};

function DownloadButton({ url, id }) {
  return (
    <Button
      variant="contained"
      sx={{mr: '1vw'}}
      onClick={() => download(url.full, id)}
    >
      download
    </Button>
  )
}

export default DownloadButton;
