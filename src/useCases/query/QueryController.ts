import { Request, Response } from "express";
import { QueryUseCase } from "./QueryUseCase";

export class QueryController {
  constructor(private QueryUseCase: QueryUseCase) {}

  async handle(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const query = request.body;
      await this.QueryUseCase.execute(query);

      return response.status(200).json("Registro na fila concluído");
    } catch (err) {
      return response.status(400).json({
        message: err,
      });
    }
  }
}
