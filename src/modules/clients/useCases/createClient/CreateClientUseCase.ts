import { prisma } from "../../../../database/prismaClient";
import { hash } from 'bcrypt'

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    //Validar se o usuário existe (se existir retorna um erro)
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    })

    if (clientExist) {
      throw new Error("Client Already exists")
    }
    //Criptografar a senha
    const hashPassword = await hash(password, 10)

    //Salvar o client
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword
      }
    })

    return client
  }
}