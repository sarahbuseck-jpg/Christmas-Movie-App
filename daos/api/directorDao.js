const con = require('../../config/dbconfig');
const daoCommon = require('../Common/daoCommon');
const { queryAction } = require('../../helpers/queryAction'); 


const directorDao = {
  table: 'director',
  findAll: (res) => daoCommon.findAll(res, 'director'),
  findById: (res, id) => daoCommon.findById(res, 'director', id),
  sort: (res, column) => daoCommon.sort(res, 'director', column),
  create: (req, res) => daoCommon.create(req, res, 'director'),
  update: (req, res) => daoCommon.update(req, res, 'director'),
  delete: (res, id) => daoCommon.delete(res, 'director', id),

  findByFirstName: async (res, firstName) => {
    try {
      const [rows] = await con.execute(
        'SELECT * FROM director WHERE first_name LIKE ?',
        [`%${firstName}%`]
      );
      res.json(rows);
    } catch (error) {
      res.status(500).json({ message: 'error', error });
    }
  },

  findByLastName: async (res, lastName) => {
    try {
      const [rows] = await con.execute(
        'SELECT * FROM director WHERE last_name LIKE ?',
        [`%${lastName}%`]
      );
      res.json(rows);
    } catch (error) {
      res.status(500).json({ message: 'error', error });
    }
  }
};

module.exports = directorDao;