const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
    {
        id:                 Number,
        company:            String,
        title:              String,
        url:                String,
        img:          {
            background:     String,
            compose:        String,
            badging:        String,
            cover:          String,
            logo:           String,
            logo_long:      String,
        },
        description:  {
            short:          String,
            description:    String,
            warning:        String,
        },
        duration:           String,
        seasons:            String,
        ad:                 Boolean,
        cc:                 String,
        add:                Boolean,
        message:            String,
        director:           String,
        creator:            String,
        starring:           Array,
        watching:           Boolean,
        release_date:       String,
        genre:              String,
        rating:             String,
        original:           Boolean,
        series:             Boolean,
        extras:             Array,
        main:               Boolean,
    }, 
    {
        collection : 'movies',
        skipVersioning : true,
    }
)

const Movie = new mongoose.model('Movie', MovieSchema)

module.exports = {
    Movie
}