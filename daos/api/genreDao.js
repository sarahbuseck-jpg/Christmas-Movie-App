const con = require('../../config/dbconfig');
const daoCommon = require('../Common/daoCommon');
const { queryAction } = require('../../helpers/queryAction');
const genreDao = {
  table: 'genre',

  // Shared CRUD
  findAll: (res) => daoCommon.findAll(res, 'genre'),
  findById: (res, id) => daoCommon.findById(res, 'genre', id),
  sort: (res, column) => daoCommon.sort(res, 'genre', column),
  create: (req, res) => daoCommon.create(req, res, 'genre'),
  update: (req, res) => daoCommon.update(req, res, 'genre'),
  delete: (res, id) => daoCommon.delete(res, 'genre', id),

  // Unique methods
  findByName: async (res, name) => {
    try {
      const [rows] = await con.execute(
        'SELECT * FROM genre WHERE name LIKE ?',
        [`%${name}%`]
      );
      res.json(rows);
    } catch (error) {
      res.status(500).json({ message: 'error', error });
    }
  },

  countPrograms: async (res, genreId) => {
    try {
      const [rows] = await con.execute(
        `SELECT g.name, COUNT(ptg.program_id) AS program_count
         FROM genre g
         LEFT JOIN program_to_genre ptg ON g.genre_id = ptg.genre_id
         WHERE g.genre_id = ?
         GROUP BY g.genre_id`,
        [genreId]
      );
      res.json(rows);
    } catch (error) {
      res.status(500).json({ message: 'error', error });
    }
  }
};

module.exports = genreDao;