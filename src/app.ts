import express, { Application } from "express";
import bodyParser from "body-parser";
import dataProccessRoute from "./routes/route";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors);
app.options("*", cors());
app.use("/bfhl", dataProccessRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
