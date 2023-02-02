import { Contacts } from "@prisma/client";
import { randomUUID } from "crypto";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { IContactRequest } from "../../interfaces/contact/contact";

const createContactService = async ({
  id,
  name,
  email,
  telephone,
}: IContactRequest): Promise<Contacts> => {
  const client = await prisma.client.findFirst({
    include: {
      contacts: true,
    },
    where: {
      id,
    },
  });

  const contactAlreadyExists = await prisma.contacts.findFirst({
    where: {
      telephone,
    },
  });

  if (contactAlreadyExists) {
    throw new AppError(400, "This contact already created");
  }

  const contact = await prisma.contacts.create({
    include: {
      client: true,
    },
    data: {
      id: randomUUID(),
      name,
      email,
      telephone,
      clientId: client?.id,
    },
  });

  return contact;
};

export default createContactService;
