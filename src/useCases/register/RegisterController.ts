import { Request, Response } from "express";
import { RegisterUseCase } from "./RegisterUseCase";

export class RegisterController {
  constructor(private RegisterUseCase: RegisterUseCase) {}

  async handle(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const command = request.body;
      const registerId = await this.RegisterUseCase.execute(command);

      return response.status(200).json({ registerId });
    } catch (err) {
      return response.status(400).json({
        info: "Error while trying to insert item.",
        SystemMessage: err,
      });
    }
  }
}
