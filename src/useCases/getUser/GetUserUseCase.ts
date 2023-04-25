import userModel from "../../models/User";

export class GetUserUseCase {
  async execute(email: string, response, id?: string) {
    let query = {};

    if (id) {
      query = { _id: id };
    } else {
      query = { email };
    }

    const user = await userModel.find(query);

    try {
      return user[0];
    } catch (error) {
      response.status(500).send(error);
    }
  }
}
