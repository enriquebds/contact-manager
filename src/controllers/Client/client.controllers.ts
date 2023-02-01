import { Request, Response } from "express";
import createClientService from "../../services/Client/createClient.service";
import deleteClient from "../../services/Client/deleteClient.service";
import listClientById from "../../services/Client/listClientById.service";
import listClientService from "../../services/Client/listClients.service";
import loginService from "../../services/Client/loginClient.service";
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

  async listById(req: Request, res: Response) {
    const { id } = req.params;

    const client = await listClientById(id);

    return res.json(client);
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

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteClient(id);

    return res.json({
      message: "Client deleted",
    });
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = await loginService({ email, password });

    return res.status(200).json(token);
  }
}
