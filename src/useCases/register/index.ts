import { RegisterController } from "./RegisterController";
import { RegisterUseCase } from "./RegisterUseCase";

const registerUseCase = new RegisterUseCase()

const registerController = new RegisterController(
  registerUseCase
)

export { registerController }