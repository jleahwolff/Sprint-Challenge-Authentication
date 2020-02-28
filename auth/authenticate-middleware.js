/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require("jsonwebtoken"); // <<< install this npm package
const { jwtSecret } = require("../config/secrets.js");


module.exports = (req, res, next) => {
const { authorization } = req.header;

if ( authorization ) {
  jwt.verify( authorization, jwtSecret, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ you: 'No entry!' });
    } else {
      // req.decodedToken = decodedToken;
      next();
    }
  });
} else {
  res.status(400).json({ message: "no/wrong credentials provided" })
}
};
