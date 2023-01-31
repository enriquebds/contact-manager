import { Router } from "express";
import { ContactControllers } from "../controllers/Contacts/contact.controllers";

const routes = Router();
const contactController = new ContactControllers();

routes.post("/:id", contactController.create);
routes.get("", contactController.list);

export default routes;
