import './App.css'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddMovie from './components/AddMovie.jsx'
import { AuthContext } from './context/callApiContext.jsx' 


function App() {
  

  const [hoverState , setHoverState] = useState({})

  const [movies, setMovies , search , setSearch,handleSubmit] = useContext(AuthContext)
  
  console.log(movies)
  const handleMouseEnter = (movieId) => {
    setHoverState(prevState => ({ ...prevState, [movieId]: true }));
  }
  
  const handleMouseLeave = (movieId) => {
    setHoverState(prevState => ({ ...prevState, [movieId]: false }));
  }


  return (
    <>
      <form action=""   onInput={handleSubmit} className='contain-input-search'>
        <input type="text" onChange={e => setSearch(e.target.value)}  placeholder='Rechercher'/>
      </form>
      <AddMovie/>
      <div className='contain-movie'>
          {movies.map(movie => (
            
              <div 
                key={movie.id} 
                className='card-movie' 
                onMouseEnter={() => handleMouseEnter(movie.id)}
                onMouseLeave={() => handleMouseLeave(movie.id)}
              > 
                <Link to={`/movie/${movie.id}`}>  <h1>{movie.title}</h1>  </Link>
                {hoverState[movie.id] && <p className='hover-card'>{movie.overview}</p>}
                <Link to={`/movie/${movie.id}`}>
                <img src={`${movie.image_path}`} alt={`${movie.title}`} />
                </Link>
              </div>
          
          ))}
      </div>
  
    </>
  )
}

export default App
