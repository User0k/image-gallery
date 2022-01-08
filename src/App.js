import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import axios from 'axios';
import Gallery from './componenta/Gallery';
import Loading from './componenta/Loading';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFetching, setIsFetching] = useState(true);
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=fox&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=10`;

  const getTotalPages = () => {
    axios.get(url)
      .then(res => {
        setTotalPages(res.data.total_pages);
      });
  };

  useEffect(() => getTotalPages(), []);

  const getData = () => {
    if (isFetching && page <= totalPages) {
      axios.get(url)
        .then(res => {
          setImages([...images, ...res.data.results]);
          setPage(curPage => curPage + 1);
        })
        .finally(() => setIsFetching(false));
    }
  };

  useEffect(() => getData(), [isFetching]);

  function handleScroll(e) {
    const {scrollHeight, scrollTop, clientHeight} = e.target.scrollingElement;
    const isBottom = scrollHeight - scrollTop <= clientHeight + 1300;
    if (isBottom && page <= totalPages) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <Gallery images={images}/>
      <div>
        {isFetching && <Loading />}
      </div>
    </Container>
  );
}

export default App;
