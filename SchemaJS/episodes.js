const mongoose = require('mongoose')

const EpisodesSchema = new mongoose.Schema(
    {
        season_id:      Number,
        ep_id:          Number,
        title:          String,
        description:    String,
        time:           String,
        img:            String,
    },
    {
        collection : 'episodes',
        skipVersioning : true,
    }
    )