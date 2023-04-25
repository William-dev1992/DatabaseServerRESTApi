import { idGenerator } from "@/helpers/idGenerator";
import UserModel from "@/models/User";

export class CreateUserUseCase {
  async execute(userBody, response) {
    userBody._id = idGenerator();

    const user = new UserModel(userBody);

    try {
      await user.save();
      return response.send(user);
    } catch (error) {
      return response.status(500).send(error);
    }
  }
}
