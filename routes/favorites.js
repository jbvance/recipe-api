var express = require('express');
var router = express.Router();
const axios = require('axios');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  const { user } = req;

  try {
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const Favorite = mongoose.model('Favorite');
    const {
      uri,
      url,
      calories,
      dietLabels,
      healthLabels,
      image,
      ingredients,
      label,
      source,
      totalTime,
    } = req.body.recipeData;
    const userId = req.user.sub;

    const newFav = new Favorite({
      user: userId,
      uri,
      url,
      calories,
      dietLabels,
      healthLabels,
      image,
      ingredients,
      label,
      source,
      totalTime,
    });
    const savedFav = await newFav.save();
    return res.status(201).send({ message: 'Record added successfully' });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: 'Unable to save favorite' });
  }
});

module.exports = router;
