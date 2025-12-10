const db = require("../../config/dbconfig");

const actorDao = {

    // ------------------------------------------------------
    // GET ALL ACTORS
    // ------------------------------------------------------
    findAll(callback) {
        const sql = `
            SELECT actor_id, first_name, last_name, img_url, date_created, last_update
            FROM actors
            ORDER BY actor_id ASC
        `;
        db.query(sql, callback);
    },

    // ------------------------------------------------------
    // GET ACTOR BY ID
    // ------------------------------------------------------
    findById(id, callback) {
        const sql = `
            SELECT actor_id, first_name, last_name, img_url, date_created, last_update
            FROM actors
            WHERE actor_id = ?
        `;
        db.query(sql, [id], callback);
    },

    // ------------------------------------------------------
    // CREATE ACTOR
    // ------------------------------------------------------
    create(actor, callback) {
        const sql = `
            INSERT INTO actors (first_name, last_name, img_url)
            VALUES (?, ?, ?)
        `;
        db.query(sql, [actor.first_name, actor.last_name, actor.img_url], callback);
    },

    // ------------------------------------------------------
    // UPDATE ACTOR
    // ------------------------------------------------------
    update(id, actor, callback) {
        const sql = `
            UPDATE actors
            SET first_name = ?, 
                last_name = ?, 
                img_url = ?
            WHERE actor_id = ?
        `;
        db.query(sql, [actor.first_name, actor.last_name, actor.img_url, id], callback);
    },

    // ------------------------------------------------------
    // DELETE ACTOR
    // ------------------------------------------------------
    delete(id, callback) {
        const sql = "DELETE FROM actors WHERE actor_id = ?";
        db.query(sql, [id], callback);
    }
};

module.exports = actorDao;