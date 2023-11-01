import { LinkBack } from "components/LinkBack/LinkBack";
import { imageValidation } from "components/validImage";
import { Outlet,useLocation } from "react-router-dom";
import { Suspense,useRef } from "react";
import { Container, WrapLink,BtnLink } from "./movieDetails.styled";
export const MovieDetails = ({ object }) => {
     const location = useLocation();

     const backLinkLocationRef = useRef(location.state?.from ?? '/movies')
    const { poster_path, title,id, name, original_title, overview, genres,vote_average } = object;
    const getGenres = (genres) => {
       if (genres=== undefined) {
        return
       } 
        return genres.map(el => el.name).join(' | '); 
    }
    return (<>
         <LinkBack to= {backLinkLocationRef.current}/>
        <Container>
            <img src={imageValidation(poster_path, 200)} alt={title} />
            <div>
            <h2>{title || name || original_title}</h2>
            <p> User Score: {Math.trunc(vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
                <p>{getGenres(genres) }</p>
            </div>
        </Container>
             <WrapLink>
            <BtnLink to={`/movies/${id}/cast`}state={{ from: location }}>Cast</BtnLink>
            <BtnLink to={`/movies/${id}/review`}state={{ from: location }} >Review</BtnLink> 
            </WrapLink>
    <Suspense>
         <Outlet />
    </Suspense>
    </>    
    )
}

