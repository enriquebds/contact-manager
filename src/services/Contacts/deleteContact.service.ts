import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";

const deleteContactService = async (id: string): Promise<boolean> => {
  const contact = await prisma.contacts.findFirst({
    where: {
      id,
    },
  });

  if (!contact) {
    throw new AppError(404, "Contact not found.");
  }

  const contanctDeleted = await prisma.contacts.delete({
    where: {
      id: contact.id,
    },
  });

  return true;
};

export default deleteContactService;
