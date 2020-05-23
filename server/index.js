const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");


app.use(bodyParser.json());
// For production 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get('/', (req,res)=> res.json({Message: 'Welcome To FoodBank'}))

app.listen(PORT, () => {
  console.log(`Backend App running on port ${PORT}`)
});
