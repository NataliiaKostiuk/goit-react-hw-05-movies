
import { useEffect, useState,Suspense } from "react";
import toast from 'react-hot-toast';
import { Loader } from "Loader/loader";
import { fetchMovieById} from "components/ApiService";
import {  useParams, Outlet } from "react-router-dom";
import { MovieDetails } from "components/movieDetails/movieDetails";



export default function MovieDescription ()  {
    const [object, setData] = useState({});
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line
    const [error, setError] = useState(false);
    const params = useParams();
;

    useEffect(() => {
        async function getMovieById() {
         setError(false);
         setLoading(true);            
        try {
            const data = await fetchMovieById(params.movieId);
            toast.success('Successfully created!');
            setData(data);
        } catch (error) {
            toast.error(`This is an error!`);            
        } finally {
             setLoading(false);            
        }
        }
        getMovieById()
    }, [params.movieId])
    return (
        <>
            {loading && <Loader />}            
            <MovieDetails object={object} /> 
        <Suspense fallback={'LOADING ...'}>
      <Outlet />
    </Suspense>      
     </>
    )
}
