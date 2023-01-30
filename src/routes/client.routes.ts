import { Router } from "express";
import { ClientControllers } from "../controllers/Client/client.controllers";

const routes = Router();
const clientController = new ClientControllers();

routes.post("", clientController.create);
routes.get("", clientController.list);

export default routes;
