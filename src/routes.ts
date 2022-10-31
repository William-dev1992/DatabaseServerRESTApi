import { Request, Response, NextFunction, Router } from "express";
import { loginController } from "./useCases/login";
import { queryController } from "./useCases/query";
import { registerController } from "./useCases/register";
import { consultController } from "./useCases/consult";
import { AuthorizeUser } from "./middlewares/authorization";
import { app } from "./app";

const router = Router()

const authorizeUser = (req: Request, res: Response, next: NextFunction) => {
  new AuthorizeUser().validate(req, res)
  next()
}

router.post('/login', (request, response) => {
  return loginController.handle(request, response)
})
 
app.use(authorizeUser)

router.post('/query', (request, response) => {
  return queryController.handle(request, response)
})

router.post('/register', (request, response) => {
  return registerController.handle(request, response)
})

router.post('/consult/:id', (request, response) => {
  return consultController.handle(request, response)
})

export { router }