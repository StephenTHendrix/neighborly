const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// Matches with "/api/items"
router
  .route("/")
  .get(itemController.findAll)
  .post(itemController.create);

// Matches with "/api/items/:id"
router
  .route("/:id")
  .get(itemController.findById)
  .put(itemController.update)
  .delete(itemController.remove);

module.exports = router;
