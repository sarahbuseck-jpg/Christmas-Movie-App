const con = require('../../config/dbconfig');

module.exports = {

    // ------------------------------------
    // GET ALL ACTORS
    // ------------------------------------
    findAll: async () => {
        const [rows] = await con.execute("SELECT * FROM actors");
        return rows;
    },

    // ------------------------------------
    // GET ACTOR BY ID
    // ------------------------------------
    findById: async (actor_id) => {
        const [rows] = await con.execute(
            "SELECT * FROM actors WHERE actor_id = ?",
            [actor_id]
        );
        return rows;
    },

    // ------------------------------------
    // SEARCH ACTORS BY NAME
    // ------------------------------------
    search: async (searchTerm) => {
        const likeTerm = `%${searchTerm}%`;

        const [rows] = await con.execute(
            `SELECT *
             FROM actors
             WHERE first_name LIKE ? 
                OR last_name LIKE ?`,
            [likeTerm, likeTerm]
        );

        return rows;
    },

    // ------------------------------------
    // SORT ACTORS A–Z or Z–A
    // ------------------------------------
    sort: async (sortOrder) => {
        const safeOrder = sortOrder === "asc" ? "ASC" : "DESC";

        const [rows] = await con.execute(
            `SELECT *
             FROM actors
             ORDER BY first_name ${safeOrder}`
        );

        return rows;
    },

    // ------------------------------------
    // GET ALL PROGRAMS FOR AN ACTOR
    // ------------------------------------
    findActorMovies: async (actor_id) => {
        const [rows] = await con.execute(
            `SELECT p.*
             FROM program p
             INNER JOIN program_to_actor pa 
                 ON p.program_id = pa.program_id
             WHERE pa.actor_id = ?`,
            [actor_id]
        );

        return rows;
    }

};
