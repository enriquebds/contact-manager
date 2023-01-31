import { Request, Response } from "express";
import createClientService from "../../services/Client/createClient.service";
import listClientService from "../../services/Client/listClients.service";
import updateClientService from "../../services/Client/updateClient.service";

export class ClientControllers {
  async create(req: Request, res: Response) {
    const { name, email, password, telephone } = req.body;

    const createdClient = await createClientService({
      name,
      email,
      password,
      telephone,
    });

    return res.status(201).json(createdClient);
  }

  async list(req: Request, res: Response) {
    const clients = await listClientService();

    return res.json(clients);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password, telephone } = req.body;

    const updatedClient = await updateClientService({
      id,
      name,
      email,
      password,
      telephone,
    });

    return res.status(202).json(updatedClient);
  }
}
