const app = require("../backend/src/app")
const connectdb = require("../backend/src/db/db")
require("dotenv").config()

connectdb()

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})