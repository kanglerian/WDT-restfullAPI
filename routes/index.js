const express = require('express');
const router = express.Router();

const routes = [
  {
    name: "users",
    path: [
      {
        nama: 'GET',
        path: '/users'
      }, {
        nama: 'POST',
        path: '/users'
      }, {
        nama: 'GET By ID',
        path: '/users/:id'
      }, {
        nama: 'PATCH',
        path: '/users/update/:id'
      }, {
        nama: 'DELETE',
        path: '/users/delete/:id'
      },
    ]
  }, {
    name: "blog",
    path: [
      {
        nama: 'GET',
        path: '/blog'
      }, {
        nama: 'POST',
        path: '/blog'
      }, {
        nama: 'GET By ID',
        path: '/blog/:id'
      }, {
        nama: 'PATCH',
        path: '/blog/update/:id'
      }, {
        nama: 'DELETE',
        path: '/blog/delete/:id'
      },
    ]
  }, {
    name: "signin",
    path: [
      {
        nama: 'POST',
        path: '/signin'
      }
    ]
  }, {
    name: "signup",
    path: [
      {
        nama: 'POST',
        path: '/signup'
      }
    ]
  }, {
    name: "reset",
    path: [
      {
        nama: 'POST',
        path: '/reset'
      }
    ]
  },{
    name: "forgot",
    path: [
      {
        nama: 'POST',
        path: '/forgot'
      }
    ]
  },{
    name: "cek hari",
    path: [
      {
        nama: 'Params',
        path: '/cek/:hari'
      }
    ]
  },
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/awal', {
    data: routes
  });
});

router.get('/cek/:day', function (req, res, next) {
  let hasil;
  switch (req.params.day.toLowerCase()) {
    case "minggu":
      hasil = 7;
      break;
    case "sabtu":
      hasil = 6;
      break;
    case "jumat":
      hasil = 5;
      break;
    case "kamis":
      hasil = 4;
      break;
    case "rabu":
      hasil = 3;
      break;
    case "selasa":
      hasil = 2;
      break;
    case "senin":
      hasil = 1;
      break;
    default:
      hasil = 'Bukan hari!'
      break;
  }
  res.render('pages/day', {
    data: req.params.day,
    hari: hasil
  });
});

module.exports = router;
