import express from "express";
import { handleErrors } from "./errors/handleError";
import "express-async-errors";
import clientRoutes from "./routes/client.routes";
import contactRoutes from "./routes/contact.routes";

let cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/client", clientRoutes);
app.use("/contact", contactRoutes);
app.use(handleErrors);

export default app;
