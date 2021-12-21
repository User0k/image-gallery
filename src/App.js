import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import Gallery from './componenta/Gallery';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=fox&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=20`;

  const getTotalPages = () => {
    axios.get(url)
      .then(res => {
        setTotalPages(res.data.total_pages);
      });
  };

  useEffect(() => getTotalPages(), []);

  const getData = () => {
    axios.get(url)
      .then(res => {
        setImages([...images, ...res.data.results]);
        setPage(curPage => curPage + 1);
      });
  };

  useEffect(() => getData(), []);

  return (
    <Container>
      <Gallery images={images}/>
    </Container>
  );
}

export default App;
