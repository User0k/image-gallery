import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import axios from 'axios';
import Gallery from './components/gallery';
import Loading from './components/Loading';
import SearchBar from './components/search-bar';
import NothingFound from './components/NothingFound';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState('fox');
  const [hitSubmit, setHitSubmit] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=10`;

  const getTotalPages = () => {
    axios.get(url)
      .then(res => {
        setTotalPages(res.data.total_pages);
      });
  };

  useEffect(() => getTotalPages(), [hitSubmit]);

  const getData = () => {
    if (isFetching && page <= totalPages) {
      axios.get(url)
        .then(res => {
          setImages([...images, ...res.data.results]);
          setPage(curPage => curPage + 1);
        })
        .finally(() => setIsFetching(false));
    } else if (hitSubmit){
        setHitSubmit(false);
        axios.get(url)
          .then(res => setImages(res.data.results));
    }
  };

  useEffect(() => getData(), [isFetching, hitSubmit]);

  const handleInput = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setHitSubmit(true);
  }

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
    <>
      <SearchBar handleInput={handleInput} handleSubmit={handleSubmit}/>
      <Container>
        <Gallery images={images}/>
        {images.length === 0 && !isFetching && <NothingFound />}
        <div>
          {isFetching && <Loading />}
        </div>
      </Container>
    </>
  );
}

export default App;
