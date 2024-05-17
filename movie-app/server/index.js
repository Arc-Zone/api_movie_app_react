const express  = require('express')
const cors = require('cors')
const data = require('./api/apidb.json')
const fs = require('fs')
const app = express()
app.use(cors())

app.use(express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => { 
        res.send(`<h1>hello world</h1>`)
})
app.get('/api/movie' , (req,res) => {
    res.json(data)
})
app.post('/api/movie' , (req , res) => {

    const newMovieTitle = req.body.title
    const newMovieImage = req.body.image_path



    const newMovie = {
        id: data.length ? data[data.length - 1].id + 1 : 1,
        title: newMovieTitle,
        image_path: newMovieImage
    }
    console.log(newMovie)
    // console.log(data)
        data.push(newMovie)
    // console.log(data)
})

app.get('/api/movie/:id' , (req , res) => {
    const movieId = req.params.id

    const movie = data.find(m => m.id == movieId); 

    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
    
})
app.listen(3000, () => {
    console.log('Server started on port 3000')
})


