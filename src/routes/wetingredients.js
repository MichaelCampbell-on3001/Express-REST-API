'use strict';

const express = require('express');
const { WetIngredientsModel } = require('../../collection');

const router = express.Router();

router.post('/wetingredients', async (req, res, next) => {
  let newPersonData = req.body;
  // query to the DB
  let responseData = await WetIngredientsModel.create(newPersonData);
  res.send(responseData);
});

module.exports = router;