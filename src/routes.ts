import { Router } from "express";
import { loginController } from "./useCases/login";
import { queryController } from "./useCases/query";

const router = Router()

router.post('/login', (request, response) => {
  return loginController.handle(request, response)
})

router.post('/query', (request, response) => {
  return queryController.handle(request, response)
})

export { router }