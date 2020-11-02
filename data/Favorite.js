const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientModel = new Schema({
  text: { type: String, required: true },
  weight: { type: Number },
  image: { type: String }
})

const favoriteModel = new Schema({
  user: { type: mongoose.Types.ObjectId, required: true },
  uri: { type: String, required: true },
  url: { type: String },
  calories: { type: Number },
  image: { type: String },
  label: { type: String },
  source: { type: String },
  healthLabels: { type: [String] },
  ingredients: { type: [ingredientModel]}
});

module.exports = mongoose.model('Favorite', favoriteModel);
