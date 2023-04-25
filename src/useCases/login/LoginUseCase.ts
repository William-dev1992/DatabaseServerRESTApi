import { getUserController } from "../getUser";
import jwt from "jsonwebtoken";
import { ILoginDTO } from "./LoginDTO";

export class LoginUseCase {
  async execute({ email, password }: ILoginDTO, response): Promise<string> {
    const user = await getUserController.handle(email, response);

    if (user.password !== password) {
      throw console.error("Senha inválida");
    }

    return jwt.sign({ id: user._id }, process.env.JWT_PASS, {
      expiresIn: "8d",
    });
  }
}
