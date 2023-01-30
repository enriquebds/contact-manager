import { Request, Response } from "express";
import createClientService from "../../services/Client/createClient.service";
import listClientService from "../../services/Client/listClients.service";

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
}
