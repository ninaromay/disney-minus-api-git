const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema(
    {
        id:    Number,
        name: String,
        img_menu: String,
        video : String,
        url: String,
    },
    {
        collection : 'menus',
        skipVersioning: true,
    }
)

const Menu = new mongoose.model('Menu', MenuSchema)

module.exports = {
    Menu
}