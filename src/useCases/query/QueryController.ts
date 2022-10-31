import { Request, Response } from 'express';
import { QueryUseCase } from './QueryUseCase';
import { AuthorizeUser } from '../../middlewares/authorization';

export class QueryController {
  constructor(
    private QueryUseCase: QueryUseCase
  ) {}

  handle(request: Request, response: Response): void {
    // const query = request.body;
    

    // Chamar UseCase.
    // this.QueryUseCase.execute(query)

    return console.log('registrado na fila')
  } 
}