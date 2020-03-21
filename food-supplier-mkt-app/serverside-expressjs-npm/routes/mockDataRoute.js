var express = require('express');
var router = express.Router();

/* GET home page.

/api/v1/mock/mock_data

*/
router.get('/mock_data', function(req, res, next) {

  var objectToSend = {
    location_type: "supplier",
    location_subtype: "greengrocer",
    location_name: "bills grocery store"
  }
  res.json(objectToSend);
});

module.exports = router;
