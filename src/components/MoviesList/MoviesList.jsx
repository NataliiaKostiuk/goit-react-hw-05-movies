import { Link } from "react-router-dom";
import { List,Img } from "./MoviesList.styled";
import { imageValidation } from '../validImage';
import { nanoid } from "nanoid";
export const MoviesList = ({objects}) => {
    return (
         <List>
            {objects.map(({ id, title, poster_path }) => {
            
           return (
              <li key={nanoid()}>
                   <Link to={`/movies/${id}`}>
                       <Img src={imageValidation(poster_path, 300)} alt={title} />
                 </Link>
              </li>)
            })} 
    </List>
    )
}