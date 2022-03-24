'use strict';

function logger (req, res, next) {
  console.log('request:', req.path, req.method);
  next();
}
module.exports=logger;



// function logRoute(req, res, next) {
//   console.log(req.path);
//   console.log(req.ip);
//   next(); // we can "trigger" an error by passing a value into next().
// }