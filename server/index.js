const express = require("express");
const cors = require("cors");
const route = require("./route/routeIndex");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(route);

app.listen(port, () => {
  console.log(`Full Stack Server is Running on Port: ${port}`);
});
