import axios from "axios";
// Middleware function to check if the request is coming from the form submission
function checkReferer(req, res, next) {
  const referer = req.get('Referer'); // Get the referer header from the request
  // Check if the referer header exists and contains the expected origin
  if (referer && referer.includes('http://localhost:3000/')) {
      next(); // Continue to the next middleware or route handler
  } else {
      res.status(403).send('Forbidden'); // Respond with a forbidden status if the referer is invalid
  }
}

export { checkReferer };
