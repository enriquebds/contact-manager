import { Router } from "express";
import { ClientControllers } from "../controllers/Client/client.controllers";

const routes = Router();
const clientController = new ClientControllers();

routes.post("", clientController.create);
routes.get("", clientController.list);
routes.post("/login", clientController.login);
routes.get("/:id", clientController.listById);
routes.patch("/:id", clientController.update);
routes.delete("/:id", clientController.delete);

export default routes;
