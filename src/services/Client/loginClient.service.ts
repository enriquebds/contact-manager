import { prisma } from "../../../prisma/client/client";
import { ILoginRequest } from "../../interfaces/client/client";
import { AppError } from "../../errors/AppError";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

const loginService = async ({ email, password }: ILoginRequest) => {
  const client = await prisma.client.findFirst({
    where: {
      email,
    },
  });

  const passwordCompare = await compare(password, client?.password!);

  if (!passwordCompare) {
    throw new AppError(403, "Wrong email/password");
  }

  const token = jwt.sign(
    {
      email: client?.email,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
    }
  );

  return { token: token, userId: client?.id };
};

export default loginService;
