const con = require('../../config/dbconfig');
const daoCommon = require('../Common/daoCommon');

const genreDao = {
  table: 'genre',

  // Raw list for HTML views
  findAllRaw: async () => {
    const [rows] = await con.execute("SELECT * FROM genre");
    return rows;
  },

  // Shared CRUD
  findAll: (res) => daoCommon.findAll(res, 'genre'),
  findById: (res, id) => daoCommon.findById(res, 'genre', id),
  sort: (res, column) => daoCommon.sort(res, 'genre', column),
  create: (req, res) => daoCommon.create(req, res, 'genre'),
  update: (req, res) => daoCommon.update(req, res, 'genre'),
  delete: (res, id) => daoCommon.delete(res, 'genre', id),

  // Unique
  searchByName: async (req, res) => {
    try {
      const [rows] = await con.execute(
        'SELECT * FROM genre WHERE name LIKE ?',
        [`%${req.query.name}%`]
      );
      res.json(rows);
    } catch (err) {
      res.status(500).json({ message: 'error', err });
    }
  },

  findProgramsByGenre: async (res, id) => {
    try {
      const [rows] = await con.execute(
        `SELECT g.name, COUNT(ptg.program_id) AS program_count
         FROM genre g
         LEFT JOIN program_to_genre ptg ON g.genre_id = ptg.genre_id
         WHERE g.genre_id = ?
         GROUP BY g.genre_id`,
        [id]
      );
      res.json(rows);
    } catch (err) {
      res.status(500).json({ message: 'error', err });
    }
  }
};

module.exports = genreDao;