import { prisma } from "../../../prisma/client/client";
import { AppError } from "../../errors/AppError";

const deleteClient = async (id: string): Promise<boolean> => {
  const client = await prisma.client.findFirst({
    where: {
      id,
    },
  });

  if (!client) {
    throw new AppError(404, "Client not found.");
  }

  const clientDeleted = await prisma.client.delete({
    where: {
      id: client.id,
    },
  });

  return true;
};

export default deleteClient;
