import { Client } from "@prisma/client";
import { prisma } from "../../../prisma/client/client";

const listClientService = async (): Promise<Client[]> => {
  const clients = await prisma.client.findMany({
    include: {
      contacts: true,
    },
  });

  return clients;
};

export default listClientService;
