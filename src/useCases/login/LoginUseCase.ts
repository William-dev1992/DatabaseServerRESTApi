import { getUserController } from "../getUser";
import jwt from "jsonwebtoken"

export class LoginUseCase {
  constructor (
  ) {}

  async execute({email, password}) {
    const user = await getUserController.handle(email)

    if (user.password !== password) {
      console.error('Senha inválida')
    }

    const token = jwt.sign({id: user.id}, process.env.JWT_PASS, { expiresIn: '8d' })

    return token
  }
}