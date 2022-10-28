import { getUserController } from "../getUser";
import jwt from "jsonwebtoken";
import { ILoginDTO } from "./LoginDTO";

export class LoginUseCase {
  async execute({email, password}: ILoginDTO): Promise<string> {
    const user = await getUserController.handle(email, "EMAIL")
    
    if (user.PASSWORD !== password) {
      throw console.error('Senha inválida')
    }
    
    return jwt.sign({id: user.ID}, process.env.JWT_PASS, { expiresIn: '8d' })
  }
}