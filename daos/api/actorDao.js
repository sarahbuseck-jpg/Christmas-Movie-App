const daoCommon = require("./daoCommon");
const con = require("../../config/dbconfig");

const actorDao = {
    ...daoCommon,

    // ------------------------------------------------------
    // UNIQUE METHOD #1 - Find actors by last name
    // ------------------------------------------------------
    findByLastName: async (res, lastName) => {
        try {
            const sql = `
                SELECT actor_id, first_name, last_name, img_url
                FROM actors
                WHERE last_name LIKE ?
                ORDER BY last_name ASC
            `;
            const [rows] = await con.execute(sql, [`%${lastName}%`]);
            res.json(rows);
        } catch (err) {
            res.status(500).json({ message: "error", err });
        }
    },

    // ------------------------------------------------------
    // UNIQUE METHOD #2 - Find actors created after a date
    // ------------------------------------------------------
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
            res.status(500).json({ message: "error", err });
        }
    },

    // ------------------------------------------------------
    // UNIQUE METHOD #3 (OPTIONAL) - Find actors in ascending alphabetical order
    // ------------------------------------------------------
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
            res.status(500).json({ message: "error", err });
        }
    }
};
searchByLastName: async (res, term) => {
    try {
        const [rows] = await con.execute(
            "SELECT * FROM actors WHERE last_name LIKE ?",
            [`%${term}%`]
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: "error", err });
    }
},

module.exports = actorDao;