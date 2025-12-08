const con = require('../../config/dbconfig');
const { queryAction } = require('../../helpers/queryAction');
const daoCommon = require('../Common/daoCommon');

const actorDao = {

  // Get all actors
  findAll: async (res) => {
    try {
      const [rows] = await con.execute(`SELECT * FROM actor`);
      queryAction(res, null, rows, 'actor');
    } catch (err) {
      queryAction(res, err, null, 'actor');
    }
  },

  // Raw data for EJS
  findAllRaw: async () => {
    return await daoCommon.findAllRaw('actor');
  },

  // Get actor by id
  findById: async (res, id) => {
    try {
      const [rows] = await con.execute(
        `SELECT * FROM actor WHERE actor_id = ?`,
        [id]
      );
      queryAction(res, null, rows, 'actor');
    } catch (err) {
      queryAction(res, err, null, 'actor');
    }
  },

  // Raw version
  findByIdRaw: async (id) => {
    return await daoCommon.findByIdRaw('actor', id);
  },

  // Get actor + movies
  findActorMovies: async (res, id) => {
    try {
      const [movies] = await con.execute(`
        SELECT m.* 
        FROM movie m
        JOIN movie_to_actor ma USING(movie_id)
        WHERE ma.actor_id = ?
      `, [id]);

      const [actorRows] = await con.execute(`
        SELECT first_name, last_name 
        FROM actor 
        WHERE actor_id = ?
      `, [id]);

      if (!actorRows.length)
        return res.status(404).json({ message: "Actor not found" });

      const actor = actorRows[0];
      actor.movies = movies;

      res.json(actor);

    } catch (err) {
      res.status(500).json({ message:"error", err });
    }
  },

  // Search
  search: async (req, res) => {
    try {
      const { first_name="", last_name="" } = req.query;

      let sql = "SELECT * FROM actor WHERE 1=1";
      const params = [];

      if (first_name) {
        sql += " AND first_name LIKE ?";
        params.push(`%${first_name}%`);
      }

      if (last_name) {
        sql += " AND last_name LIKE ?";
        params.push(`%${last_name}%`);
      }

      const [rows] = await con.execute(sql, params);

      queryAction(res, null, rows, "actor");

    } catch(err) {
      res.status(500).json({message:"error", err});
    }
  },

  // Sort
  sort: async (res, column) => {
    const valid = ['actor_id','first_name','last_name'];
    if (!valid.includes(column))
      return res.status(400).json({message:"Invalid column"});

    try {
      const [rows] = await con.execute(
        `SELECT * FROM actor ORDER BY ??`,
        [column]
      );
      queryAction(res,null,rows,"actor");

    } catch(err) {
      queryAction(res,err,null,"actor");
    }
  }

};

module.exports = actorDao;