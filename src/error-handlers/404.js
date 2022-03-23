'use strict';

function throw404Error (req, res, next) {
  
  let error={
    status:404,
    message:'not found!',
   
  };
  res.status(404).send(error);
}

module.exports = throw404Error;