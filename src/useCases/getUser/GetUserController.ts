import { Request, Response } from 'express';
import { GetUserUseCase } from './GetUserUseCase'

export class GetUserController {
  constructor(
    private GetUserUseCase: GetUserUseCase
  ) { }

  async handle(email: string): Promise<Record<string, string>> {
    const user = await this.GetUserUseCase.execute({
      email
    })

    return user
  }
}