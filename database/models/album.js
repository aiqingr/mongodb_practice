const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: String,
  date: Date,
  copiedSolid: Number,
  numberTracks: Number,
  image: String,
  revenue: Number
});

module.exports = AblumSchema;
