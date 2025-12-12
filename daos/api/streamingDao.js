const db = require("../../config/dbconfig");

const streamingDao = {
    table: "streamings",

    findAll: async (res) => {
        try {
            const [rows] = await db.query("SELECT * FROM streamings");
            res.json(rows);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    findById: async (res, id) => {
        try {
            const [rows] = await db.query(
                "SELECT * FROM streamings WHERE streaming_id = ?",
                [id]
            );
            res.json(rows[0] || {});
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    create: async (res, data) => {
        try {
            const { streaming_name } = data;
            const [result] = await db.query(
                "INSERT INTO streamings (streaming_name) VALUES (?)",
                [streaming_name]
            );
            res.json({ insertedId: result.insertId });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    update: async (res, id, data) => {
        try {
            const { streaming_name } = data;
            await db.query(
                "UPDATE streamings SET streaming_name = ? WHERE streaming_id = ?",
                [streaming_name, id]
            );
            res.json({ message: "Updated" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    delete: async (res, id) => {
        try {
            await db.query(
                "DELETE FROM streamings WHERE streaming_id = ?",
                [id]
            );
            res.json({ message: "Deleted" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = streamingDao;