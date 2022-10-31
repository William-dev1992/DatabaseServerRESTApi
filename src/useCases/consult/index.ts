import { ConsultController } from "./ConsultController";
import { ConsultUseCase } from "./ConsultUseCase";

const consultUseCase = new ConsultUseCase()

const consultController = new ConsultController(
  consultUseCase
)

export { consultController }