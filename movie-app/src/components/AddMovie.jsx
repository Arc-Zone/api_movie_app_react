import {useContext, useState} from 'react'
import { AuthContext } from '../context/callApiContext.jsx'

const AddMovie = () => {
    const [movies, setMovies] = useContext(AuthContext)
    const [movie, setMovie] = useState({
        title : ''
    })
    
    console.log(movie)


    // const handleMovie = (e) => {
        
    //     setMovies([...movies, movie])
    //     setMovie({
    //         title : ''
    //     })
    // }


    return(
        <>
            <form  method='post' action='http://localhost:3000/api/movie/'>
                <label htmlFor="title"></label>
                <input type="text" placeholder='title' value={movie.title} onChange={e => setMovie({...movie, title : e.target.value})}  name='title'/>
                <label htmlFor="img_path"></label>
                <input type="text" placeholder='genre' value={movie.genre}  onChange={e => setMovie({...movie, genre : e.target.value})} name='img_path'/>
                <input type="submit" />
            </form>

        
        </>
    )
}

export default AddMovie