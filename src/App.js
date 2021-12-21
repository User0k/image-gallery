import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import Gallery from './componenta/Gallery';

function App() {
  const [images, setImages] = useState([]);
  const url = `https://api.unsplash.com/search/photos?page=1&query=fox&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=20`;

  const getData = () => {
    axios.get(url)
      .then(res => {
        setImages(res.data.results);
      });
  };

  useEffect(() => getData());

  return (
    <Container>
      <Gallery images={images}/>
    </Container>
  );
}

export default App;
