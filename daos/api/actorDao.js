const pool = require("../../config/dbconfig");

const actorDao = {

    table: "actors",

    // ========================
    // CREATE
    // ========================
    create: async (actor) => {
        try {
            const [result] = await pool.query(
                "INSERT INTO actors (first_name, last_name) VALUES (?, ?)",
                [actor.first_name, actor.last_name]
            );

            return { 
                message: "Actor added successfully",
                insertId: result.insertId
            };

        } catch (error) {
            throw error;
        }
    },

    // ========================
    // FIND ALL RAW
    // ========================
    findAllRaw: async () => {
        const [rows] = await pool.query("SELECT * FROM actors");
        return rows;
    },

    // ========================
    // FIND ALL (for EJS page)
    // ========================
    findAll: async (callback) => {
        try {
            const [rows] = await pool.query("SELECT * FROM actors");
            callback(rows);
        } catch (error) {
            console.error(error);
            callback([]);
        }
    },

    // ========================
    // FIND BY ID
    // ========================
    findById: async (res, id) => {
        try {
            const [rows] = await pool.query(
                "SELECT * FROM actors WHERE actor_id = ?",
                [id]
            );
            res.json(rows[0] || {});
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "findById error", error });
        }
    },

    // ========================
    // SEARCH BY LAST NAME
    // ========================
    searchByLastName: async (res, term) => {
        try {
            const [rows] = await pool.query(
                "SELECT * FROM actors WHERE last_name LIKE ?",
                [`%${term}%`]
            );
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "search error", error });
        }
    },

    // ========================
    // DELETE
    // ========================
    delete: async (id) => {
        await pool.query(
            "DELETE FROM actors WHERE actor_id = ?",
            [id]
        );
        return true;
    }

};

module.exports = actorDao;