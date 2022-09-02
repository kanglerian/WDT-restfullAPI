const express = require('express');
const router = express.Router();

const { Blog,User } = require('../models');

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: blog } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, blog, totalPages, currentPage };
};

router.get('/', async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page,size);
  await Blog.findAndCountAll({
    limit,
    offset,
    include: [
      {model: User, as: 'Author', attributes: ['username']}
    ],
    order: [
      ['id', 'DESC']
    ]
  })
  .then(data => {
    const response = getPagingData(data, page, limit);
    res.send(response);
  });
});

/* GET blog. */
router.get('/:id', async (req, res) => {
  const blog = await Blog.findOne({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json({
    message: 'success',
    data: blog
  });
});

/* POST blog to listing. */
router.post('/', async (req, res) => {
  await Blog.create(req.body);
  res.status(200).json({
    message: 'success add new post'
  });
});

/* PATCH blog to listing. */
router.patch('/update/:id', async (req, res) => {
  await Blog.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.status(200).json({
    message: 'success update blog'
  });
});

/* DELETE blog to listing. */
router.delete('/delete/:id', async (req, res) => {
  await Blog.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json({
    message: 'success delete post'
  });
});

module.exports = router;
