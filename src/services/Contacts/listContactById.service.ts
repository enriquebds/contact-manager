import { Client, Contacts } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";

const listContactsByClientId = async (id: string) => {
  const contact = await prisma.client.findFirst({
    where: {
      id,
    },
    select: {
      contacts: true,
    },
  });

  if (!contact) {
    throw new AppError(404, "Contact not found");
  }

  return contact;
};

export default listContactsByClientId;
