const create = require('./create');
const list = require('./list');
const listAll = require('./listAll')
const destroy = require('./destroy')
const createComment = require('./createComment')

module.exports = {
  list,
  create,
  listAll,
  destroy,
  createComment
};
