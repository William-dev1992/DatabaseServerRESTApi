import Data from "@/models/Data";

export class ConsultUseCase {
  async execute(itemId: string) {
    return await Data.findOne({ _id: itemId }, "status result");
  }
}
