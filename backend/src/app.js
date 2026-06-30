const express = require("express")
const cors = require("cors")
const authroutes = require("./Routes/auth.routes")
const projectroutes = require("./Routes/project.routes")
const cookieParser = require("cookie-parser")
const app = express()
app.use(express.json())
app.use(cors(
    {
        origin: ["http://localhost:5173",
            "https://scratch-wyu3.onrender.com"
        ],
        credentials: true,
    }
))
app.use(cookieParser())

app.use("/api/auth",authroutes)
app.use("/api",projectroutes)

module.exports = app