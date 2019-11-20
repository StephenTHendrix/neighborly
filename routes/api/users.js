const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/items"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/items/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

  router
  .route("/login")
  .post(userController.login);


module.exports = router;
