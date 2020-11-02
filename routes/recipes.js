var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/search', async  (req, res) => {
  //`https://api.edamam.com/search?q=beef&diet=high-protein&diet=low-carb&diet=low-fat&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&from=0&to=60&time=1-120&format=json`;
  const { q } = req.query;
  const url = encodeURI(`https://api.edamam.com/search?q=${q}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&from=0&to=60&time=1-120&format=json`);
  console.log('URL', url);
  
  try {
    const response = await axios.get(url);
    res.status(200).send(response.data)

  } catch(err) {
    console.log(err);
  }  
});

module.exports = router;
