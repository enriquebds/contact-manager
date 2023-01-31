import { Contacts } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";

const listContactById = async (id: string): Promise<Contacts> => {
  const contact = await prisma.contacts.findFirst({
    where: {
      id,
    },
    include: {
      client: true,
    },
  });

  if (!contact) {
    throw new AppError(404, "Contact not found");
  }

  return contact;
};

export default listContactById;
