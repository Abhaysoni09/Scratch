const authcontrollers = require("../controllers/auth.controller")
const express = require("express")
const authmiddleware = require('../middleware/authmiddleware')

const router = express.Router()

router.post("/register",authcontrollers.register)
router.post("/login",authcontrollers.login)
router.get("/search",authcontrollers.search)
router.get("/me",authcontrollers.me)

module.exports = router