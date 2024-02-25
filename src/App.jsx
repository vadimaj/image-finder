import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import { getImages, IMG_PER_PAGE as imagesPerPage } from './helpers/pixabayAPI';
import Button from './components/Button';
import Loader from './components/Loader';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);

  const isEndOfCollection = page === Math.ceil(totalHits / imagesPerPage);

  useEffect(
    function () {
      if (query === '') return;
      setIsLoading(true);
      async function fetchData() {
        const fetchRes = await getImages(query, page);
        if (!fetchRes.totalHits) {
          toast.info('No images was found');
        }
        setImages((prevState) => [...prevState, ...fetchRes.hits]);
        console.log(fetchRes.hits);
        setTotalHits(fetchRes.totalHits);
        if (isEndOfCollection) toast.info('No more items to display');
        setIsLoading(false);
      }
      fetchData();
    },
    [query, page, isEndOfCollection]
  );

  const handleSearch = (searchQuery) => {
    setImages([]);
    setQuery(searchQuery);
    setPage(1);
  };

  const handleAddMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} />
      {!!images.length && !isEndOfCollection && (
        <Button onLoadMore={handleAddMore} />
      )}
      {isLoading && <Loader />}

      <ToastContainer />
    </>
  );
}

export default App;
