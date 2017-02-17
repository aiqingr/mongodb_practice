const mongoose = require('mongoose');
const AblumSchema = require('./album');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [AblumSchema]
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;
