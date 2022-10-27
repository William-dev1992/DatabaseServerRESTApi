import { Router } from "express";
import { loginController } from "./useCases/login";

const router = Router()

router.get('/login', (request, response) => {
  
  return loginController.handle(request, response)
})

export { router }