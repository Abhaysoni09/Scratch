const express = require("express")
const projectcontroller = require("../controllers/project.controller")
const multer = require("multer")
const authmiddleware = require("../middleware/authmiddleware")
const rolemiddle = require('../middleware/rolemiddleware')


const upload = multer({storage:multer.memoryStorage()})
const router = express.Router()

router.get("/submittedprojects",authmiddleware,projectcontroller.submittedproject)
router.get("/allprojects",projectcontroller.allproject)
router.get("/allstudents",projectcontroller.allstudent)
router.patch("/project/approve/:id",authmiddleware,projectcontroller.approve)
router.patch("/project/reject/:id",authmiddleware,projectcontroller.reject)
router.post("/project",rolemiddle(["student"]),upload.single("image"),projectcontroller.submitproject)
router.get("/allteachers",projectcontroller.allteachers)
router.get("/createdprojects",authmiddleware,projectcontroller.createdprojects)
module.exports = router