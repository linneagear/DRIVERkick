const router = require("express").Router();
const maintController = require("../../controllers/maintController");

router.route("/")
    .get(maintController.findAll)
    .post(maintController.create)

router.route("/:id")
    .get(maintController.findAll)
    .put(maintController.update)

module.exports = router;