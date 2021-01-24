const nominationBuilder = require('../controllers/nominationController');

module.exports = app => {
  app
    .route('/nominations')
    .get(nominationBuilder.list_all_nominations)
    .post(nominationBuilder.create_a_nomination);

  app
    .route('/nominations/:nominationId')
    .get(nominationBuilder.read_a_nomination)
    .put(nominationBuilder.update_a_nomination)
    .delete(nominationBuilder.delete_a_nomination);
};