import { Request, Response } from 'express';
import { QueryUseCase } from './QueryUseCase';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { getUserController } from '../getUser';

export class QueryController {
  constructor(
    private QueryUseCase: QueryUseCase
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

    // const query = request.body;
    

    // Chamar UseCase.
    // this.QueryUseCase.execute(query)

    return console.log('registrado na fila')
  } 
}