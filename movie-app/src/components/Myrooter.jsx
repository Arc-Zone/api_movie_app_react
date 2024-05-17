import { BrowserRouter , Routes , Route} from "react-router-dom";
import App from "../App.jsx";
import Movie from "./Movie";

function Myrooter () {
    console.log("Hello")
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App />}/>
            <Route path="/movie/:movieId" element={<Movie/>}/>
            <Route path='*' element={<h1>404 page not found</h1>} />
        </Routes>
    </BrowserRouter>
    )
}

export default Myrooter