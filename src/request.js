const API_KEY = "313d67ca6eba424dab80c73b1a744a17"

const request = {
 
    fetchTrending: `trending/all/week?api_key=${API_KEY}`,
    fetchToprated : `movie/top_rated?api_key=${API_KEY}`,
    fetchNetflixoriginal: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchRomance: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchAction: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`
  
}

export default request