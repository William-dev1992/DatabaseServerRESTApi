import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private CreateUserUseCase: CreateUserUseCase) {}

  async handle(request, response): Promise<Record<string, string>> {
    const newUser = await this.CreateUserUseCase.execute(
      request.body,
      response
    );
    return newUser;
  }
}
