const { bbdd } = require('./bbdd');
const { Menu } = require('./SchemaJS/menus');
const { Movie } = require('./SchemaJS/movies');

const getAll = async (req, res) => {
    let data = await Movie.find()

    res.status(200).json({ 
        data,
        status  : 200,
        error   : 'Can not get info'
    })
}

const getMovies = async (req, res) => {
    let data = await Movie.find({series : false})
    console.log(data);
    
    let condition = bbdd.length !== 0
    let status = condition ? 200 : 204
    let error = condition ? 'All ok' : 'No movies'
    
    let response = { data, status, error }
    res.status(200).json(response)
}


const getMoviesById = async (req, res) => {
    let {id} = req.params

    let data = await Movie.find({series : false, id : id})

    let condition = bbdd.length !== 0
    let status = condition ? 200 : 204
    let error = condition ? 'All ok' : 'No movies'
    
    let response = { data, status, error }
    res.status(200).json(response)
}

const getMoviesByName = async (req, res) => {
    let {url} = req.params

    let data = await Movie.find({series : false, url : url})
    
    let condition = bbdd.length !== 0
    let status = condition ? 200 : 204
    let error = condition ? 'All ok' : 'No movies'
    
    let response = { data, status, error }
    res.status(200).json(response)
}

const getSeries = async (req, res)=>{
    let data = await Movie.find({series : true})
    
    let condition = bbdd.length !== 0
    let status = condition ? 200 : 204
    let error = condition ? 'All ok' : 'No series'
    
    let response = { data, status, error }
    res.status(200).json(response)
}

const getSeriesById = async (req, res) => {
    let {id} = req.params
    let data = await Movie.find({series: true, id : id})
    
    let condition = bbdd.length !== 0
    let status = condition ? 200 : 204
    let error = condition ? 'All ok' : 'No series'
    
    let response = { data, status, error }
    res.status(200).json(response)
}

const getSeriesByName = async (req, res) => {
    let {url} = req.params
    let data = await Movie.find({series : true, url : url})
    
    let condition = bbdd.length !== 0
    let status = condition ? 200 : 204
    let error = condition ? 'All ok' : 'No movies'
    
    let response = { data, status, error }
    res.status(200).json(response)
}

const getOriginals = async (req, res) => {
    let data = await Movie.find({originals : true})

    let condition = bbdd.length !== 0
    let status = condition ? 200 : 204
    let error = condition ? 'All ok' : 'No originals'

    let response = { data, status, error }
    res.status(200).json(response)
}

const getMenus = async (req, res) => {
    let data = await Menu.find()

    let condition = bbdd.length !== 0
    let status = condition ? 200 : 204
    let error = condition ? 'All ok' : 'No menus'

    let response = { data, status, error }
    res.status(200).json(response)
}

const getMain_slider = async (req, res) => {
    let data = await Movie.find({main : true}).limit(10)    
    let condition = bbdd.length !== 0
    let status = condition ? 200 : 204
    let error = condition ? 'All ok' : 'No main'
    
    let response = { data, status, error }
    res.status(200).json(response)
}

module.exports = {
    getAll, getOriginals, getMenus, getMain_slider,
    getMovies, getMoviesById, getMoviesByName, 
    getSeries, getSeriesById, getSeriesByName
}