const daoCommon = require("../Common/daoCommon");
const con = require("../../config/dbconfig");

const table = "actors"; // correct table name

const actorDao = {

    // ======================================================
    // GENERIC DAO OPERATIONS
    // ======================================================
    findAll: (res) => daoCommon.findAll(res, table),
    findById: (res, id) => daoCommon.findById(res, table, id),
    search: (res, column, term) => daoCommon.search(res, table, column, term),
    delete: (res, id) => daoCommon.delete(res, table, id),
    update: (req, res) => daoCommon.update(req, res, table),
    create: (req, res) => daoCommon.create(req, res, table),

    // ======================================================
    // CUSTOM SEARCH BY LAST NAME
    // ======================================================
    searchByLastName: async (res, term) => {
        try {
            const [rows] = await con.execute(
                "SELECT actor_id, first_name, last_name, img_url FROM actors WHERE last_name LIKE ?",
                [`%${term}%`]
            );
            res.json(rows);
        } catch (err) {
            console.error("DAO ERROR searchByLastName:", err);
            res.status(500).json({ message: "error", error: err.message });
        }
    },

    // ======================================================
    // FIND ACTORS CREATED AFTER DATE
    // ======================================================
    findCreatedAfter: async (res, date) => {
        try {
            const sql = `
                SELECT actor_id, first_name, last_name, img_url, date_created
                FROM actors
                WHERE date_created > ?
                ORDER BY date_created DESC
            `;
            const [rows] = await con.execute(sql, [date]);
            res.json(rows);
        } catch (err) {
            console.error("DAO ERROR findCreatedAfter:", err);
            res.status(500).json({ message: "error", error: err.message });
        }
    },

    // ======================================================
    // SORT ACTORS BY LAST NAME
    // ======================================================
    sortByName: async (res) => {
        try {
            const sql = `
                SELECT actor_id, first_name, last_name, img_url
                FROM actors
                ORDER BY last_name ASC
            `;
            const [rows] = await con.execute(sql);
            res.json(rows);
        } catch (err) {
            console.error("DAO ERROR sortByName:", err);
            res.status(500).json({ message: "error", error: err.message });
        }
    }
};

module.exports = actorDao;
