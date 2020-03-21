var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET landing_page_v0 */
router.get('/landing_page_v0', function(req, res, next) {

  // here, we render landing_page_v0.ejs from the views folder, and pass it an object, such as a title or headline.
  res.render('landing_page_v0', { title: 'Express' });
});


module.exports = router;
