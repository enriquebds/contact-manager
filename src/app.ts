import express from "express";
import { handleErrors } from "./errors/handleError";
import clientRoutes from "./routes/client.routes";

let cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/client", clientRoutes);
app.use(handleErrors);

export default app;
