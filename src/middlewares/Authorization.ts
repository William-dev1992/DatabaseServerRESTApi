import { getUserController } from "@/useCases/getUser";
import { Request, Response } from "express";
import { decodeUserToken } from "@/helpers/decodeUserToken";

export class AuthorizeUser {
  validate(request: Request, response: Response) {
    const { authorization } = request.headers;

    if (!authorization) {
      throw console.error("Não autorizado");
    }

    const id = decodeUserToken(authorization);

    const user = getUserController.handle("", response, id);

    if (!user) {
      return response.status(500).send("Não autorizado");
    }

    return user;
  }
}
