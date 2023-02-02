import { Request, Response } from "express";
import createContactService from "../../services/Contacts/createContact.service";
import deleteContactService from "../../services/Contacts/deleteContact.service";
import listContactById from "../../services/Contacts/listContactById.service";
import listContactsService from "../../services/Contacts/listContacts.service";
import updateContactService from "../../services/Contacts/updateContact.service";

export class ContactControllers {
  async create(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, telephone } = req.body;

    const createdContact = await createContactService({
      id,
      name,
      email,
      telephone,
    });

    return res.status(201).json(createdContact);
  }

  async list(req: Request, res: Response) {
    const contacts = await listContactsService();

    res.json(contacts);
  }

  async listById(req: Request, res: Response) {
    const { id } = req.params;

    const contact = await listContactById(id);

    return res.json(contact);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteContactService(id);

    return res.json({
      message: "Contact deleted",
    });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, telephone } = req.body;

    const updatedClient = await updateContactService({
      id,
      name,
      email,
      telephone,
    });

    return res.status(202).json(updatedClient);
  }
}
