import { Router } from "express";
import { ContactControllers } from "../controllers/Contacts/contact.controllers";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";

const routes = Router();
const contactController = new ContactControllers();

routes.post("/:id", tokenAuthMiddleware, contactController.create);
routes.get("", contactController.list);
routes.get("/:id", contactController.listById);
routes.delete("/:id", tokenAuthMiddleware, contactController.delete);
routes.patch("/:id", tokenAuthMiddleware, contactController.update);

export default routes;
