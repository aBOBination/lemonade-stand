const router = require('express').Router();
const storesController = require('../../controllers/storesController');

// Matches with "/api/stores"
router
  .route('/')
  .get(storesController.findByUserId)
  .post(storesController.create);

// Matches with "/api/stores/:id"
router
  .route('/:id')
  .get(storesController.findById)
  .put(storesController.update)
  .delete(storesController.remove);

module.exports = router;
