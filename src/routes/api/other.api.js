const router = require("express").Router()
const { metrics, query } = require("../../controllers/api/other")

router.get("/metrics", metrics)
router.get("/query", query)

module.exports = router;