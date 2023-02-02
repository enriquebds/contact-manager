import { Client } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";
import { IClientRequest } from "../../interfaces/client/client";
import { AppError } from "../../errors/AppError";

const createClientService = async ({
  name,
  email,
  password,
  telephone,
}: IClientRequest): Promise<Client> => {
  const alreadyExists = await prisma.client.findFirst({
    where: {
      email,
    },
  });

  if (alreadyExists) {
    throw new AppError(400, "Email already being used");
  }
  const client = await prisma.client.create({
    include: {
      contacts: true,
    },
    data: {
      id: randomUUID(),
      name,
      email,
      password: await bcrypt.hash(password, 8),
      telephone,
    },
  });

  return { ...client, password: "" };
};

export default createClientService;
