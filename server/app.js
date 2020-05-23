import express from 'express';
import bodyParser from 'body-parser';
import apiRoute from './routes/index';
import path from 'path';

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/v1', apiRoute);
app.get('/', (req, res) => {
  res.status(200).json({ message: "Welcome foodbank App Backend" })
});

//For production 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Application runing on port ${port}`));