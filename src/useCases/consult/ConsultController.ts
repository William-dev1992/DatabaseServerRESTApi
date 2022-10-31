import { Request, Response } from 'express';
import { ConsultUseCase } from './ConsultUseCase';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { getUserController } from '../getUser';
import { AuthorizeUser } from '../../middlewares/authorization';

export class ConsultController {
  constructor(
    private ConsultUseCase: ConsultUseCase
  ) {}

  handle(request: Request, response: Response): void {
    // const { id } = request.params;

    // Chamar UseCase.
    // this.RegisterUseCase.execute(command)

    return console.log('registrado na fila')
  } 
}