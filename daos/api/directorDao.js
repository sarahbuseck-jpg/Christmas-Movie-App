const con = require('../../config/dbconfig');
const daoCommon = require('../Common/daoCommon');

const directorDao = {
    table: 'director',

    findAll: (res) => daoCommon.findAll(res, 'director'),
    findById: (res, id) => daoCommon.findById(res, 'director', id),
    sort: (res, column) => daoCommon.sort(res, 'director', column),
    create: (req, res) => daoCommon.create(req, res, 'director'),
    update: (req, res) => daoCommon.update(req, res, 'director'),
    delete: (res, id) => daoCommon.delete(res, 'director', id),

    // NEW: this returns the rows for your EJS page
    findAllRaw: async () => {
        const [rows] = await con.execute("SELECT * FROM director");
        return rows;
    }
};

module.exports = directorDao;