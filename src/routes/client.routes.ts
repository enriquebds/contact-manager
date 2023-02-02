import { Router } from "express";
import { ClientControllers } from "../controllers/Client/client.controllers";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";

const routes = Router();
const clientController = new ClientControllers();

routes.post("", clientController.create);
routes.get("", clientController.list);
routes.post("/login", clientController.login);
routes.get("/:id", clientController.listById);
routes.patch("/:id", tokenAuthMiddleware, clientController.update);
routes.delete("/:id", tokenAuthMiddleware, clientController.delete);

export default routes;
