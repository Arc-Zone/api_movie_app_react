import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AuthContext } from "../context/callApiContext.jsx"
import { Link } from 'react-router-dom'
import '../App.css'


function Movie () {
    const [search , setSearch, movie , setMovie ] = useContext(AuthContext)
    let {movieId} = useParams();

    console.log(movieId)
    // const [movie, setMovie] = useState({}) 

    const fetchMovie = async () => {

        try {
            const response = await axios.get(`http://localhost:3000/api/movie/${movieId}`)
            console.log(response)
            setMovie(response.data)
            console.log(movie)
        } catch (err) {
            console.error(err)

        } finally {

        }
    }


    useEffect(() => {
    fetchMovie()
}, [])

    return(
        <>
        
        <Link to="/"><span className="back">Retour</span></Link>
        <div className="one-movie">
        <h1>{movie.title}</h1>
        <p className='hover-card'>{movie.overview}</p>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title}`} />
        </div>
        
        </>
    )
}

export default Movie 