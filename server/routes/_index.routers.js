const { Router } = require("express");
const newsRouter = require("./news.routes");

const router = Router();
router.use("/news/",newsRouter);

module.exports = router;