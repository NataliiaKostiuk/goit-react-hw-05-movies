import { useEffect, useState } from "react";
import { fetchMovieReviews } from "components/ApiService";
import { useParams } from "react-router-dom";
import toast from 'react-hot-toast';
import { Loader } from "Loader/loader";
import { nanoid } from 'nanoid';
import { List,ListItem,Img,Name,Container,NoResult } from './review.styled';

export const Review = () => {
      const params = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line
    const [error, setError] = useState(false);
    
     useEffect(() => {
        async function getMoviesCast() {
           setError(false);
           setLoading(true);
          try {
              const data = await fetchMovieReviews(params.movieId);
              toast.success('Successfully created!');
              setData( [...data]);
          } catch (error) {
              console.log(error);
            toast.error(`This is an error!`)
          } finally {
              setLoading(false);
        }
      }
      getMoviesCast()
    
    }, [params.movieId])
    return (
         <div>
     {loading && <Loader />}
      {data !== null && (
        <List>
          {data.length === 0 && <NoResult>Sorry, no result</NoResult>}
          {data.map(el => (
            <ListItem key={nanoid()}>
              <Container>
                <Img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                <Name>{el.author}</Name>
              </Container>
              <Name>{el.content}</Name>
            </ListItem>
          ))}
        </List>
      )}
    </div>
    )
}
 
