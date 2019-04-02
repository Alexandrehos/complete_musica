var mongoose = require("mongoose");

var musicaSchema = new mongoose.Schema({
    name: String,
    artist: String,
    letraIng: Array,
    letraPt: Array
})

module.exports = mongoose.model("Musica", musicaSchema);