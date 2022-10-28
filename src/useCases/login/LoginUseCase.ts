import { getUserController } from "../getUser";
import jwt from "jsonwebtoken"

export class LoginUseCase {
  constructor (
  ) {}

  async execute({email, password}) {
    const user = await getUserController.handle(email)
    
    if (user.PASSWORD !== password) {
      throw console.error('Senha inválida')
    }
    
    return jwt.sign({id: user.ID}, process.env.JWT_PASS, { expiresIn: '8d' })
  }
}