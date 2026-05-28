const articles = require('../models/articles')

const getArticle = (req, res) => {
  const id = req.params.id
  res.render('article.ejs', { foo: articles.getArticle(id) })
}

module.exports = { getArticle }