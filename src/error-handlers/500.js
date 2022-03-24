'use strict';

function throw500Error (req, res, next, err) {
  
  let errorObject={
    status:500,
    message:err,
   
  };
  res.status(404).send(errorObject);
}

module.exports = throw500Error;