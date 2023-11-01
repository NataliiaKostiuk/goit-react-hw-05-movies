import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { fetchMovieCasts } from "components/ApiService";
import { useParams } from "react-router-dom";
import { Loader } from "Loader/loader";
import { imageValidation } from "components/validImage";
import { nanoid } from 'nanoid';
import { List,Item, Img, StyledText, NoResult } from './cast.styled';

 
export const Cast = () => {
     const params = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line
    const [error, setError] = useState(false);
  
    useEffect(() => {
        async function getMoviesCast() {
           setError(false);
           setLoading(true);
          try {
              const data = await fetchMovieCasts(params.movieId);
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
          {data.map(el => {
            return (
              <Item key={nanoid()}>
                <Img src={imageValidation(el.profile_path, 200)} />
                <StyledText>{el.name}</StyledText>
                <StyledText>Character: {el.character}</StyledText>
              </Item>
            );
          })}
        </List>
      )}
    </div>
  );
} 
