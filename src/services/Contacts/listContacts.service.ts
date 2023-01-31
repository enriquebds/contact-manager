import { Contacts } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";

const listContactsService = async (): Promise<Contacts[]> => {
  const contacts = prisma.contacts.findMany({
    include: {
      client: true,
    },
  });

  return contacts;
};

export default listContactsService;
