import { JwtPayload } from "jsonwebtoken"
import { getUserController } from "../useCases/getUser"
import jwt from "jsonwebtoken"
import { Request, Response } from "express";

export class AuthorizeUser {
  validate(request: Request, response: Response): Promise<Record<string, string>> {
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

    return user
  }
}