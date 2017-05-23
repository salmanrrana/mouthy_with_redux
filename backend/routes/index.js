var express = require('express');
var router = express.Router();
var Show = require('../models/show');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Macho Man Randy Savage' });
// });

router.get('/shows', function(req, res, next) {
  Show.find({}, function(err, show) {
    if (err) {
      console.log(err);
    }
    res.json(show);
    console.log("youre the best ever");
    show: show
  })
});

router.post('/shows', function(req, res, next) {

  var newShow = new Show({
    date: req.body.date,
    time: req.body.time,
    bands: req.body.bands,
    event_url: req.body.event_url,
    event_name: req.body.event_name,
    other_info: req.body.other_info
  });

  newShow.save(function(err, show) {
    if (err) {
      res.status(500).send({
        status: 'Error',
        error: err
      });
      console.log('Error: ', err);
    } else {
      res.status(200).json({
        status: 'OK',
        show: show
      })
    }
  });
});

// update a show
router.patch('/', function(req, res, next) {
  Show.findById({_id: req.body.id}, function(err, show) {
    if (err) console.log(err);

    show.date = req.body.date || show.date;
    show.time = req.body.time || show.time;
    show.bands = req.body.bands || show.bands;
    show.event_url = req.body.event_url || show.event_url;
    show.event_name = req.body.event_name || show.event_name;
    show.other_info = req.body.other_info || show.other_info;

    show.save(function(err, show) {
      if (err) console.log(err);

      res.json({
        status: 'updated!',
        updated_show: show
      });
    });

  });
});

// delete studemt
router.delete('/', function(req, res, next) {
  Show.findByIdAndRemove(req.body.id, function(err, show) {
    if (err) console.log(err);
    res.json({
      status: 'deleted!',
      show: show
    });
  })
});


module.exports = router;
