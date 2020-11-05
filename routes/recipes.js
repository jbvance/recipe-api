var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/search', async (req, res) => {
  try {
  //`https://api.edamam.com/search?q=beef&diet=high-protein&diet=low-carb&diet=low-fat&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&from=0&to=60&time=1-120&format=json`;
  const { q, r } = req.query;
  if (!q && !r) {
    throw new Error(
      'Must provide either "q" or "r" argument to perform search'
    );
  }
  console.log(q, r);
  const url = q
    ? `https://api.edamam.com/search?q=${q}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&from=0&to=60&time=1-120&format=json`
    : `https://api.edamam.com/search?r=${r}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&from=0&to=60&time=1-120&format=json`;
  console.log('URL', url);


    const response = await axios.get(url);
    //console.log(response);
    res.status(200).send(response.data);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .send({ message: `Unable to peform search: ${err.message}` });
  }
});

module.exports = router;
