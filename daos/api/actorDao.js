const pool = require("../../config/dbconfig");

const actorDao = {

    table: "actors",

    // ========================
    // CREATE
    // ========================
    create: async (actor) => {
        const [result] = await pool.query(
            "INSERT INTO actors (first_name, last_name) VALUES (?, ?)",
            [actor.first_name, actor.last_name]
        );

        return {
            message: "Actor added successfully",
            insertId: result.insertId
        };
    },

    // ========================
    // FIND ALL RAW
    // ========================
    findAllRaw: async () => {
        const [rows] = await pool.query("SELECT * FROM actors");
        return rows;
    },

    // ========================
    // FIND BY ID RAW
    // ========================
    findByIdRaw: async (id) => {
        const [rows] = await pool.query(
            "SELECT * FROM actors WHERE actor_id = ?",
            [id]
        );
        return rows[0] || null;
    },

    // ========================
    // FIND BY ID (API JSON)
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
        const [result] = await pool.query(
            "DELETE FROM actors WHERE actor_id = ?",
            [id]
        );
        return result.affectedRows > 0;
    }

};

module.exports = actorDao;