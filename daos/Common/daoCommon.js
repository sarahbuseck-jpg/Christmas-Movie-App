const con = require('../../config/dbconfig');
const { queryAction } = require('../../helpers/queryAction');

const validTables = [
  'actor','movie','user','director','genre','program','streaming'
];

const daoCommon = {

  // --------------------------
  // findAll
  // --------------------------
  findAll: async (res, table) => {
    if (!validTables.includes(table))
      return res.status(400).json({message:'Invalid table'});

    try {
      const sql = `SELECT * FROM ${table}`;
      const [rows] = await con.execute(sql);

      queryAction(res,null,rows,table);

    } catch(err) {
      queryAction(res,err,null,table);
    }
  },

  // --------------------------
  // findAllRaw (for EJS)
  // --------------------------
  findAllRaw: async (table) => {
    const sql = `SELECT * FROM ${table}`;
    const [rows] = await con.execute(sql);
    return rows;
  },

  // --------------------------
  // findById
  // --------------------------
  findById: async (res, table, id) => {
    if (!validTables.includes(table))
      return res.status(400).json({message:'Invalid table'});

    try {
      const sql = `SELECT * FROM ${table} WHERE ${table}_id = ?`;
      const [rows] = await con.execute(sql,[id]);

      queryAction(res,null,rows,table);

    } catch(err){
      queryAction(res,err,null,table);
    }
  },

  // --------------------------
  // findByIdRaw (for EJS)
  // --------------------------
  findByIdRaw: async (table,id) => {
    const sql = `SELECT * FROM ${table} WHERE ${table}_id = ?`;
    const [rows] = await con.execute(sql,[id]);
    return rows[0];
  },

  // --------------------------
  // countAll
  // --------------------------
  countAll: async (res, table) => {
    try {
      const sql = `SELECT COUNT(*) AS total FROM ${table}`;
      const [rows] = await con.execute(sql);

      res.json(rows[0]);
    } catch(err){
      res.status(500).json({message:"error",err});
    }
  },

  // --------------------------
  // search (generic LIKE)
  // --------------------------
  search: async (res, table, column, term) => {
    try {
      const sql = `SELECT * FROM ${table} WHERE ${column} LIKE ?`;
      const [rows] = await con.execute(sql,[`%${term}%`]);

      queryAction(res,null,rows,table);

    } catch(err){
      queryAction(res,err,null,table);
    }
  },

  // --------------------------
  // sort
  // --------------------------
  sort: async (res, table, column) => {
    try {
      const sql = `SELECT * FROM ${table} ORDER BY ${column}`;
      const [rows] = await con.execute(sql);

      queryAction(res,null,rows,table);

    } catch(err){
      queryAction(res,err,null,table);
    }
  },

  // --------------------------
  // create
  // --------------------------
  create: async (req,res,table) => {
    try {
      const fields = Object.keys(req.body);
      const vals = Object.values(req.body);

      const set = fields.map(f => `${f} = ?`).join(', ');

      const sql = `INSERT INTO ${table} SET ${set}`;

      const [result] = await con.execute(sql, vals);

      res.json({insertId: result.insertId});

    } catch(err){
      res.status(500).json({message:"error",err});
    }
  },

  // --------------------------
  // update
  // --------------------------
  update: async (req,res,table) => {
    try {
      const id = req.params.id;

      const fields = Object.keys(req.body);
      const vals = Object.values(req.body);

      const set = fields.map(f => `${f} = ?`).join(', ');

      const sql = `UPDATE ${table} SET ${set} WHERE ${table}_id = ?`;

      vals.push(id);

      const [result] = await con.execute(sql, vals);

      res.json({changed:result.changedRows});

    } catch(err){
      res.status(500).json({message:"error",err});
    }
  },

  // --------------------------
  // delete
  // --------------------------
  delete: async (res, table, id) => {
    try {
      const sql = `DELETE FROM ${table} WHERE ${table}_id = ?`;

      await con.execute(sql,[id]);

      res.send("Record deleted");

    } catch(err){
      res.status(500).json({message:"error",err});
    }
  }
};

module.exports = daoCommon;