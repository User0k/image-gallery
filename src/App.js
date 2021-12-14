import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import Gallery from './componenta/Gallery';

function App() {
  const [images, setImages] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=fox&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=25`
    );
    const dataRes = await res.data;
    setImages(dataRes.results);
  };

  useEffect(() => getData());

  return (
    <Container>
      <Gallery images={images}/>
    </Container>
  );
}

export default App;
