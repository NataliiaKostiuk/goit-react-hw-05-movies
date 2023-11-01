import { Link } from "react-router-dom";
import { List,Img } from "./MoviesList.styled";
import { imageValidation } from '../validImage';
import { nanoid } from "nanoid";
import { useLocation } from "react-router-dom";

export const MoviesList = ({ objects }) => {
    const location = useLocation();
    return (
         <List>
            {objects.map(({ id, title, poster_path }) => {
            
           return (
              <li key={nanoid()}>
                   <Link to={`/movies/${id}`} state={{ from: location }}>
                       <Img src={imageValidation(poster_path, 300)} alt={title} />
                 </Link>
              </li>)
            })} 
    </List>
    )
}