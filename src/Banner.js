import React, {useState , useEffect} from 'react'
import axios from "./axios";
import requests from "./request";
import "./banner.css";


function Banner() {
   const [movies , setmovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchTrending)
            setmovies(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request
       }
       fetchData()
    }, [])


    const truncate = (str ,n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage:`url(
                    "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
                )`,
                backgroundPosition:"center top"
          }}
        >

            <div className="banner_contents">
                <h1>
                 {movies?.title || movies?.name || movies?.original_name}   
                </h1>
                
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h1 className="banner_description">
                    {truncate(movies?.overview , 200)}
                </h1>

               
            </div>
 <div className="banner_fadebottom"></div> 
        </header>
    )
}

export default Banner
