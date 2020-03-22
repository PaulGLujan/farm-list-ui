var express = require('express');
var router = express.Router();

/* GET home page. */

/* GET landing_page_v0 */
router.get('/landingpage', function(req, res, next) {
  // res.send('Hi from landing page');
  // here, we render landing_page_v0.ejs from the views folder, and pass it an object, such as a title or headline.
  res.render('landingpage', { title: 'Express' });
});


module.exports = router;
