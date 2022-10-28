import { QueryController } from "./QueryController";
import { QueryUseCase } from "./QueryUseCase";

const queryUseCase = new QueryUseCase()

const queryController = new QueryController(
  queryUseCase
)

export { queryController }