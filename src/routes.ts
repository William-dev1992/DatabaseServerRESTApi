import { Router } from "express";
import { loginController } from "./useCases/login";
import { queryController } from "./useCases/query";
import { registerController } from "./useCases/register";
import { consultController } from "./useCases/consult";

const router = Router()

router.post('/login', (request, response) => {
  return loginController.handle(request, response)
})

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