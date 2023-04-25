import { Request, Response, NextFunction, Router } from "express";
import { loginController } from "./useCases/login";
import { queryController } from "./useCases/query";
import { registerController } from "./useCases/register";
import { consultController } from "./useCases/consult";
import { AuthorizeUser } from "./middlewares/Authorization";
import { createUserController } from "./useCases/createUser";

const router = Router();

const authorizeUser = (req: Request, res: Response, next: NextFunction) => {
  new AuthorizeUser().validate(req, res);
  next();
};

router.post("/login", (request, response) => {
  return loginController.handle(request, response);
});

router.post("/createUser", (request, response) => {
  return createUserController.handle(request, response);
});

router.use(authorizeUser);

router.post("/query", (request, response) => {
  return queryController.handle(request, response);
});

router.post("/register", (request, response) => {
  return registerController.handle(request, response);
});

router.get("/consult/:id", (request, response) => {
  return consultController.handle(request, response);
});

export { router };
