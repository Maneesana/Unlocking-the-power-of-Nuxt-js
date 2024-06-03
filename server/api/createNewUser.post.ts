import { PrismaClient } from "@prisma/client";
export default defineEventHandler(async (event) => {
  const prismaClient = new PrismaClient();
  const body = await readBody(event);

  const result = await prismaClient.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  });
  console.log("Created a new User", result);

  return result;
});
