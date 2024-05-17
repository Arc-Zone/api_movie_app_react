import { useState, createContext , useEffect} from "react";
import axios from "axios";

export const AuthContext = createContext()

export const AuthProvider = (props) => {

    const [search , setSearch] = useState("")
    const [movies , setMovies] = useState(null) 
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const APP_ID = '8f4eed8f'
    const APP_KEY = '712400011d6b373e31daa9cf8a5a41b0'

    
    const fetchMovies = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/movie/${search}`)
            console.log(response)
            setMovies(response.data)

        } catch (err) {
                console.error(err)
                setError(err)
        } finally {
                setLoading(false)
        }
    }
    
    const handleSubmit = (e) => {
            e.preventDefault()
            fetchMovies()
    }
    
    useEffect(() => {
            fetchMovies()
    }, [])
    
    
        // if (error) return <p>{error}</p>
        // if (loading) return <p>Loading...</p>
        

        return(
        <AuthContext.Provider value={[movies , setMovies , search , setSearch , handleSubmit]}>
            {!loading && props.children}
        </AuthContext.Provider>
    )
}

