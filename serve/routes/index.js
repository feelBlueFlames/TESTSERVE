var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/logData', function (req, res, next) {
  const list = require('../data/dutyLog');
  setTimeout(() => {
    res.json({
      code: 1,
      data: {
        list
      },
      msg: 'success'
    })
  }, 2000)
});
router.get('/getWeather', function (req, res, next) {
  const list = require('../data/weather');
  res.json({
    code: 1,
    data: {
      list
    },
    msg: 'success'
  })
});
router.get('/getTide', function (req, res, next) {
  const list = require('../data/tide');
  res.json({
    code: 1,
    data: {
      list
    },
    msg: 'success'
  })
});
router.get('/getTyphoon', function (req, res, next) {
  const list = require('../data/typhoon');
  res.json({
    code: 1,
    data: {
      list
    },
    msg: 'success'
  })
});

router.get('/saveLog', function (req, res, next) {
  res.json({
    code: 1,
    msg: 'success',
    data: ''
  })
});
router.get('/delLogById', function (req, res, next) {
  res.json({
    code: 1,
    msg: 'success',
    data: ''
  })
});
router.get('/getTyphoonData', function (req, res, next) {
  setTimeout(() => {
    res.json({
      code: 1,
      msg: 'success',
      data: [{
        title: "玉兔",
        name: "1",
        content: "12313"
      },
      {
        title: "康妮",
        name: "2",
        content: "12313"
      },
      {
        title: "玉兔",
        name: "3",
        content: "12313"
      },
      {
        title: "百里嘉",
        name: "4",
        content: "12313"
      }]
    })
  }, 1000)

});
router.get('/logData', function (req, res, next) {
  const list = require('../data/typhoon');
  setTimeout(() => {
    res.json({
      code: 1,
      data: {
        list
      },
      msg: 'success'
    })
  }, 2000)
});
module.exports = router;
