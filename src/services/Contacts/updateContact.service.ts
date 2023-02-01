import { Contacts } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";
import { IUpdateContactRequest } from "../../interfaces/contact/contact";

const updateContactService = async ({
  id,
  name,
  email,
  telephone,
}: IUpdateContactRequest): Promise<Contacts> => {
  const contact = await prisma.contacts.findFirst({
    where: {
      id,
    },
  });

  if (!contact) {
    throw new AppError(404, "Client not foud.");
  }

  const updatedContact = await prisma.contacts.update({
    where: {
      id,
    },
    data: {
      name: name ? name : contact.name,
      email: email ? email : contact.email,
      telephone: telephone ? telephone : contact.telephone,
    },
  });

  return updatedContact;
};

export default updateContactService;
