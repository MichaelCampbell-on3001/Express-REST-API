'use strict';

const express = require('express');
const { DryIngredientsModel } = require('../../collection');

const router = express.Router();

router.post('/dryingredients', async (req, res, next) => {
  let newPersonData = req.body;
  // query to the DB
  let responseData = await DryIngredientsModel.create(newPersonData);
  res.send(responseData);
});

module.exports = router;