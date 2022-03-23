'use strict';

function validator (req,res,next) {
  if(req.query.name){
    res.send('validated!');
    next();
  }
  else{
    res.send('not validated');
  }
}

module.exports = validator;