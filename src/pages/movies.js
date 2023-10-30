

import { LoadMoreBtn } from 'components/BtnLoadMore/BtnLoadMore';
import { MoviesList } from 'components/MoviesList/MoviesList';
import toast from 'react-hot-toast';
import { Loader } from 'Loader/loader';
import { SearchMovies } from '../components/searchMovies/searchMovies';
import { Suspense, useState,useEffect } from 'react';
import {  useSearchParams ,Outlet} from 'react-router-dom';
import { fetchMoviesByKeyword } from '../components/ApiService';

export default function Movies () {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(false);
 const [params, setParams] = useSearchParams();

   const search = params.get('query') ?? '';
   console.log(search);


  const handleSubmit = value => {
    params.set('query', value);
    setParams(params);
     setQuery(value);
    if (query === value) {
      return;
    } else {
      setData([]);
      setPage(1)
    }
  }
  
  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    setQuery(search);
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

    useEffect(() => {
    async function getMovieByKeyword() {
      setError(false);
      setLoading(true);
      console.log(query);
      try {
        const data = await fetchMoviesByKeyword(query ,page);
        toast.success('Successfully created!');
        setData(prevState => [...prevState, ...data]);
        setTotalPage(Math.ceil(data.totalHits / 12));
      } catch (error) {
        toast.error(`This is an error!`);
      } finally {
        setLoading(false);
      }
    }
    getMovieByKeyword()
  }, [query ,page]);
 
  return (
    <> 
      <SearchMovies handleSubmit={handleSubmit}
      />
        {loading && <Loader />}
      <MoviesList objects={data} />
       {data.length > 0 && page !== totalPage &&
     (<LoadMoreBtn onClick={handleClick} />)}
    <Suspense>
     <Outlet />
    </Suspense>

    </>
  );
};


