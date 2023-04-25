import { JwtPayload } from "jsonwebtoken";
import { getUserController } from "@/useCases/getUser";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export class AuthorizeUser {
  validate(request: Request, response: Response) {
    const { authorization } = request.headers;

    if (!authorization) {
      throw console.error("Não autorizado");
    }

    const token = authorization.split(" ")[1];

    const { id } = jwt.verify(token, process.env.JWT_PASS) as JwtPayload;

    const user = getUserController.handle("", response, id);

    if (!user) {
      return response.status(500).send("Não autorizado");
    }

    return user;
  }
}
