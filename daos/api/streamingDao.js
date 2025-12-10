const con = require('../config/dbconfig');
const daoCommon = require('../Common/daoCommon');

const streamingDao = {
  table: 'streamings',

  // Shared CRUD
  findAll: (res) => daoCommon.findAll(res, streamingDao.table),
  findById: (res, id) => daoCommon.findById(res, streamingDao.table, id),
  sort: (res, column) => daoCommon.sort(res, streamingDao.table, column),
  create: (req, res) => daoCommon.create(req, res, streamingDao.table),
  update: (req, res) => daoCommon.update(req, res, streamingDao.table),
  delete: (res, id) => daoCommon.delete(res, streamingDao.table, id),

  // Unique: find streaming platform by name
  findByName: async (res, name) => {
    try {
      const sql = `SELECT * FROM streaming WHERE name LIKE ?`;
      const [rows] = await con.execute(sql, [`%${name}%`]);
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "error", err });
    }
  }
};

module.exports = streamingDao;