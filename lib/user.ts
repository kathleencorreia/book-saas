import db from "./db";
import { compareSync } from "bcrypt-ts";

type user = {
  name: string;
  email: string;
  password?: string;
};
// função que procura o usuário n base de dados
export async function findUserByCredentials(
  email: string,
  password: string
): Promise<user | null> {
  const user = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    return null;
  }

  // comparar o password do login com o haspassword da base de dados
  const passwordMatch = compareSync(password, user.password);

//   se o passwordMatch der true return the user if false return null
  if (passwordMatch) {
    return { email: user.email, name: user.name };
  }

  return null;
}
