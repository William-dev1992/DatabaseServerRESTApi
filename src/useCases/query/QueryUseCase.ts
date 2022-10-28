import { getUserController } from "../getUser";
import jwt from "jsonwebtoken"

export class QueryUseCase {
  async execute(query: Record<string, any>) {
    //Inserir comando no sistema de fila.
  }
}