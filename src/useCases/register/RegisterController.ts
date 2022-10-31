import { Request, Response } from 'express';
import { RegisterUseCase } from './RegisterUseCase';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { getUserController } from '../getUser';

export class RegisterController {
  constructor(
    private RegisterUseCase: RegisterUseCase
  ) {}

  handle(request: Request, response: Response): void {
    const { authorization } = request.headers;

    if (!authorization) {
      throw console.error('Não autorizado')
    }

    const token = authorization.split(' ')[1]

    const { id } = jwt.verify(token, process.env.JWT_PASS) as JwtPayload

    const user = getUserController.handle(id, "ID")

    if (!user) {
      throw console.error('Não autorizado')
    }

    // const command = request.body;

    // Chamar UseCase.
    // this.RegisterUseCase.execute(command)

    return console.log('registrado na fila')
  } 
}