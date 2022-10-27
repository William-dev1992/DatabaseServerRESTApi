import { User } from "../entities/User";

export interface IUsersRepository {
  login(): Promise<User>
}