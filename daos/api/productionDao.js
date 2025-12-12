const con = require('../../config/dbconfig');

const productionDao = {
    findAllRaw: async () => {
        const [rows] = await con.execute("SELECT * FROM productions");
        return rows;
    },

    create: async (req, res) => {
        const { name } = req.body;
        await con.execute(
            "INSERT INTO productions (name) VALUES (?)",
            [name]
        );
    }
};

module.exports = productionDao;