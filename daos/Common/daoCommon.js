const con = require('../../config/dbconfig');
const { queryAction } = require('../../helpers/queryAction');

// REAL MySQL table names
const validTables = [
  "actors",
  "directors",
  "genres",
  "programs",
  "streaming"
];

// Helper: convert plural table → singular ID column
// actors => actor_id
// directors => director_id
const getIdColumn = (table) => `${table.slice(0, -1)}_id`;

const daoCommon = {

  // ------------------------------------------------
  // GET ALL
  // ------------------------------------------------
  findAll: async (res, table) => {
    if (!validTables.includes(table))
      return res.status(400).json({ message: "Invalid table" });

    try {
      const sql = `SELECT * FROM ${table}`;
      const [rows] = await con.execute(sql);
      queryAction(res, null, rows, table);
    } catch (err) {
      queryAction(res, err, null, table);
    }
  },

  // RAW for EJS
  findAllRaw: async (table) => {
    const sql = `SELECT * FROM ${table}`;
    const [rows] = await con.execute(sql);
    return rows;
  },

  // ------------------------------------------------
  // GET BY ID
  // ------------------------------------------------
  findById: async (res, table, id) => {
    if (!validTables.includes(table))
      return res.status(400).json({ message: "Invalid table" });

    try {
      const idColumn = getIdColumn(table);
      const sql = `SELECT * FROM ${table} WHERE ${idColumn} = ?`;

      const [rows] = await con.execute(sql, [id]);
      queryAction(res, null, rows, table);
    } catch (err) {
      queryAction(res, err, null, table);
    }
  },

  // RAW for EJS
  findByIdRaw: async (table, id) => {
    const idColumn = getIdColumn(table);
    const sql = `SELECT * FROM ${table} WHERE ${idColumn} = ?`;

    const [rows] = await con.execute(sql, [id]);
    return rows[0];
  },

  // ------------------------------------------------
  // COUNT
  // ------------------------------------------------
  countAll: async (res, table) => {
    try {
      const sql = `SELECT COUNT(*) AS total FROM ${table}`;
      const [rows] = await con.execute(sql);
      res.json(rows[0]);
    } catch (err) {
      res.status(500).json({ message: "error", err });
    }
  },

  // ------------------------------------------------
  // SEARCH
  // ------------------------------------------------
  search: async (res, table, column, term) => {
    try {
      const sql = `SELECT * FROM ${table} WHERE ${column} LIKE ?`;
      const [rows] = await con.execute(sql, [`%${term}%`]);
      queryAction(res, null, rows, table);
    } catch (err) {
      queryAction(res, err, null, table);
    }
  },

  // ------------------------------------------------
  // SORT
  // ------------------------------------------------
  sort: async (res, table, column) => {
    try {
      const sql = `SELECT * FROM ${table} ORDER BY ${column}`;
      const [rows] = await con.execute(sql);
      queryAction(res, null, rows, table);
    } catch (err) {
      queryAction(res, err, null, table);
    }
  },

  // ------------------------------------------------
  // CREATE
  // ------------------------------------------------
  create: async (req, res, table) => {
    try {
      const fields = Object.keys(req.body);
      const values = Object.values(req.body);

      const setString = fields.map(f => `${f} = ?`).join(', ');
      const sql = `INSERT INTO ${table} SET ${setString}`;

      const [result] = await con.execute(sql, values);
      res.json({ insertId: result.insertId });

    } catch (err) {
      res.status(500).json({ message: "error", err });
    }
  },

  // ------------------------------------------------
  // UPDATE
  // ------------------------------------------------
  update: async (req, res, table) => {
    try {
      const idColumn = getIdColumn(table);
      const id = req.params.id;

      const fields = Object.keys(req.body);
      const values = Object.values(req.body);

      const setString = fields.map(f => `${f} = ?`).join(', ');
      const sql = `UPDATE ${table} SET ${setString} WHERE ${idColumn} = ?`;

      values.push(id);
      const [result] = await con.execute(sql, values);

      res.json({ changed: result.changedRows });

    } catch (err) {
      res.status(500).json({ message: "error", err });
    }
  },

  // ------------------------------------------------
  // DELETE
  // ------------------------------------------------
  delete: async (res, table, id) => {
    try {
      const idColumn = getIdColumn(table);
      const sql = `DELETE FROM ${table} WHERE ${idColumn} = ?`;

      await con.execute(sql, [id]);
      res.send("Record deleted");

    } catch (err) {
      res.status(500).json({ message: "error", err });
    }
  }
};

module.exports = daoCommon;