const { 
    getAll, getOriginals, getMenus, getMain_slider,
    getMovies, getMoviesById, getMoviesByName, 
    getSeries, getSeriesById, getSeriesByName
} = require('./controller');

const express = require('express');
const router = express.Router();

console.log(router);

router.route('/')
    .get(getAll)

////////////////////////////////    
    
router.route('/movies')
    .get(getMovies)

router.route('/movies/:url')
    .get(getMoviesByName)

router.route('/movies/id/:id')
    .get(getMoviesById)

////////////////////////////////    

router.route('/series')
    .get(getSeries)

router.route('/series/:url')
    .get(getSeriesByName)

router.route('/series/id/:id')
    .get(getSeriesById)

////////////////////////////////    

router.route('/originals')
    .get(getOriginals)


router.route('/menus')
    .get(getMenus)

router.route('/main')
    .get(getMain_slider)

module.exports = {router}