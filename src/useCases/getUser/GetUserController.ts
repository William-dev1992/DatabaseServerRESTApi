import { GetUserUseCase } from "./GetUserUseCase";

export class GetUserController {
  constructor(private GetUserUseCase: GetUserUseCase) {}

  async handle(email: string, response, id?: string) {
    const user = await this.GetUserUseCase.execute(email, response, id);

    return user;
  }
}
