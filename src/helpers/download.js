import axios from 'axios';

const download = (file, fileName, size, width) => {
  axios({
    url: `${file}&w=${width}`,
    method: 'GET',
    responseType: 'blob'
  })
  .then((response) => {
    const url = window.URL
    .createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${size}-${fileName}.jpg`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
};

export default download;
