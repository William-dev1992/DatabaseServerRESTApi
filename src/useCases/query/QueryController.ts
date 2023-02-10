import { Request, Response } from "express";
import { QueryUseCase } from "./QueryUseCase";

export class QueryController {
  constructor(private QueryUseCase: QueryUseCase) {}

  handle(request: Request, response: Response): void {
    const query = request.body;

    this.QueryUseCase.execute(query);

    return console.log("registrado na fila");
  }
}
