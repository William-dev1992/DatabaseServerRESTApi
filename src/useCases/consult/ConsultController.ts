import { Request, Response } from "express";
import { ConsultUseCase } from "./ConsultUseCase";

export class ConsultController {
  constructor(private ConsultUseCase: ConsultUseCase) {}

  async handle(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const { id } = request.params;
      const result = await this.ConsultUseCase.execute(id);

      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json({
        message: err,
      });
    }
  }
}
