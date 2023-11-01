
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { fetchTrendingMovies } from "components/ApiService";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Loader } from "Loader/loader";



 export default function Home() {
    const [objects, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line
    const [error, setError] = useState(false);
    

    
    useEffect(() => {
        async function getMovies() {
            setError(false);
            setLoading(true);
            try {
                const data = await fetchTrendingMovies();
                toast.success('Successfully created!');
                setData([...data]);
            } catch (error) {
                console.log(error);
                toast.error(`This is an error!`)
            } finally {
                setLoading(false);
            }
        }
        getMovies()
    
    }, []);
    return (
        <div>
            {loading && <Loader />}
            <MoviesList objects={objects } />
            
   </div>
    )
}
