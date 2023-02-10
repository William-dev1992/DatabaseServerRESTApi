import { Request, Response } from "express";
import { RegisterUseCase } from "./RegisterUseCase";

export class RegisterController {
  constructor(private RegisterUseCase: RegisterUseCase) {}

  handle(request: Request, response: Response): void {
    const command = request.body;

    this.RegisterUseCase.execute(command);

    return console.log("registrado na fila");
  }
}
