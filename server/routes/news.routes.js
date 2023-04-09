const { Router } = require("express");
const { getNews } = require("../controllers/news.controller");

const newsRouter = Router();

newsRouter.get("/get/:stext",getNews);

module.exports = newsRouter;