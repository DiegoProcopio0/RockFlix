import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ApiKey } from "../../config/key"
import { Container } from "./style";


export function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);
  const imagePath = `https://image.tmdb.org/t/p/w500`


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>  { 
      const movie = {
      id,
      title: data.title,
      sinopse: data.overview,
      image: `${imagePath}${data.poster_path}`,
      releaseDate: data.release_date

    } 
    console.log(movie)
    setMovie(movie)
    }
    )
  }, [id]);

  return ( 
   <Container>
     <div className="movie">
       <img src={movie.image} alt={movie.sinopse}/>
       <div className="details">
         <h1>{movie.title}</h1>
         <span>Sinopse: {movie.sinopse}</span>
         <span className="release-date">Release Date: {movie.releaseDate}</span>
         <Link to={`/`}>
         <button>Go Home Page</button>
         </Link>
         <Link to={`/find-movie`} >
         <button>Go Find Movie</button>
         </Link>
       </div>
     </div>

   </Container>
  )
}
