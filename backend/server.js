const app = require("../backend/src/app")
const connectdb = require("../backend/src/db/db")
require("dotenv").config()

connectdb()
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});