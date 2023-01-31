import { Client } from "@prisma/client";
import { hash } from "bcrypt";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { IUpdateClientRequest } from "../../interfaces/client/client";

const updateClientService = async ({
  id,
  name,
  email,
  password,
  telephone,
}: IUpdateClientRequest): Promise<Client> => {
  const client = await prisma.client.findFirst({
    where: {
      id,
    },
  });

  if (!client) {
    throw new AppError(404, "Client not foud.");
  }

  const updatedClient = await prisma.client.update({
    where: {
      id,
    },
    data: {
      name: name ? name : client.name,
      email: email ? email : client.email,
      password: password ? await hash(password, 8) : client.password,
      telephone: telephone ? telephone : client.telephone,
    },
  });

  return updatedClient;
};

export default updateClientService;
