import express from "express"
import bodyParser from "body-parser"
import dotenv from 'dotenv';
import morgan from "morgan";
import getSimRouter from "./routes/eSim.routes.js"
dotenv.config();

const app = express();
app.use(bodyParser.json())
app.use(morgan('dev'));

app.use('/', getSimRouter );

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

 