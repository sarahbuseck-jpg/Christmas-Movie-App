const con = require('../../config/dbconfig');
const daoCommon = require('../Common/daoCommon');

const programDao = {
  table: 'program',

  // Shared CRUD
  findAll: (res) => daoCommon.findAll(res, programDao.table),

  findById: (res, id) => daoCommon.findById(res, programDao.table, id),

  sort: (res, column) => daoCommon.sort(res, programDao.table, column),

  create: (req, res) => daoCommon.create(req, res, programDao.table),

  update: (req, res) => daoCommon.update(req, res, programDao.table),

  delete: (res, id) => daoCommon.delete(res, programDao.table, id),

  // ----- UNIQUE METHODS -----

  // HTML raw loader
  findAllRaw: async () => {
    try {
      const [rows] = await con.execute(`SELECT * FROM program`);
      return rows;
    } catch (err) {
      console.error("findAllRaw error:", err);
      throw err;
    }
  },

  // Find by rating
  findByRating: async (res, rating) => {
    try {
      const sql = `SELECT * FROM program WHERE rating = ?`;
      const [rows] = await con.execute(sql, [rating]);
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "error", err });
    }
  },

  // Find by streaming platform name
  findByStreamingPlatform: async (res, platform) => {
    try {
      const sql = `
        SELECT p.*
        FROM program p
        JOIN program_to_streaming pts USING(program_id)
        JOIN streaming s USING(streaming_id)
        WHERE s.name = ?
      `;
      const [rows] = await con.execute(sql, [platform]);
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "error", err });
    }
  }
};

module.exports = programDao;