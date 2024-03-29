import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
  constructor(private LoginUseCase: LoginUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      const userToken = await this.LoginUseCase.execute(
        {
          email,
          password,
        },
        response
      );

      return response.status(201).send({ apiToken: userToken });
    } catch (err) {
      return response.status(400).json({
        message: "Invalid user information.",
      });
    }
  }
}
