import { Container, MovieList, Movie } from "./styles"

import { ApiKey } from "../../config/key"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { Button } from "../../components/Button"


export function Home() {

    const [movies, setMovies] = useState([])
    const imagePath = `https://image.tmdb.org/t/p/w500`

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error(error))  
    })

    return (
        <Container>     
          <div className="header">
             <h1>High Movies</h1>
                <Link to={`/details/335787`}>
                      <Button/>  
                </Link>    
       
          </div>                   
            <MovieList>

            {movies.map(movie => {
                return (
                    <Movie key={movie.id}>
                 <Link to={`/details/${movie.id}`}>
                     <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                </Link>
                    <span>{movie.title}</span>
                    </Movie>
                )
            })}

                <Movie>
                    <a href="h">
                     <img src="https://filmdaily.co/wp-content/uploads/2022/03/spider-lede-7-691x1024.jpeg" alt="Spider Man" />
                    </a>
                    <span>Spider Man</span>
                </Movie>        
            </MovieList>
        </Container>
    )
}