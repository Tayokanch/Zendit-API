import express from "express"
import bodyParser from "body-parser"
import dotenv from 'dotenv';
import morgan from "morgan";
import eSimRouter from "./routes/eSim.routes.js"
import webhookRoutes from "./routes/webhook.routes.js"

dotenv.config();

const app = express();
app.use(bodyParser.json())
app.use(morgan('dev'));

app.use('/', eSimRouter );
app.use(webhookRoutes);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

 