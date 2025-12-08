
const actorDao = require('../../daos/api/actorDao');

const actorDao = {
  // findAll: async () => {
  //   return await daoCommon.findAll('actor');
  // },

  // findById: async (id) => {
  //   return await daoCommon.findById('actor', id);
  // }
  ...daoCommon,
  ...require('./api/actorDao')
};
module.exports ={
    actorDao
}