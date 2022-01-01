import React, {useState , useEffect} from 'react'
import axios from "./axios"
import "./row.css"

const baseURL = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl , isLargeRow }) {
    const [movies, setmovies] = useState([])
    

    useEffect(() => {
      const fetchData = async  () => {
          const request = await axios.get(fetchUrl)
          setmovies(request.data.results)
          return request
        };
        fetchData();
    }, [fetchUrl])

    return (
        <div className = "row">
            <h2 style={{ color: "white" }}>
                {title}
            </h2>
            
            <div className="row_posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${baseURL}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>

        </div>
    )
}

export default Row
