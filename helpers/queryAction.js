const queryAction = (res, e, rows, table) => {
    if (!e) {
        if (rows.length === 1) {
            res.json(rows[0]); // single object
        } else {
            res.json(rows); // array
        }
    } else {
        console.log(`DAO Error: ${e}`);
        res.status(500).json({
            message: 'error',
            table: table,
            error: e // fixed variable
        });
    }
};

module.exports = { queryAction };