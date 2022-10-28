import { GetUserUseCase } from './GetUserUseCase'

export class GetUserController {
  constructor(
    private GetUserUseCase: GetUserUseCase
  ) { }

  async handle(param: string, name: string): Promise<Record<string, string>> {
    const user = await this.GetUserUseCase.execute({
      param, 
      name
    })

    return user
  }
}